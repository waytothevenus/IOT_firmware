
sudo apt-get update -y

# Install Git
sudo apt-get install -y git

sudo git clone https://github.com/lacymorrow/iot-firmware.git /home/pi/firmware

sudo touch /boot/ssh
sudo cp -R /home/pi/firmware/root/boot/* /boot/

sudo rm /etc/rc.local
sudo cp -R /home/pi/firmware/root/etc/rc.local /etc

