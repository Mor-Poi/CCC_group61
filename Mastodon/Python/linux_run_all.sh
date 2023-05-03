#!/usr/bin/env bash
cd //data/Mastodon/
logfile=logfile.log
find scripts -name "*.sh" | parallel -j 12 'bash {} >> "$logfile" 2>&1'