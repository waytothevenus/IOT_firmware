from pybin.app import DEBUG


DEBUG = True


class Api():
    # Usage: get`_ip_address('eth0') -> 192.160.0.110
    def getIpAddress(self, params):
        if DEBUG:
            self.log(params)
        ifname = 'p2p-dev-wlan0'
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        # try:
        ip = socket.inet_ntoa(fcntl.ioctl(
            s.fileno(),
            0x8915,  # SIOCGIFADDR
            struct.pack('256s', ifname[:15])
        )[20:24])
        response = {
            'message': str(ip)
        }
        # except:
        #     # Error - could not retrieve IP
        #     response = {
        #         'message': 'Could not receive IP address'
        #     }
        if DEBUG:
            self.log('IP: ' + str(ip))

        return json.dumps(response)


if __name__ == '__main__':
    api = Api()

    print(api.getIpAddress('asd'))
