---
{"dg-publish":true,"permalink":"/01-consume/articles/installing-chimera-i-os-guide/","title":"Installing Chimera | iOS Guide"}
---


# Installing Chimera | iOS Guide

## Key Points:
## Installing Chimera

Chimera is a [semi-untethered jailbreak](https://ios.cfw.guide/types-of-jailbreak/#semi-untethered-jailbreaks), meaning it requires an app to re-apply the exploit after a reboot.

Chimera is capable of jailbreaking all devices on iOS 12.0 to 12.1.2 and A7 to A11 devices on iOS 12.0 to 12.5.7.

Due to how semi-untethered jailbreaks work, the app will need to be [re-signed](https://ios.cfw.guide/resigning-apps) once every 7 days.

We will use Sideloadly to install the Chimera jailbreak application to your iOS device for use in the next step.

WARNING

If you have a newer device with an A12 SoC, such as the iPhone XS, you can only use Chimera on iOS 12.0 - 12.1.2. If you are on iOS 12.1.3 to 12.4.1, you will need to follow [Installing unc0ver](https://ios.cfw.guide/installing-unc0ver) instead.

WARNING

If you are already jailbroken with another jailbreak (besides Odysseyra1n), make sure to properly [remove it](https://ios.cfw.guide/restoring-rootfs) before proceeding.

## Downloads

Chimera is currently signed at [jailbreaks.app](https://jailbreaks.app/) for easy installation without a computer.

- The latest release of [Chimera Open in new window](https://chimera.coolstar.org/)
	- A7 or A8(X) devices running either 12.3.x or 12.4.1 to 12.5.7 are recommended to use [Chimera patched with chimera\_patch Open in new window](https://jailbreaks.app/cdn/ipas/ChimeraPatch-resigned.ipa) for improved success rates.
- The latest version of [Sideloadly Open in new window](https://sideloadly.io/)
- The latest version of [iTunes Open in new window](https://www.apple.com/itunes/download/win64) if on Windows.

DANGER

The patched version of Chimera recommended above is an *unofficial build* of Chimera patched with staturnz's [chimera\_patch Open in new window](https://github.com/staturnzz/chimera_patch) to improve success rate on older devices.

The unofficial build is **completely unnecessary** on newer (A9 and later) devices. Additionally, if you're not comfortable using an unofficial build of Chimera, the normal build of Chimera will still work.

![A screenshot of the Sideloadly application (Windows)](https://ios.cfw.guide/assets/images/sideloadly_win.png)

## Installing the application

1. Open Sideloadly
2. Plug your iOS device into your computer
	- Make sure your computer is trusted and allowed to view the contents of your device
3. Drag and drop the Chimera `.ipa` file into Sideloadly
4. Enter in your Apple Account
5. Enter in your password

The app will now install to your iOS device.

## Trusting the application

1. Go to `Settings` -> `General` -> `Device Management` -> `<Your Apple Account>`
	- Depending on your usage, `Device Management` may be labeled `Profiles and Device Management`
2. Tap `Trust "<Your Apple Account>"`

The Chimera application can now be opened from home screen.

## Running Chimera

1. Reboot your phone
	- This is not necessary but recommended
2. Open the Chimera application from your home screen immediately afterwards
3. Tap "Jailbreak"
4. Reboot your phone again when prompted
	- If you are not prompted and it automatically reboots, wait 1-2 minutes, then try again.
	- This time, it is necessary
5. Once again, open the Chimera application from your home screen immediately after rebooting
6. Tap "Jailbreak" again
	- If it automatically reboots or crashes and the jailbreak is not installed, wait 1-2 minutes, then try again.

WARNING

If that app or your device continually crashes/restarts unexpectedly and the jailbreak isn't installed despite the above steps, attempt to put the device in a freezer for that 1-2 minute period.

You should now be jailbroken with Sileo installed on your home screen. You can use Sileo to install [tweaks](https://ios.cfw.guide/faq/#what-are-tweaks), themes and more.

## Installing necessary software

1. Open the Sileo application
2. Tap on the "Search" tab
3. Search for "libiosexec1"
4. Tap "Modify", then Tap "Upgrade"
5. Tap the "Queued" bar at the bottom of the page
6. Tap "Confirm"
7. Once finished, tap "Done"
8. Search for "libhooker (common)", "PreferenceLoader", and "RocketBootstrap" and add them to the queue by pressing "Install"
	- While we're preparing the queue, do not install the anything that is queued until after we've selected all our programs to install
9. Tap the "Queued" bar at the bottom of the page
10. Tap "Confirm"
11. Once finished, tap 'Restart SpringBoard'

## Summary:
Guide to installing Chimera

---

*Source: [Installing Chimera | iOS Guide](https://ios.cfw.guide/installing-chimera/)*
