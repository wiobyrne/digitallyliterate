---
{"dg-publish":true,"permalink":"/01-consume/articles/should-you-use-a-reverse-proxy-for-your-nas/","title":"Should you use a reverse proxy for your NAS"}
---


# Should you use a reverse proxy for your NAS



![screenshot of reverse proxy setup on synology nas](https://static1.xdaimages.com/wordpress/wp-content/uploads/wm/2025/01/reverse-proxy-synology.jpg)

If you plan on opening up parts of your local area network (LAN) to the outside world, you'll want to have specific measures to ensure your network is secure. Reverse proxies are a great way of allowing direct access to specific services hosted at home without making it easy for anyone to break in and start causing problems. A great feature of reverse proxies is running multiple services on the same IP address, even web server instances. Reverse proxies are rock-solid, secure, versatile, and powerful, and you should try setting one up to learn a few things about networking.

## What is a reverse proxy?

![Adding a reverse proxy in Synology DSM 7](https://static1.xdaimages.com/wordpress/wp-content/uploads/wm/2024/05/synology-dsm-7-reverse-proxy-bitwarden-screenshot.jpg)

You've likely heard of a forward proxy, which allows one to circumvent geo locks and other measures preventing access to specific websites. A reverse proxy works in a similar way, but ... well, in reverse. Instead of routing traffic outside your LAN and to a specific destination, a reverse proxy server will take incoming traffic requests and route them to IP addresses on your LAN. As requests are passed through the router (depending on where the reverse proxy is hosted), they will be intercepted by the reverse proxy and act as a middleman between public clients and your self-hosted services.

When using reverse proxies, the client sending the request will be none the wiser. It'll appear as though they're connecting directly to the destination server. The reverse proxy can be configured with rules, conditions, and virtual servers to switch non-HTTPS traffic to secure links and much more. As you start to host more services at home, you'll want to access them while not at home. A [virtual private network (VPN)](https://www.xda-developers.com/best-vpn/) is excellent for opening up access to your entire LAN but requires apps to be installed or devices configured. Reverse proxies are much easier to use on the client side.

    [![Adding a reverse proxy in Synology DSM 7](https://static1.xdaimages.com/wordpress/wp-content/uploads/wm/2024/05/synology-dsm-7-reverse-proxy-bitwarden-screenshot.jpg)](https://www.xda-developers.com/what-is-a-reverse-proxy-and-why-should-you-use-it-on-your-lan/)

Related

## Why would you want one for your NAS?

Fancy running Jellyfin and Vaultwarden instances at home to stream media and manage passwords? This is where reverse proxies can come into play. While it's possible to quickly access these services within your LAN using the IP address of the machine they're hosted on, as well as the port, you'll need to use your external IP address if you're not connected to the LAN. You would also need to open up access to the server IP using ports and a firewall, which I'd recommend against. A reverse proxy is more secure and easier to manage as you work in more services over time.

Reverse proxies can be used in conjunction with a [dynamic domain name service (DDNS)](https://www.xda-developers.com/reasons-use-dynamic-dns-remote-access/). You can create a *myfamilynetwork.com* domain for your LAN and configure the DDNS to update the service with your dynamic IP. That allows any device to connect to your LAN using the domain and a reverse proxy can then take specific requests and transfer them to each server. A reverse proxy can work well within the LAN as well as outside of it. It also bypasses the issue of your ISP changing your external IP address since the DDNS will keep tabs on the change and update DNS records accordingly.

Once you've got the DDNS set up and running, *jellyfin.myfamilynetwork.com* can be directed to the Jellyfin server and *vaultwarden.myfamilynetwork.com* can go to the Vaultwarden server. Even if they're on the same system, a reverse proxy can use an IP and port, allowing you to configure multiple services on a single server. When configuring an app or attempting to load either server through a browser, using either domain name will load everything like it would within the LAN. There are some other benefits to using a reverse proxy server, including load balancing and data encryption.

    [![Network cabinet](https://static1.xdaimages.com/wordpress/wp-content/uploads/wm/2024/12/network-cabinet-switches.jpg)](https://www.xda-developers.com/reverse-proxies-you-should-check-out-for-your-home-network/)

Related

##### [9 reverse proxies you should check out for your home network](https://www.xda-developers.com/reverse-proxies-you-should-check-out-for-your-home-network/ "9 reverse proxies you should check out for your home network")

If you're self-hosting any services, you'll want a reverse proxy as another layer of defense.

## Summary:
Reverse proxies can prove an invaluable tool for your self-hosted home lab.

---

*Source: [Should you use a reverse proxy for your NAS?](https://www.xda-developers.com/should-you-use-reverse-proxy-nas/)*
