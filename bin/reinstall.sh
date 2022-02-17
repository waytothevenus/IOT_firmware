#!/bin/sh
sudo rm -rf /home/pi/firmware
bash <(curl -s https://raw.githubusercontent.com/lacymorrow/iot-firmware/main/install.sh)
