# iot-firmware-boilerplate
Raspberry Pi Raspbian-based Kiosk Web system for IoT devices.

Use your favorite frontend framework with your choice of backend programming to create interactive Kiosk applications that have full, native system access. A python webview is used to bridge the gap.

## Features

- Automatically login, update, and run your app on boot.
- Single install script takes care of setup, installation, and drivers.

## Usage

With a fresh Raspberry Pi running RaspberryPi OS (Raspbian):

- Open terminal or ssh in (if you've already enabled it)
- Run: `bash <(curl -s https://raw.githubusercontent.com/lacymorrow/iot-firmware/main/install.sh)`

## Under the hood:

- Installs `git`
- Clones this repo
- Changes password to `pi` (Username is also `pi`)
- Changes splash screen
- Setup raspi-config wifi
- Enables SSH
- Adds boot config for attached display
- Adds boot script (`User pi autostart`)
