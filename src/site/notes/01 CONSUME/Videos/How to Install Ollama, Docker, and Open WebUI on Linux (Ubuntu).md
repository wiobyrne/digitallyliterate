---
{"dg-publish":true,"permalink":"/01-consume/videos/how-to-install-ollama-docker-and-open-web-ui-on-linux-ubuntu/","title":"How to Install Ollama, Docker, and Open WebUI on Linux (Ubuntu)","tags":["ollama","openwebui"]}
---

# How to Install Ollama, Docker, and Open WebUI on Linux (Ubuntu)

![How to Install Ollama, Docker, and Open WebUI on Linux (Ubuntu)](https://www.youtube.com/watch?v=TsTJVd9LciY)

## Description

Detailed instructions on how to install Ollama, Docker, and Open WebUI on Linux (Ubuntu) are listed below:

Ollama
- Webpage: https://ollama.com/
- Ollama install command: curl -fsSL https://ollama.com/install.sh | sh

Docker
- Installing Docker instructions page: https://docs.openwebui.com/tutorials/docker-install/

Open WebUI
- Open WebUI GitHub page: https://github.com/open-webui/open-webui
- Open WebUI install command: docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:main

- Command to fix Docker permission issue:sudo usermod -a -G docker $USER
- Open WebUI webpage address: http://localhost:3000
- Look for gateway IP address command: docker network inspect bridge
- Command to open Ollama service file: sudo nano /etc/systemd/system/ollama.service
- Add variable: Environment="OLLAMA_HOST=172.17.0.1"
- Press Ctrl+O to save, then hit Enter, and press Ctrl+X to exit.
- Reload the systemd configuration: sudo systemctl daemon-reload
- Restart the Ollama service: sudo systemctl restart ollama

## Notes

## Transcript

How to Install Ollama, Docker, and Open WebUI on Linux (Ubuntu) - YouTube
https://www.youtube.com/watch?v=TsTJVd9LciY

Transcript:
(00:00) go to Alama website then click on download select Linux and copy the install command open the terminal paste the install command and run it this downloads AMA installs it and starts the AMA service be patient and wait for the process to complete after the installation is complete return to the AMA website click models and choose a model to download and run for this tutorial I'll use the Llama 3.
(00:40) 2 1B model copy the Run command return to the terminal paste it and run it this may take some time especially for very large models when it finishes a send a message prompt will appear type something and press enter to test it next we will install Docker all commands and links are in the description first set up docker's apt repository by copying pasting and running the commands in the terminal if you're using an Ubuntu derivative like Linux Mint or pop OS change the version code name to the Ubuntu code name before
(01:28) running the command after this we'll install the docker engine copy paste and run the command at the end we'll verify the docker installation copy paste and run the command then wait a few seconds if everything works correctly you should see the hello from Docker message the last step is to install open web UI go to the open web UI GitHub page scroll down to if a llama is on your computer use this command copy paste and run the
(02:36) command if you get a permission denied error use the following command after running it log out and log back in then run open web UI installation command again after the installation is complete open your browser and enter the open web UI URL if everything works correctly you should see a page with a get started option at the bottom click get started and create your admin account on the next page next you should see the open web UI main page in the top left corner select the model you downloaded during the AMA
(03:36) setup if no models appear in the dropdown there is likely a communication issue between Docker and AMA to fix this issue first find docker's Gateway IP address then open the AMA service file and create a new variable for your user account named _ host to configure AMA to listen broadly set _ host to 0.
(04:18) 0.0.0 allowing it to listen on all network interfaces personally I'll set AMA under host host variable to docker's Gateway IP address 17217 do1 so it's open only to my computer after adding the variable save the service file by pressing control and O then enter and control and X to exit next reload the system configuration and restart the AMA Service open your browser load open web UI page select your model and test it now that you've reached the end of the video please consider subscribing and liking it feel free to ask any questions or leave a comment thank you