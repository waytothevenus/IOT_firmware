sudo wget https://nodejs.org/download/release/v11.15.0/node-v11.15.0-linux-armv6l.tar.gz

sudo tar -xzf node-v11.15.0-linux-armv6l.tar.gz &&
cd /home/pi/node-v11.15.0-linux-armv6l/ &&
sudo cp -R * /usr/local/

sudo node -v
sudo npm -v
