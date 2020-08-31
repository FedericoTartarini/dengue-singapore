#!/bin/sh
# pull request to update files
echo "cd into repo"
cd /home/ubuntu/dengue-singapore

echo "Pull request"
git pull

echo "Starting python scripts"
sudo python3 ./python/download_dengue_data.py

echo "Pushing to github"
git add .
git commit -m "updated data"
git push

