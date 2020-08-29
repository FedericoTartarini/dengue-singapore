#!/bin/sh
# pull request to update files
echo "Pull request"

git pull

sleep 30

echo "Starting python scripts"
# start beacon scanner
sudo python3 download_dengue_data.py &

sleep 30

echo "Pushing to github"
git push

