import couchdb
import json
import nltk
from nltk.sentiment.vader import SentimentIntensityAnalyzer
import re
import requests
import sys



# connect to the remote server
def connect_to_db(db_name, couch_server, couch_user,couch_pwd):
    db_url = f'http://{couch_user}:{couch_pwd}@{couch_server}/{db_name}'
    response = requests.put(db_url)
    if response.status_code == 201:
        print(f"Database '{db_name}' created successfully.")
    return db_url

# upload to the remote server
def upload_to_db(db_url, documents):
    upload_url = f'{db_url}/_bulk_docs'
    headers = {"Content-Type": "application/json"}
    payload = {"docs": documents}
    response = requests.post(upload_url, headers=headers, json=payload)
    if not response.ok:
        print(f"Failed: {response.reason}")
        sys.exit(1)


# process the json objects: calculate sentiment score, select attribute
def process_json_objects(db, json_objects, html_tag_remover,sentiment_analyser):
    processed_json_objects = []
    for json_object in json_objects:
        created_at = json_object["created_at"]
        object_id = str(json_object["id"])
        lang = str(json_object["language"])
        key = object_id + created_at

        author_id = json_object["account"]["id"]
        text = json_object["content"]
        cleaned_text = re.sub(html_tag_remover, '', text)

        sentiment_score = sentiment_analyser.polarity_scores(cleaned_text)['compound']
        retweet_count = json_object["reblogs_count"]
        reply_count = json_object["replies_count"]
        processed_json_objects.append({"_id":key, "author_id":author_id, "created_at":created_at, 
                                       "lang":lang,"text":cleaned_text,"retweet_count": retweet_count,
                                       "reply_count":reply_count, "sentiment": sentiment_score})
    return processed_json_objects


# upload file by batch 
def upload(db, json_file, batch_size):
    # during upload, remove html tags and calculate sentiment score
    html_tag_remover = re.compile('<.*?>')
    sentiment_analyser = SentimentIntensityAnalyzer()
    try:
        with open(json_file, 'r') as f:
            upload_count = 0
            json_objects = []
            for line in f:
                try:
                    json_object = json.loads(line)
                    json_objects.append(json_object)

                    upload_count += 1
                    if upload_count % batch_size == 0:
                            processed_json_objects=process_json_objects(db, json_objects, html_tag_remover,sentiment_analyser)
                            if processed_json_objects != []:
                                upload_to_db(db, processed_json_objects)
                                print(f"Total entries uploaded: {len(processed_json_objects)}/{batch_size}")
                                json_objects = []
                except Exception as e:
                    print(f"An unexpected error occurred2: {e}")
            # upload the last batch
            if json_objects:
                processed_json_objects=process_json_objects(db, json_objects, html_tag_remover,sentiment_analyser)
                if processed_json_objects != []:
                    upload_to_db(db, processed_json_objects)
                    print(f"Total entries uploaded: {len(processed_json_objects)}/{batch_size}")
                    json_objects = []

                print(f"Total entries uploaded: {upload_count}")
    except Exception as e:
        print(f"An unexpected error occurred1: {e}")
    return


if __name__ == "__main__":

    # mastodon_australia contains: aus.social, mastodon.au
    # db_name = "mastodon_australia"
    # json_file = "/Users/zep/Desktop/Mastodon_upload/data/mastodon.au.json"

    # mastodon_global contains: mstdn.social
    db_name = "mastodon_global"
    json_file = "/Users/zep/Desktop/Mastodon_upload/data/mstdn.social.json"

    # local server 
    # couch_server = "http://127.0.0.1:5984"
    # couch_user = "admin"
    # couch_pwd = "pz666666"

    # remote server on MRC
    couch_server = "172.26.132.163:5984"
    couch_user = "admin"
    couch_pwd = "pass"

    db = connect_to_db(db_name, couch_server, couch_user,couch_pwd)
    batch_size = 1000

    upload(db, json_file, batch_size)



