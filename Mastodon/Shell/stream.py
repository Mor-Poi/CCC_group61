#!/usr/bin/python3
import subprocess


python_file = "streamTwitter.py"

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
              {"SERVER":"techhub.social","MASTODON_ACCESS_TOKEN":"CC1qGVa6V16zw896WrjJQiedCcGH9CZjFVU2EoZlzlw"},
              ]

while True:
    processes = [subprocess.Popen(["python3", python_file] + [f"--{k}={v}" for k, v in args.items()]) for args in input_args]

    
    for i, process in enumerate(processes):
        server = input_args[i]["SERVER"]
        exit_code = process.wait()
        if exit_code != 0:
            print(f"Error: subprocess {server} exited with code {exit_code}")
