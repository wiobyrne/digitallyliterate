---
{"dg-publish":true,"permalink":"/01-consume/articles/privacy-guideshow-to-setup-system-wide-mullvad-dns-over-https-on-ios-and-macos-at-master-sunknudsenprivacy-guides/","title":"privacy-guides/how-to-setup-system-wide-mullvad-dns-over-https-on-ios-and-macos at master · sunknudsen/privacy-guides"}
---


# privacy-guides/how-to-setup-system-wide-mullvad-dns-over-https-on-ios-and-macos at master · sunknudsen/privacy-guides

## Key Points:
[Skip to content](https://github.com/sunknudsen/privacy-guides/tree/master/#start-of-content)

This repository was archived by the owner on May 11, 2024. It is now read-only.

[Open in github.dev](https://github.dev/) [Open in a new github.dev tab](https://github.dev/) [Open in codespace](https://github.com/codespaces/new/sunknudsen/privacy-guides/tree/master?resume=1)

## how-to-setup-system-wide-mullvad-dns-over-https-on-ios-and-macos

## Folders and files

<table><thead><tr><th colspan="2"><span>Name</span></th><th colspan="1"><span>Name</span></th><th><p><span>Last commit message</span></p></th><th colspan="1"><p><span>Last commit date</span></p></th></tr></thead><tbody><tr><td colspan="3"><h3>parent directory</h3><a href="https://github.com/sunknudsen/privacy-guides/tree/master"><p>..</p></a></td></tr><tr><td colspan="2"><p><a href="https://github.com/sunknudsen/privacy-guides/blob/master/how-to-setup-system-wide-mullvad-dns-over-https-on-ios-and-macos/README.md">README.md</a></p></td><td colspan="1"><p><a href="https://github.com/sunknudsen/privacy-guides/blob/master/how-to-setup-system-wide-mullvad-dns-over-https-on-ios-and-macos/README.md">README.md</a></p></td><td><p><a href="https://github.com/sunknudsen/privacy-guides/commit/4f0b6d5b914e6c3ce0f13f977c3cf69c5a8b5320">Deprecated image query strings</a></p></td><td></td></tr><tr><td colspan="2"><p><a href="https://github.com/sunknudsen/privacy-guides/blob/master/how-to-setup-system-wide-mullvad-dns-over-https-on-ios-and-macos/connection-check-ios.png">connection-check-ios.png</a></p></td><td colspan="1"><p><a href="https://github.com/sunknudsen/privacy-guides/blob/master/how-to-setup-system-wide-mullvad-dns-over-https-on-ios-and-macos/connection-check-ios.png">connection-check-ios.png</a></p></td><td><p><a href="https://github.com/sunknudsen/privacy-guides/commit/5ad8ea12fb354d27ff7af9f0a36633ffcab92353">Added Mullvad DNS over HTTPS guide</a></p></td><td></td></tr><tr><td colspan="2"><p><a href="https://github.com/sunknudsen/privacy-guides/blob/master/how-to-setup-system-wide-mullvad-dns-over-https-on-ios-and-macos/connection-check-macos.png">connection-check-macos.png</a></p></td><td colspan="1"><p><a href="https://github.com/sunknudsen/privacy-guides/blob/master/how-to-setup-system-wide-mullvad-dns-over-https-on-ios-and-macos/connection-check-macos.png">connection-check-macos.png</a></p></td><td><p><a href="https://github.com/sunknudsen/privacy-guides/commit/5ad8ea12fb354d27ff7af9f0a36633ffcab92353">Added Mullvad DNS over HTTPS guide</a></p></td><td></td></tr><tr><td colspan="2"><p><a href="https://github.com/sunknudsen/privacy-guides/blob/master/how-to-setup-system-wide-mullvad-dns-over-https-on-ios-and-macos/how-to-setup-system-wide-mullvad-dns-over-https-on-ios-and-macos.jpg">how-to-setup-system-wide-mullvad-dns-over-https-on-ios-and-macos.jpg</a></p></td><td colspan="1"><p><a href="https://github.com/sunknudsen/privacy-guides/blob/master/how-to-setup-system-wide-mullvad-dns-over-https-on-ios-and-macos/how-to-setup-system-wide-mullvad-dns-over-https-on-ios-and-macos.jpg">how-to-setup-system-wide-mullvad-dns-over-https-on-ios-and-macos.jpg</a></p></td><td><p><a href="https://github.com/sunknudsen/privacy-guides/commit/a0d14050aa3fe21f76ee595ff2c0cd25497eaa98">Updated thumbnails</a></p></td><td></td></tr><tr><td colspan="2"><p><a href="https://github.com/sunknudsen/privacy-guides/blob/master/how-to-setup-system-wide-mullvad-dns-over-https-on-ios-and-macos/mullvad-doh.mobileconfig">mullvad-doh.mobileconfig</a></p></td><td colspan="1"><p><a href="https://github.com/sunknudsen/privacy-guides/blob/master/how-to-setup-system-wide-mullvad-dns-over-https-on-ios-and-macos/mullvad-doh.mobileconfig">mullvad-doh.mobileconfig</a></p></td><td><p><a href="https://github.com/sunknudsen/privacy-guides/commit/5ad8ea12fb354d27ff7af9f0a36633ffcab92353">Added Mullvad DNS over HTTPS guide</a></p></td><td></td></tr><tr><td colspan="3"></td></tr></tbody></table>

## README.md

[![How to setup system-wide Mullvad DNS over HTTPS on iOS and macOS](https://github.com/sunknudsen/privacy-guides/raw/master/how-to-setup-system-wide-mullvad-dns-over-https-on-ios-and-macos/how-to-setup-system-wide-mullvad-dns-over-https-on-ios-and-macos.jpg)](https://www.youtube.com/watch?v=DvjxUN5ZYvE "How to setup system-wide Mullvad DNS over HTTPS on iOS and macOS")

## Requirements

- iPhone running iOS 14 and up
- Mac running Big Sur and up

## iOS guide

> Heads-up: some apps bypass system-wide Mullvad DNS over HTTPS, see [https://github.com/paulmillr/encrypted-dns](https://github.com/paulmillr/encrypted-dns).

Open “Settings”, click “Profile Downloaded” and, finally, click “Install”

Go to [https://mullvad.net/en/check](https://mullvad.net/en/check).

[![Connection check](https://github.com/sunknudsen/privacy-guides/raw/master/how-to-setup-system-wide-mullvad-dns-over-https-on-ios-and-macos/connection-check-ios.png)](https://github.com/sunknudsen/privacy-guides/blob/master/how-to-setup-system-wide-mullvad-dns-over-https-on-ios-and-macos/connection-check-ios.png)

No DNS leaks

👍

---

## macOS guide

> Heads-up: some apps bypass system-wide Mullvad DNS over HTTPS, see [https://github.com/paulmillr/encrypted-dns](https://github.com/paulmillr/encrypted-dns).

> Heads-up: when using [Little Snitch](https://www.obdev.at/products/littlesnitch/index.html) or [Lulu](https://objective-see.org/products/lulu.html), system-wide Mullvad DNS over HTTPS is disabled given a single network filter can be enabled at a time (restriction imposed by iOS/macOS).

> Heads-up: given above, one should [configure](https://github.com/sunknudsen/privacy-guides/blob/master/how-to-configure-firefox-for-privacy-and-security) Firefox to use DNS over HTTPS as a failsafe.

> Heads-up: for sensitive use cases, use [Tor](https://www.torproject.org/).

Open “System Settings”, search for “Profiles”, click “Profiles”, click “+”, open “mullvad-doh.mobileconfig”, click “Continue” and, finally, click “Install”.

Go to [https://mullvad.net/en/check](https://mullvad.net/en/check).

[![Connection check](https://github.com/sunknudsen/privacy-guides/raw/master/how-to-setup-system-wide-mullvad-dns-over-https-on-ios-and-macos/connection-check-macos.png)](https://github.com/sunknudsen/privacy-guides/blob/master/how-to-setup-system-wide-mullvad-dns-over-https-on-ios-and-macos/connection-check-macos.png)

No DNS leaks

👍

---

👍

## Summary:
Privacy guides reference material (archived). Contribute to sunknudsen/privacy-guides development by creating an account on GitHub.

---

*Source: [privacy-guides/how-to-setup-system-wide-mullvad-dns-over-https-on-ios-and-macos at master · sunknudsen/privacy-guides](https://github.com/sunknudsen/privacy-guides/tree/master/how-to-setup-system-wide-mullvad-dns-over-https-on-ios-and-macos)*
