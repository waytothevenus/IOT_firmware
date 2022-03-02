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
# TODO use main branch (CURRENTLY USING DEV)
sudo git clone --single-branch --branch dev https://github.com/lacymorrow/iot-firmware.git /home/pi/firmware

sudo git -C /home/pi/firmware/ config pull.rebase false
sudo chmod -R 755 /home/pi/firmware/bin

# Backup Config files
sudo cp /boot/config.txt /boot/config.old.txt

# Enable SSH
sudo touch /boot/ssh

# Copy root directory
sudo cp -R /home/pi/firmware/root/boot/* /boot/
sudo cp -R /home/pi/firmware/root/etc/default/* /etc/default
sudo cp -R /home/pi/firmware/root/etc/default/* /etc/default

sudo cp -R /home/pi/firmware/root/home/pi/* /home/pi


# # Set Permissions
# echo '> Set shell permissions'
# sudo chmod 755 -R /home/pi/firmware/bin/

# Boot files
sudo rm /etc/rc.local
sudo cp -R /home/pi/firmware/root/etc/rc.local /etc

# TODO Change password
# Set user password
sudo echo "pi:pi" > pass.txt
sudo chpasswd < pass.txt

# raspi-config
sudo bash /home/pi/firmware/bin/util/raspi-config-setup.sh

# TODO REMOVE: Setup home wifi network; replace <ssid> and <password>
# sudo bash /home/pi/firmware/bin/util/connect-wifi-network.sh <ssid> <password>
# sudo bash /home/pi/firmware/bin/util/connect-wifi-network.sh Castle homesweethome

# If connected to network
ping -q -c1 google.com &>/dev/null && sudo bash /home/pi/firmware/bin/first_run.sh

# Reboot (if display script didn't already)
# sudo reboot
