#!/usr/bin/python3
# -*- coding: UTF-8 -*-

# pip install mastodon.py
# pip install nltk
# nltk.download('vader_lexicon')

from mastodon import Mastodon, MastodonNotFoundError, MastodonRatelimitError, StreamListener
import os, json, re
import nltk
from nltk.sentiment.vader import SentimentIntensityAnalyzer
import argparse
import time, sys
import requests

class Listener(StreamListener):
    def on_update(self, status):
        with open(FILENAME, 'a') as f:
            text = status.account.note
            cleaned_text = re.sub(re_clean, '', text)
            sentiment_score = senti.polarity_scores(cleaned_text)['compound']
            status["account"]["note"] = cleaned_text
            status["account"]["sentiment"] = sentiment_score
            f.write(json.dumps(status, sort_keys=True, default=str) + '\n')


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument("--SERVER", help="SERVER", type=str)
    parser.add_argument("--MASTODON_ACCESS_TOKEN", help="MASTODON_ACCESS_TOKEN", type=str)

    # Parse the command-line arguments
    args = parser.parse_args()

    # Access the argument values
    SERVER = args.SERVER
    MASTODON_ACCESS_TOKEN = args.MASTODON_ACCESS_TOKEN
    
    # if SERVER == "mas.to":
    #     time.sleep(1)
    #     sys.exit(0) 
    FILENAME = f"data/{SERVER}.json" 
    re_clean = re.compile('<.*?>')
    senti = SentimentIntensityAnalyzer()

    # Streaming the Mastodon data
    m = Mastodon(
            api_base_url = f"https://{SERVER}",
            access_token = MASTODON_ACCESS_TOKEN
        )
    try:
        m.stream_public(Listener())
    except Exception as e:
        print(f"\tError occurred: {e}")
        sys.exit(1) 




