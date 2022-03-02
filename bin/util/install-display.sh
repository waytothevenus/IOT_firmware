#!/bin/sh

sudo rm -rf LCD-show
git clone https://github.com/goodtft/LCD-show.git /home/pi/firmware/vendor/LCD-show
sudo chmod -R 755 LCD-show
cd /home/pi/firmware/vendor/
sudo ./MHS35-show
