#!/bin/sh

network="$(wpa_cli add_network)"
echo $network
# > 0 # this is the new network's ID
wpa_cli set_network $network ssid '"The Retreat_Admin"'
wpa_cli set_network $network psk '"Retreat1929!"'
wpa_cli enable_network $network
