#!/bin/sh

# Config


# Install App Dependencies
sudo apt-get update -y

# Communication
sudo apt-get install samba

# Install Node
# Use nodesource for a better node version
curl -sL https://deb.nodesource.com/setup_17.x | bash -
sudo apt-get install -y nodejs

# List node version
node -v
npm -v

# Py dependencies
sudo pip install -r /home/pi/firmware/requirements.txt
