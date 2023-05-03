export MASTODON_ACCESS_TOKEN=OkLyrmrcyz1mskpRP0DYJ6or2ZnbDW-2AWaXH1oQzfc
export SERVER="hachyderm.io"
export URL="https://$SERVER/api/v1"
export SERVERURL="https://$SERVER"
export FILENAME="../data/$SERVER.json"
curl --header "Authorization: Bearer ${MASTODON_ACCESS_TOKEN=}" \
     -XGET \
     -vvv \
  	 "${URL}/accounts/verify_credentials" | jq
python3 - <<END
# -*- coding: UTF-8 -*-
from mastodon import Mastodon, MastodonNotFoundError, MastodonRatelimitError, StreamListener
import os, json, re
import nltk
from nltk.sentiment.vader import SentimentIntensityAnalyzer
# nltk.download('vader_lexicon')

re_clean = re.compile('<.*?>')
senti = SentimentIntensityAnalyzer()

m = Mastodon(
        api_base_url=os.environ['SERVERURL'],
        access_token=os.environ['MASTODON_ACCESS_TOKEN']
    )
class Listener(StreamListener):
    def on_update(self, status):
        with open(os.environ['FILENAME'], 'a') as f:
            text = status.account.note
            cleaned_text = re.sub(re_clean, '', text)
            sentiment_score = senti.polarity_scores(cleaned_text)['compound']
            status["account"]["note"] = cleaned_text
            status["account"]["sentiment"] = sentiment_score
            f.write(json.dumps(status, sort_keys=True, default=str) + '\n')
m.stream_public(Listener())
END
