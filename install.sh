#!/bin/sh

# sudo apt-get update -y

# Install Git
if ! command -v git &> /dev/null
then
	sudo apt-get install -y git
fi

sudo rm -rf /home/pi/firmware
sudo git clone https://github.com/lacymorrow/iot-firmware.git /home/pi/firmware

sudo touch /boot/ssh
sudo cp -R /home/pi/firmware/root/boot/* /boot/
sudo cp -R /home/pi/firmware/root/etc/default/* /etc/default
sudo cp -R /home/pi/firmware/root/etc/default/* /etc/default


sudo rm /etc/rc.local
sudo cp -R /home/pi/firmware/root/etc/rc.local /etc

# Set user password
sudo echo "pi:pi" > pass.txt
sudo chpasswd < pass.txt
