#!/bin/bash
cd scripts/
# Loop through the .sh files in the directory
# Remember to install mastodon.py, nltk, re packages
for file in *.sh
do
    # Open a new Terminal window and run the .sh file in it
    open -a Terminal && osascript -e "tell application \"Terminal\" to do script \" \
    cd /Users/zep/Desktop/Mastodon/scripts; \
    . ./$file; \
    \""
done