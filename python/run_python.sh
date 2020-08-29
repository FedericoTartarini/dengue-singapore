#!/bin/sh
# pull request to update files
echo "Pull request"

git pull

echo "Starting python scripts"
sudo python3 download_dengue_data.py

echo "Pushing to github"
git add .
git commit -m "updated data"
git push

