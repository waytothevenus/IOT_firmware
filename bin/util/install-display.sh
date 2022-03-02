#!/bin/sh

# Online Download
# sudo rm -rf LCD-show
# git clone https://github.com/goodtft/LCD-show.git /home/pi/firmware/drivers/LCD-show
# sudo chmod -R 755 LCD-show
# sudo /home/pi/firmware/drivers/LCD-show/MHS35-show

# Use local
sudo chmod -R 755 /home/pi/firmware/drivers/LCD-show
cd /home/pi/firmware/drivers/LCD-show
sudo su -c ./MHS35-show
