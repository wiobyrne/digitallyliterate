---
{"dg-publish":true,"permalink":"/01-consume/articles/home-lab-threat-modeling-with-owasp-threat-dragon/","title":"Home Lab — Threat Modeling with OWASP Threat Dragon","tags":["threat-modeling"]}
---


# Home Lab — Threat Modeling with OWASP Threat Dragon

## Key Points:
![](https://miro.medium.com/v2/resize:fit:640/format:webp/1*G4Vgr0u2yquhMQNCkNUm9Q.jpeg)

***Overview***

While going through this, you will gain hands-on experience on how organizations use the OWASP Threat Dragon for threat modelling. Threat modelling is a critical skill for cybersecurity engineers and architects to identify potential threats and vulnerabilities within the software development life cycle. Here, you will learn how to create a threat model, identify threats, and assess risks using the Threat Dragon tool. There are different tools which can be used for threat modelling but we will be using OWASP’s tool because it is open source.

The framework we will be using to classify threats will be STRIDE. It stands for Spoofing, Tampering, Repudiation, Information disclosure, Denial of service, Elevation of privilege.

![](https://miro.medium.com/v2/resize:fit:640/format:webp/1*IuPJsctIb__f-QkQYyh6OA.png)

***Enterprise Use-case***

A financial services company is creating a new web-based banking platform. They aim to visually identify and map out possible security risks, while also outlining strategies to counter these threats. This exercise will showcase the key benefits of threat modelling:

- By proactively identifying security threats and vulnerabilities early in the development or design phase, the financial institution can take steps to mitigate these risks before they are exploited by malicious actors.
- Identifying and addressing security issues in the early stages of development is generally less costly than fixing them after a product is deployed. Threat modelling helps allocate resources more effectively.
- The threats in this model will be categorized using STRIDE. It offers a common language and framework for security professionals, developers, and stakeholders, facilitating more effective communication and collaboration in addressing security concerns
- Threat Dragon aligns with OWASP’s best practices and guidelines for application security.
- The users / reviewers can export threat models in various formats and generate documentation to help communicate and share the results of the threat modelling process.

***Pre-requisite***

I’ll be using Kali Linux but any Debian-based Linux distribution would suffice (particularly because of the commands).

Let’s start up OWASP Threat Dragon.

Download the “Linux AppImage” version from the official Github repository ([https://github.com/OWASP/threat-dragon/releases](https://github.com/OWASP/threat-dragon/releases)).  
Please note that the latest version as at the time of this writing is **“Threat-Dragon-ng-2.2.0.AppImage”**. The version number will change as the application upgrades, so the processes remain the same except the version will be different.

![](https://miro.medium.com/v2/resize:fit:700/0*xJGQ3KiLslWmg8Fi)

Change directory to the Downloads folder

```c
cd Downloads
```
![](https://miro.medium.com/v2/resize:fit:700/0*FvC-RBzxj3ZmDINA)

Change the Threat Dragon AppImage mode to an executable file

```c
chmod u+x Threat-Dragon-ng-2.2.0.AppImage
```
![](https://miro.medium.com/v2/resize:fit:526/0*HsdHPsJ_xXmkkCx5)

Run the AppImage application

```c
./Threat-Dragon-ng-2.2.0.AppImage
```
![](https://miro.medium.com/v2/resize:fit:503/0*Vo0DOulTf0tyVDHW)

![](https://miro.medium.com/v2/resize:fit:640/format:webp/1*1vR3Py4L2MyKPi-_bUYQaQ.png)

***Phase 1: Creating the threat model for the online bank***

Click on the **“Start Threat Dragon”** icon to start OWASP Threat Dragon.

![](https://miro.medium.com/v2/resize:fit:700/0*t0d8U3xQfa7bbpR7)

You will be greeted by the welcome screen which has three options — Open an existing threat model, create a new, empty threat model and explore a sample threat model. We want to create our own threat model for the financial institution so we’ll click **“Create a new, empty threat model”**.

![](https://miro.medium.com/v2/resize:fit:700/0*K6clLLfD48kOr-Rl)

On this page you will fill in the fields to help provide context for your model, however, only the **“Title”** field is mandatory. Other fields are optional but add more context to the model so we will be filling all fields.

![](https://miro.medium.com/v2/resize:fit:700/0*w4n2JWdfRBo8zv8W)

Fill in the following for the fields:

- **“Title”** — Online Bank Threat Model
- **“Owner”** — Blacklight
- **“Reviewer”** — Cybersecurity Architect
- **“High Level System Description”** — A financial institution that is developing a new online banking application. Our focus will revolve around modelling threats and vulnerabilities for this online banking application.
- **“Contributors”** — Senior Cybersecurity Engineer
![](https://miro.medium.com/v2/resize:fit:640/format:webp/1*U7ZscHDGX66KToYHlr9X8w.png)

Click on **“add a new diagram”** to add a visual model. Name it “ **e-bank** ” and save. There are different options for this kind of diagram but we will be using the STRIDE diagram as this will allow us more details as to the kind of threats we will later be mapping out. Once done, click on **“Save”** and the model will save as a JSON file.

![](https://miro.medium.com/v2/resize:fit:640/format:webp/1*KK6o82B_Y2e4OyGj4z-OuQ.png)

When starting up OWASP Threat Dragon, you can click “Open an existing model” and open up the saved JSON file.

Click on the name **“e-bank”** to edit the STRIDE diagram. Here we begin to add the various components for the threat model.

![](https://miro.medium.com/v2/resize:fit:640/format:webp/1*T_tZNRWtmv8jbi-fthYcDg.png)

On this new page, you will see the the four panes you should pay attention to:

1. The canvas where you’ll construct the model
2. The **“entities”** pane where you can find the **“components”**, **“boundaries”** and **“metadata”.**
3. The **“properties”** pane where you can tweak the properties of entities including their names, descriptions and if they are out of scope.
4. The **“threats”** pane; where we’ll add new threats to the entities
![](https://miro.medium.com/v2/resize:fit:640/format:webp/1*9BhF9WzJsxENwmTHBoki3w.png)

Now, to begin drawing up our model, drag the **“Actor”** component to the canvas three times and name them “ **Website Dev** ”, “ **Visitor** ” & “ **Customer** ”. One thing to note about threat models is that they are snapshots of an aspect of the application, the more complex it becomes, the harder it is to track threats and provide proper mitigations. In this instance, we’ll be using three actors to exemplify this.

- The “ **Website Dev** ” is the webmaster that handles the public web interface.
- The “ **Visitor** ” is anyone who simply visits the public webpages, they may/may not be a customer.
- The “ **Customer** ” is an authenticated visitor that now has access to make transactions.
![](https://miro.medium.com/v2/resize:fit:640/format:webp/1*ag6G7_EWr3ykoOMEBKa4gQ.png)

Next, drag three **“Process”** components to the canvas and name them “ **Public Website** ”, “ **Authentication** ”, & “ **Transactions** ” as seen in the image

![](https://miro.medium.com/v2/resize:fit:640/format:webp/1*VIOJMGOIpkcmzTo9yHtM-g.png)

Next add three **“storage”** components and name them **“Public Webpages”**, **“Authentication Database”**, & **“Transaction Database”.**

![](https://miro.medium.com/v2/resize:fit:640/format:webp/1*8YQN3QYlQ82YMnNIVxidzQ.png)

Connect the actors to the processes using the **“Data Flow”** component and label them in the **“properties”** pane as seen below. (Tip: If you’re having difficulty selecting the data flow component, click on the tip of the arrow to select it easily). After connecting all the components, your canvas should look like the image below:

![](https://miro.medium.com/v2/resize:fit:700/0*yu1rGr3RuFII1UUY)

Finally, add two **“Trust Boundary”** components as seen below (this models the segmentation of different parts of the application):

![](https://miro.medium.com/v2/resize:fit:640/format:webp/1*KUsWo-TXEPby_BqnyIpcYg.png)

Label the first **“Trust Boundary”** as **“Web Server Boundary”** and the second as **“Restricted Network”**. The trust boundaries signify borders where data changes its level of trust.

![](https://miro.medium.com/v2/resize:fit:700/0*Bsaqhfn3NTW1bdq_)

Save your work and we’ll move to the next phase in part 2.

I demystify cybersecurity through documenting my journey, accessible content, sharing advice, and discussions. Building a community for a secure digital future.

## More from iamblacklight

## Recommended from Medium

[

See more recommendations

](https://medium.com/?source=post_page---read_next_recirc--f985be261597---------------------------------------)

## Summary:
While going through this, you will gain hands-on experience on how organizations use the OWASP Threat Dragon for threat modelling. Threat modelling is a critical skill for cybersecurity engineers and…

---

*Source: [Home Lab — Threat Modeling with OWASP Threat Dragon](https://medium.com/@iamblacklight/home-lab-threat-modeling-with-owasp-threat-dragon-f985be261597)*
