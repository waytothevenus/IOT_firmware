#!/bin/sh

# Config

# Install App Dependencies
sudo apt-get update -y


# Communication
sudo apt-get install samba bonjour

# Install Node
# Use nodesource for a better node version
curl -sL https://deb.nodesource.com/setup_17.x | bash -
sudo apt-get install -y nodejs

# List node version
node -v
npm -v

# Py dependencies
sudo pip install -r /home/pi/firmware/requirements.txt

# # Install remote desktop
# sudo apt-get install realvnc-vnc-server

# sudo apt install -y tightvncserver xrdp
#

# sudo -E leafpad /etc/samba/smb.conf &
# [PiShare]
#  comment=Pi Share
#  path=/home/pi
#  browseable=yes
#  writeable=yes
#  only guest=no
#  create mask=0740
#  directory mask=0750
#  public=no
