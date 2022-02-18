#!/bin/sh

# sudo systemctl enable getty@tty1.service
# sudo apt-get update -y

# Install Git
if ! command -v git &> /dev/null
then
	sudo apt-get install -y git
fi

# Set git config (rebase strategy)

# Clone repo
sudo rm -rf /home/pi/firmware
sudo git clone https://github.com/lacymorrow/iot-firmware.git /home/pi/firmware

sudo git -C /home/pi/firmware/ config pull.rebase false

# Config files
sudo touch /boot/ssh
sudo cp -R /home/pi/firmware/root/boot/* /boot/
sudo cp -R /home/pi/firmware/root/etc/default/* /etc/default
sudo cp -R /home/pi/firmware/root/etc/default/* /etc/default

# Boot files
sudo rm /etc/rc.local
sudo cp -R /home/pi/firmware/root/etc/rc.local /etc


# Set user password
sudo echo "pi:pi" > pass.txt
sudo chpasswd < pass.txt

# raspi-config
sudo bash /home/pi/firmware/bin/raspi-config-setup.sh

# Reboot
sudo reboot
