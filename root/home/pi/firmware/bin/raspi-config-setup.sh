# 1|0 -> 1=false/off 0=true/on
get_pi_type

do_update

do_overscan 1
do_change_pass password
do_change_locale "en_US.UTF-8"
do_change_timezone "America/New_York"
do_wifi_country "US"
do_hostname "smartcloud"
do_ssh 0
do_vnc 0
do_vnc_resolution "1280x720"

list_wlan_interfaces

disable_raspi_config_at_boot

# do_wifi_ssid_passphrase
# get_boot_wait
# do_boot_wait
# get_boot_splash
# do_boot_splash

vcgencmd get_mem gpu | cut -d = -f 2 | cut -d M -f 1
echo \"$SUDO_USER:%s\" | chpasswd
