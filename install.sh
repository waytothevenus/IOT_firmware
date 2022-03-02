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

# Boot files
sudo rm /etc/rc.local
sudo cp /home/pi/firmware/root/etc/rc.local /etc/rc.local

# Copy root directory
sudo cp -R /home/pi/firmware/root/boot /boot/
sudo cp -R /home/pi/firmware/root/etc/default /etc/default

# TODO Splashscreen

# sudo cp /home/pi/firmware/root/home/pi/.config/lxpanel/LXDE-pi/panels/panel /home/pi/.config/lxpanel/LXDE-pi/panels/panel
# sudo cp /home/pi/firmware/root/home/pi/.config/lxsession/LXDE-pi/autostart /home/pi/.config/lxsession/LXDE-pi/autostart


# # Set Permissions
# echo '> Set shell permissions'
# sudo chmod 755 -R /home/pi/firmware/bin/

# TODO Change password
# Set user password
sudo echo "pi:pi" > pass.txt
sudo chpasswd < pass.txt

# raspi-config
sudo bash /home/pi/firmware/bin/util/raspi-config-setup.sh

# Delete Raspi-config wizard
sudo cp /etc/xdg/autostart/piwiz.desktop /home/pi/firmware
sudo rm /etc/xdg/autostart/piwiz.desktop

# TODO REMOVE: Setup home wifi network; replace <ssid> and <password>
# sudo bash /home/pi/firmware/bin/util/connect-wifi-network.sh <ssid> <password>
# sudo bash /home/pi/firmware/bin/util/connect-wifi-network.sh Castle homesweethome

# If connected to network
if [ ! -e /home/pi/.first_run ]; then
    echo "-*- First Run -*-"
	sudo bash /home/pi/firmware/bin/first-run.sh
fi

# Reboot (if display script didn't already)
sudo reboot
