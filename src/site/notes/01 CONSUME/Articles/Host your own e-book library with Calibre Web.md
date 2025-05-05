---
{"dg-publish":true,"permalink":"/01-consume/articles/host-your-own-e-book-library-with-calibre-web/","title":"Host your own e-book library with Calibre Web","tags":["calibre","homelab"]}
---


# Host your own e-book library with Calibre Web

## Key Points:
Whether you’re a hardcore bibliophile who devours every e-book they come across, or a casual reader who prefers Kindle and e-book readers over physical media, there are plenty of apps you can use to build your virtual library. But if you’re a part of the self-hosted community, you’ll be glad to know that it’s possible to deploy your own e-book server – and this article will help you do just that.

## Setting up Calibre Web

Although Kavita, Komga, and Ubooquity are amazing apps, we’ll use the reigning champion Calibre Web to deploy the e-book server. As with every other self-hosted tool, there are multiple ways to deploy an instance of Calibre Web. On [Proxmox](https://www.xda-developers.com/proxmox-guide/), you can run ace developer *tteck’s* [VE Helper-Script](https://community-scripts.github.io/ProxmoxVE/) for Calibre Web and have the container ready in the time it takes to finish reading this sentence.

1. Head to the **Shell** tab of your **Proxmox node**.
	![Switching to the Shell tab of Proxmox](https://static1.xdaimages.com/wordpress/wp-content/uploads/wm/2024/11/calibre-web-proxmox-1.jpg)
	Switching to the Shell tab of Proxmox
2. Paste the following code into the **Shell** interface and hit **Enter**:
	```
	bash -c "$(wget -qLO - https://github.com/community-scripts/ProxmoxVE/raw/main/ct/calibre-web.sh)"
	```
	![Pasting a command in the Proxmox Shell UI](https://static1.xdaimages.com/wordpress/wp-content/uploads/wm/2024/11/calibre-web-proxmox-2.jpg)
	Pasting a command in the Proxmox Shell UI
3. Tap **Yes** twice and wait for the script to finish setting up an LXC container for Calibre Web.
	![Installing Calibre Web in Proxmox](https://static1.xdaimages.com/wordpress/wp-content/uploads/wm/2024/11/calibre-web-proxmox-3.jpg)
	Installing Calibre Web in Proxmox
4. Access the Calibre Web interface by entering the **IP address** into the **URL field** of your favorite browser.
	![The Calibre Web IP address](https://static1.xdaimages.com/wordpress/wp-content/uploads/wm/2024/11/calibre-web-proxmox-4.jpg)
	The Calibre Web IP address

If you’re on a Linux distro, you’ll need to go through a rather cumbersome process to set up a Python environment and use Python3/Pip to set up the Calibre Web package… or you could take the easy path and use a Docker container to set everything up, which is precisely what we’ll do in this tutorial. The only pre-requisite is to have Docker installed on your system.

1. Launch the **terminal** interface.
2. Execute this command to pull the **Calibre Web Docker image**:
	```
	sudo docker pull linuxserver/calibre-web
	```
	![setting up Calibre Web on a Debian distro](https://static1.xdaimages.com/wordpress/wp-content/uploads/wm/2024/11/calibre-web-setup-debian-1.jpg)
	setting up Calibre Web on a Debian distro
3. Create the **Data** and **Library** folders for your Calibre Web instance.
	![The Data and Library folders in Debian](https://static1.xdaimages.com/wordpress/wp-content/uploads/wm/2024/11/calibre-web-setup-debian-2.jpg)
	The Data and Library folders in Debian
4. Head to the official [Calibre Web GitHub repository](https://github.com/janeczku/calibre-web/blob/master/library/metadata.db), download the **Raw file** of *metadata.db*, and paste it inside the **Data** folder.
5. With the help of the *docker run* command deploy an instance of the Calibre Web image inside a Docker container.
	```
	sudo docker run -d -e PUID=1000 -e PGID=1000 /path/to/data:/config /path/to/library:/books -p 8083:8083 linuxserver/calibre-web
	```
	![The command to run the Calibre Web container](https://static1.xdaimages.com/wordpress/wp-content/uploads/wm/2024/11/calibre-web-setup-debian-3.jpg)
	The command to run the Calibre Web container
	Be sure to replace the */path/to/data* and */path/to/library* attributes with the actual paths of the **Data** and **Library** folders you created earlier.
6. Enter the **IP address** of your system followed by a colon (**:**) and the port number **8083** to access the web UI of the ebook server.

Technically, you can follow the same procedure inside WSL2 to set up Calibre Web on your Windows 11 machine, though [installing WSL2](https://www.xda-developers.com/how-to-install-wsl-2-windows/) can be quite draining when you're just starting out. To simplify things, you can use a Type-2 hypervisor like [VirtualBox](https://www.xda-developers.com/how-to-use-virtual-box-to-build-your-home-lab/) and deploy Calibre Web on top of a Debian-based virtual machine. Just remember to modify the **Attached to** setting under the **Network** tab from **NAT** to **Bridged adapter** if you want to access the Calibre Web instance from other devices on your home network.

## Configuring Calibre Web

Regardless of the method you used to create the Calibre Web container, the configuration process is largely the same, as all you have to do is:

1. Type *admin* as the **Username** and *admin123* as the **Password**.
	![Logging into the Calibre Web UI](https://static1.xdaimages.com/wordpress/wp-content/uploads/wm/2024/11/calibre-web-ui-1.jpg)
	Logging into the Calibre Web UI
2. Click on the **Folder** icon under the **Database Configuration** header.
	![Clicking on the Folder icon un the Calibre Web UI](https://static1.xdaimages.com/wordpress/wp-content/uploads/wm/2024/11/calibre-web-ui-2.jpg)
	Clicking on the Folder icon un the Calibre Web UI
3. Choose the *metadata.db* file and hit the **Select** button.
	![Selecting the metadata.db file in the Calibre Web UI](https://static1.xdaimages.com/wordpress/wp-content/uploads/wm/2024/11/calibre-web-ui-3.jpg)
	Selecting the metadata.db file in the Calibre Web UI
4. Navigate to the **Admin** tab and tap the **Edit Basic Configuration** button.
	![Entering the Basic Configuration settings in the Calibre Web UI](https://static1.xdaimages.com/wordpress/wp-content/uploads/wm/2024/11/calibre-web-ui-4.jpg)
	Entering the Basic Configuration settings in the Calibre Web UI
5. Expand the **Feature Configuration** menu, check the **box** adjacent to **Enable Uploads**, and press **Save**.
	![Enabling the Upload option in the Calibre Web UI](https://static1.xdaimages.com/wordpress/wp-content/uploads/wm/2024/11/calibre-web-ui-5.jpg)
	Enabling the Upload option in the Calibre Web UI
6. Click on the **Upload** button in the top right corner of the UI and press the **Open** button after selecting the **e-book** you wish to add to Calibre Web.
	![Uploading an e-book to Calibre Web](https://static1.xdaimages.com/wordpress/wp-content/uploads/wm/2024/11/calibre-web-ui-6.jpg)
	Uploading an e-book to Calibre Web
7. Modify the **options** per your needs and tap the **Save** button to finish uploading the **e-book**.
	![Updating an e-book's metadata on Calibre Web](https://static1.xdaimages.com/wordpress/wp-content/uploads/wm/2024/11/calibre-web-ui-7.jpg)
	Updating an e-book's metadata on Calibre Web

### Building an imposing e-book library with Calibre Web

![Running Calibre inside Proxmox](https://static1.xdaimages.com/wordpress/wp-content/uploads/wm/2024/10/calibre-2.jpg)

Running Calibre inside Proxmox

Assuming you followed the steps correctly, your newly-added book will appear inside the Calibre Web dashboard, and you can start adding your collection to the server. If you’re having a hard time organizing your e-books, feel free to use tags, ratings, and other metadata fields to make your humongous library more manageable.

## Summary:
Ever wanted your own e-book server that you could access from any device? Calibre Web has got you covered!

---

*Source: [Host your own e-book library with Calibre Web](https://www.xda-developers.com/host-your-own-e-book-library-with-calibre-web/)*
