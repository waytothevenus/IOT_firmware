#!/bin/sh

# Tip: To configure a network block to a hidden wireless SSID, which by definition will not turn up in a regular scan, the option scan_ssid=1 has to be defined in the network block.
# wpa_cli set_network "$network" scan_ssid 1

network="$(wpa_cli -i wlan0 add_network)"
# > 0 # this is the new network's ID
echo "Setting network $network to $1"
wpa_cli -i wlan0 set_network "$network" ssid '"'$1'"'
# wpa_cli set_network '$network' psk '""'
if [[ ! -z $2 ]]; then
	echo "Setting network $network password to $2"
	wpa_cli -i wlan0 set_network "$network" psk '"'$2'"'
else
	wpa_cli -i wlan0 set_network "$network" key_mgmt NONE
fi
wpa_cli -i wlan0 enable_network "$network"
wpa_cli save_config
# wpa_cli -i wlan0 reconfigure
