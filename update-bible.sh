#!/bin/bash

python3 /home/ubuntu/scripts/discord-link-scraper.py
cd /home/ubuntu/academic-cv-site/
/snap/bin/hugo
git add ./
git commit -m "auto-commit: `date`"



echo "Done!"
