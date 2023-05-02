import re
import os
import sys
import json
import time
import requests
import argparse
from mpi4py import MPI

def load_lga(lga_file):
    with open(lga_file, 'r') as f:
        lgas_data = json.load(f)
        return lgas_data

def get_lga(lgas_data, locations):
    for loc in locations:
        if loc in lgas_data:
            lga = [lgas_data[loc]['lga_code'],loc]
            return lga
        else:
            return None

def split_json_file(file_path, num_partitions):
    file_size = os.path.getsize(file_path)
    partition_size = file_size // num_partitions

    partition_start_indices = [0]
    partition_end_ids = []

    with open(file_path, "rb") as f:
        for i in range(num_partitions - 1):
            f.seek(partition_size * (i + 1))
            while True:
                byte = f.read(1)
                if byte == b'\n':
                    start_index = f.tell()
                    partition_start_indices.append(start_index)

                    line = f.readline()
                    end_id = re.search(rb'"id":"(\d+)"', line).group(1).decode('utf-8')
                    partition_end_ids.append(end_id)
                    break
        
    return partition_start_indices, partition_end_ids

def process_twitter_row(row_text, lgas_data):
    if '"includes":{"places"' in row_text: # Location info included

        patterns = {
            "_id": r'"_id":"(.*?)"',
            "author_id": r'"author_id":"(.*?)"',
            "created_at": r'"created_at":"(.*?)"',
            "lang": r'"lang":"(.*?)"',
            "tags": r'"tags":"(.*?)"',
            "tokens": r'"tokens":"(.*?)"',
            "retweet_count": r'"retweet_count":(\d+)',
            "reply_count": r'"reply_count":(\d+)',
            "like_count": r'"like_count":(\d+)',
            "quote_count": r'"quote_count":(\d+)',
            "sentiment": r'"sentiment":(-?\d+(\.\d+)?)',
            "places": r'"full_name":"(.*?)"',
            "geo_bbox": r'"bbox":\[(.*?)\]'
        }

        processed_twitter = {}

        for key, pattern in patterns.items():
            match = re.search(pattern, row_text)
            if match:
                value = match.group(1)
                # Data format in dict
                if key == "places":
                    value = get_lga(lgas_data, value.split(", "))
                    if value == None:
                        return None
                elif key in ["retweet_count", "reply_count", "like_count", "quote_count"]:
                    value = int(value)
                elif key == "geo_bbox":
                    value = list(map(float, match.group(1).split(",")))
                elif key == "sentiment":
                    value = float(value)
                processed_twitter[key] = value

        return processed_twitter
    else:
        return None
    
def connect_to_db(couch_server, couch_user, couch_pwd, db_name):
    db_url = f'http://{couch_user}:{couch_pwd}@{couch_server}/{db_name}'
    response = requests.put(db_url)
    if response.status_code == 201:
        print(f"Database '{db_name}' created successfully.")
    return db_url
    
def upload_to_db(db_url, documents):
    upload_url = f'{db_url}/_bulk_docs'
    headers = {"Content-Type": "application/json"}
    payload = {"docs": documents}

    response = requests.post(upload_url, headers=headers, json=payload)
    if not response.ok:
        print(f"Failed: {response.reason}")
        sys.exit(1)

def process(file_path, db, lgas_data, start, partition_start_indices, partition_end_ids):

    if partition_start_indices.index(start) < len(partition_start_indices)-1:
        end = partition_end_ids[partition_start_indices.index(start)]
    else :
        end = ']}\n'

    processed_twitters = []
    bunch_size = 10000
    with open(file_path, "r") as f:
        f.seek(start)
        for line in f:
            if end in line:
                break # stop the chunk process
            else:
                processed_twitter = process_twitter_row(line, lgas_data)
                if processed_twitter != None:
                    processed_twitters.append(processed_twitter)

                    if len(processed_twitters) == bunch_size:
                        upload_to_db(db, processed_twitters)
                        print(f'Bunch {bunch_size} uploaded.')
                        processed_twitters = []
        upload_to_db(db, processed_twitters)
        print(f'Rest of bunch {len(processed_twitters)} uploaded.')

def parallel(twitter_file, db, lgas_data):

    # Initialize MPI communicator obj
    comm = MPI.COMM_WORLD
    rank = comm.Get_rank()
    size = comm.Get_size()

    partition_start_indices, partition_end_ids = split_json_file(file_path=twitter_file, num_partitions=size)

    # If the process is the root (rank 0), it scatters the chunks, perform processing and gathers results
    if rank == 0:
        start = comm.scatter(partition_start_indices, root=0)
        process(twitter_file, db, lgas_data, start, partition_start_indices, partition_end_ids)

    # For all other processes, they receive the start position and perform the processing
    else:
        start = comm.scatter(None, root=0)
        process(twitter_file, db, lgas_data, start, partition_start_indices, partition_end_ids)


if __name__ == "__main__":
    
    start_time = time.time()

    parser = argparse.ArgumentParser(description='Process data and upload to CouchDB')
    parser.add_argument('-twitter', type=str, help='File path for twitter json file')
    parser.add_argument('-lga', type=str, help='File path for lga json file')
    parser.add_argument('-server', type=str, help='Server URL')
    parser.add_argument('-user', type=str, help='Username of CouchDB')
    parser.add_argument('-pwd', type=str, help='Password of CouchDB')
    parser.add_argument('-db', type=str, help='Name of database')
    args = parser.parse_args()

    twitter_file = args.twitter
    lga_file = args.lga
    couch_server = args.server
    couch_user = args.user
    couch_pwd = args.pwd
    db_name = args.db

    db = connect_to_db(couch_server, couch_user, couch_pwd, db_name)
    lgas_data = load_lga(lga_file)

    parallel(twitter_file, db, lgas_data)

    end_time = time.time()
    total_time_sec = end_time - start_time
    total_time_min = total_time_sec / 60
    print(total_time_min, "min")

''' run: 
mpiexec -n 4 python3 upload_twitter_to_couchdb.py -twitter "twitter-huge.json" -lga "au-lga.json" -server "172.26.131.86:5984" -user "admin" -pwd "pass" -db "loc_twitter"
'''