#!/usr/bin/python3
import subprocess
import time
import argparse

# run the script:
# python3 stream.py
# python3 stream.py --v True


parser = argparse.ArgumentParser()
parser.add_argument('--v', default=False, help='Print the status', type=bool)
args = parser.parse_args()
verbose = args.v

input_args = [{"SERVER":"techhub.social","MASTODON_ACCESS_TOKEN":"CC1qGVa6V16zw896WrjJQiedCcGH9CZjFVU2EoZlzlw"},
              {"SERVER":"aus.social","MASTODON_ACCESS_TOKEN":"QLFqT36ITEEt0fcJ6CLdUNSvwLZcF5nlAiSpYd-LEJg"},
              {"SERVER":"hachyderm.io","MASTODON_ACCESS_TOKEN":"OkLyrmrcyz1mskpRP0DYJ6or2ZnbDW-2AWaXH1oQzfc"},
              {"SERVER":"mas.to","MASTODON_ACCESS_TOKEN":"jZWBTcyAls23uHVU9wPv83R_EPS0rKucynnnH28Q1Xo"},
              {"SERVER":"mastodon.cloud","MASTODON_ACCESS_TOKEN":"2nPBYaBjiYYKEPz0aHVwWDqflnfXyu_HkCXczUHh4m8"},
              {"SERVER":"mastodon.au","MASTODON_ACCESS_TOKEN":"HdCkQSPgFW9Q37RJTekMR5q7-dWc6IHf4VyuWr505uc"},
              {"SERVER":"mastodon.online","MASTODON_ACCESS_TOKEN":"6KKP79ro9hgIRECowB6ygjWBtNdl2bXf9NIyZVKKce4"},
              {"SERVER":"mastodon.world","MASTODON_ACCESS_TOKEN":"dv_YEFP-yd66egi8TfVf6dYU0GjWDx8RSP7ybEkI7xI"},
              {"SERVER":"mstdn.social","MASTODON_ACCESS_TOKEN":"F75zkInAzRgDMwd85uzxKdEyrB1yUtmSBr3_fjxyaYE"},
              {"SERVER":"newsie.social","MASTODON_ACCESS_TOKEN":"I5OsF6XIiubBZg4KeVkPrMSXjGpgnRIFpKXxiSyrWDE"},
              {"SERVER":"universeodon.com","MASTODON_ACCESS_TOKEN":"WDqc6sP4yDY7L_IgadDsxezz9ITH7v6jVaXnmXsSjeg"},
              {"SERVER":"fosstodon.org","MASTODON_ACCESS_TOKEN":"Sb9SV4R2Ejr-gjBrorL1_W7TdwHIhSPp9VIb9ijF5hk"},
              ]
interval = 120
python_file = "streamTwitter.py"
processes = [subprocess.Popen(["python3", python_file] + [f"--{k}={v}" for k, v in args.items()]) for args in input_args]

while True:
    for i, process in enumerate(processes):
        server = input_args[i]["SERVER"]
        if process.poll() is not None:
            # The process has completed
            if verbose:
                print("Subprocess {:16s} has completed with return code {:3d}".format(server, process.returncode))
            processes[i] = subprocess.Popen(["python3", python_file] + [f"--{k}={v}" for k, v in input_args[i].items()])
        else:
            if verbose:
                print("Subprocess {:16s} is running".format(server))
    # Wait for the interval before checking again
    time.sleep(interval)
    print()

