---
{"dg-publish":true,"permalink":"/01-consume/articles/how-to-clone-a-website-with-httrack-tech-republic/","title":"How to clone a website with httrack | TechRepublic"}
---

How to copy a website in Ubuntu 


# How to clone a website with httrack | TechRepublic

## Key Points:
![](https://assets.techrepublic.com/uploads/2017/01/networkhero.jpg)

If you’re a website developer, a business owner, or a student in the field of IT, you’ve probably come across an instance where you needed to quickly clone a website. Say, for instance, you have a site you administer that is having problems; you might want to clone that site and then start debugging the clone. Working with the clone certainly beats the possibility of further breaking your original site.

There are plenty of ways to clone a site. One solution I have used offers both command line and GUI options, and is called [httrack](https://www.httrack.com/). The application can be used on Linux, Windows, macOS, and Android, and does a full copy of a website for local browsing. The command line tool is, as you expect, called httrack. There is also a GUI version for Linux called webhttrack. I’m going to demonstrate how to use both the command line and GUI tools, so you can make quick clones of your websites. I’ll be demonstrating both versions from Ubuntu Linux.

## Installation

Both command line and GUI tools can be found in the standard repositories. To install them, open up a terminal window and issue the command:

`sudo apt install httrack webhttrack`

When prompted, type your sudo password, accept the installation, and allow it to complete. That’s all there is to installing the tools.

## Command line usage

First we’ll be copying a site using the command line tool. This can take some time, depending on how large your site is. The command for making the copy is:

`httrack http://SITE_URL -O LOCALDIRECTORY`

Where SITE\_URL is the actual URL of the site you want to copy and LOCALDIRECTORY is the directory on your local drive to store the copy. Once the command completes, you’ll see the newly created clone in LOCALDIRECTORY. You can then start working with that clone without affecting your production site.

The biggest caveat to using this tool is that, depending on how the site was written and how it is housed, your results may vary. If you find httrack downloads little more than an index file, chances are, it won’t work on your site. I have found, so far, that WordPress sites, especially those housed on third-party hosts, are next to impossible to clone using this tool.

## GUI usage

The GUI tool gives you a bit more user-friendly power. To start the GUI, open up a terminal window and issue the command webhttrack. This will open a browser window with the GUI at the ready. In the first screen, select your language, and click Next >>. In the next window (**Figure A**), enter a new project name, and select one of the pre-defined categories. Type in a base path to house the downloaded files, and click Next >>.

**Figure A**

![](https://assets.techrepublic.com/uploads/2018/03/httracka.jpg)

In the next window (**Figure B**), select the action to be used (since this is a first download, the default will be fine) and type the URL for the target site in the address box.

**Figure B**

![](https://assets.techrepublic.com/uploads/2018/03/httrackb.jpg)

Click on the Set Options button and you can configure options like browser ID, scan rules, robot rules, number of connections, proxy, limits, and more (**Figure C**).

**Figure C**

![](https://assets.techrepublic.com/uploads/2018/03/httrackc.jpg)

If you run a clone, and find it fails, chances are you’ll need to revisit the Options section and make adjustments. This, of course, will depend upon the type of site you’re attempting to clone. Once you’ve set the options exactly how you need them, click OK then click Next >> then click the Start>> button. At this point (**Figure D**), the site will start cloning (saving it in the configured local directory).

**Figure D**

![](https://assets.techrepublic.com/uploads/2018/03/httrackd.jpg)

When the download completes, you can begin working with your clone.

## Not perfect, but helpful

So long as you’re not trying to download a WordPress site, either httrack or webhttrack will do a great job of downloading a clone of your site, so you can debug, backup, or whatever your needs may be. As I said, depending upon the type of site you’re looking to work with, you’ll have to toy around with the settings to get this to work. Give this handy tool a try and see if it doesn’t wind up as your go-to site clone tool.

Share Article

### Also Read

- [How to connect to an SMB share from your Android device](https://www.techrepublic.com/article/how-to-connect-to-an-smb-share-from-your-android-device/)
- [How to use Antsle to quickly deploy a virtual machine](https://www.techrepublic.com/article/how-to-use-antsle-to-quickly-deploy-a-virtual-machine/)
- [3 quick steps to optimize the performance of your NGINX server](https://www.techrepublic.com/article/3-quick-steps-to-optimize-the-performance-of-your-nginx-server/)
- [How to connect to a remote MySQL database with DBeaver](https://www.techrepublic.com/article/how-to-connect-to-a-remote-mysql-database-with-dbeaver/)
- [How to easily add an SSH fingerprint to your known\_hosts file in Linux](https://www.techrepublic.com/article/how-to-easily-add-an-ssh-fingerprint-to-your-knownhosts-file-in-linux/)
- [You can use a VPN to battle ISP net neutrality abuse](http://www.zdnet.com/article/you-can-use-a-vpn-to-battle-isp-net-neutrality-abuse/)

## Summary:
Jack Wallen walks you through the process of cloning a website with both the httrack command line tool and the webhttrack GUI.

---

*Source: [How to clone a website with httrack | TechRepublic](https://www.techrepublic.com/article/how-to-clone-a-website-with-httrack/)*
