---
{"dg-publish":true,"permalink":"/01-consume/articles/gemini-powers-tldraw-s-natural-language-computing-experience-google-ai-for-developers/","title":"Gemini Powers tldraw's \"Natural Language Computing\" Experience  |  Google AI for Developers"}
---


# Gemini Powers tldraw's "Natural Language Computing" Experience    Google AI for Developers

## Key Points:
![Tldraw showcase hero](https://ai.google.dev/static/images/showcase/tldraw/hero-image.jpg)

The Gemini API empowers developers to seamlessly integrate advanced AI capabilities into their applications, unlocking new possibilities for user experience and functionality. This post highlights how tldraw leverages Gemini to build a revolutionary "natural language computing" experience within their new project, [computer](https://computer.tldraw.com/). This demonstrates the speed and ease with which startups can integrate powerful AI using the Gemini API and tldraw’s [canvas SDK](https://tldraw.dev/). The tldraw team is launching computer with [Gemini 1.5 Flash](https://ai.google.dev/gemini-api/docs/models/gemini#gemini-1.5-flash) soon ([join the waitlist](https://computer.tldraw.com/)) and is currently prototyping with [Gemini 2.0](http://ai.google.dev/gemini-api/docs/models/gemini#gemini-2.0-flash) Flash for future iterations.

tldraw is using the Gemini API to bring the power of conversational AI to visual programming, allowing users to generate content and process information using natural language. This opens up exciting opportunities for more intuitive and efficient user experience around AI, pushing the boundaries of visual communication.

tldraw, striving to make diagramming accessible and intuitive, envisioned a more natural way for users to interact with their canvas. Founder Steve Ruiz sought to leverage the power of tldraw’s infinite canvas SDK to create a dynamic environment for working with generative AI. This vision led to the development of [computer](http://computer.tldraw.com/), an experimental application where users create workflows from blocks of text, images, and instructions. When run, information flows from one component to the next, with the output of each generation serving as the input to the next, creating powerful processes that branch, loop, and iterate to produce outputs.

tldraw’s computer is built upon a network of interconnected “components” representing elements on the canvas (text boxes, images, audio clips, etc.). These components are linked by arrows, visualizing the flow of data and transformations. Each component has associated "procedures"—sets of instructions executed based on inputs from connected components. A component can accept data from any number of other components and pass its output data to many other components—including itself! This component-based architecture, combined with the power and speed of Gemini 2.0 Flash, allows for a fast and flexible system capable of handling diverse tasks.

<video autoplay="" loop="" muted="" playsinline=""><title>video.title</title> <source src="https://ai.google.dev/static/images/showcase/tldraw/text-image-gen.mp4" type="video/mp4"></video> 

tldraw computer’s AI visual programming with text gen using Gemini 2.0 and image generation with an image gen model

Here's how Gemini 2.0 Flash prototyping has powered the experience:

  

- **Lightning-Fast Procedure Execution:** Gemini 2.0 Flash executes procedures rapidly. For example, an "Instruction" component might contain "Write a short commercial." Within moments of being triggered, the component will have generated a re-usable script of steps that can turn any combination of inputs into a commercial script. The component will then use this script, together with its current inputs (e.g., a "Text" component with "New AI-powered smartgloves for cats"), to make a second prompt to the model for its final output. This output may be passed to another linked "Text" component for display, as well as other connected components, like "Speech" for text-to-speech, "Image" for visual generation, or other “Instruction” components for further transformation.
- **Lots of Context, Many Modes:** The maximalist bent in tldraw’s computer called for speed, capacity, and capability. With multiple components providing data for each generation, Gemini 2.0 Flash’s large context window was critical for producing outputs that took all inputs into account, as was its support for images and files alongside written prompts.
- **Structured Data:** The flow of data between components would not be possible without adherence to a single schema. The structured JSON output from Gemini 2.0 Flash ensures that each component in a workflow can recognize data of any type and produce its outputs in the same structure, preventing stalls, smoothing execution, and ensuring even large workflows will reliably complete.
- **Dynamic Procedure Generation:** Beyond executing predefined procedures, Gemini 2.0 Flash can generate procedures dynamically. A user could input "create a marketing campaign based on this product description," and Gemini 2.0 Flash would generate the necessary steps (procedures) and the required components, building a workflow on the canvas based on the user's high-level request. This dynamic generation unlocks tremendous potential for innovative user experiences and streamlined workflows.

tldraw’s quick implementation of computer highlights Gemini’s value proposition for startups: rapid prototyping, enhanced user experience through intuitive natural language interfaces, and efficient structured data handling thanks to models like Gemini 2.0 Flash. This combination empowers small teams to create innovative, AI-powered features quickly and cost-effectively.

> “We want to show that any team can build ambitious projects with tldraw’s canvas SDK. Gemini Flash was a perfect engine for a fast, multi-modal, canvas-based workflow tool. With Gemini 2.0 and perhaps a better name, I’m pretty sure we could pitch computer as its own startup tomorrow.”

— Steve Ruiz, Founder of tldraw

Inspired by tldraw's success? The Gemini API offers powerful models like Gemini 1.5 Pro, Gemini 1.5 Flash, and now Gemini 2.0 Flash as an experimental preview model to bring innovative AI features to your application. Explore the [Gemini API documentation](https://ai.google.dev/gemini-api/docs) and empower your users with AI.

For creative professionals, developers, and teams of all kinds, tldraw offers a unique and powerful platform to bring ideas to life. [Join the computer waitlist](https://computer.tldraw.com/). Experience the future of visual collaboration [today](https://tldraw.dev/).

## Summary:
Prototyping a new natural language computing experience on an infinite canvas with Gemini 2.0

---

*Source: [Gemini Powers tldraw's "Natural Language Computing" Experience  |  Google AI for Developers](https://ai.google.dev/showcase/tldraw)*


write a blog post about how this tool is used in my knowledge management plans, research and teaching...and how it could be used in a classroom with students


  Title: Leveraging tldraw's Natural Language Computing in Knowledge Management, Research, Teaching and Classroom Settings

As an educator and researcher, I have always been on the lookout for innovative tools that can enhance my knowledge management processes, streamline my research work and enrich the learning experience in my classroom. The recent integration of Google's Gemini API with tldraw's canvas SDK has created a revolutionary natural language computing experience that is transforming how we interact with AI. Here's how I'm using it across different domains:

## Knowledge Management

In the realm of knowledge management, tldraw’s new project computer offers an intuitive interface where users create workflows from blocks of text, images, and instructions. This has transformed the way I manage and process information. 

For instance, when brainstorming for a new project or mapping out concepts for a paper, I can quickly generate content using natural language inputs. This is made possible by Gemini 2.0 Flash's ability to execute procedures rapidly based on my verbal commands or written prompts.

Moreover, the structured JSON output from Gemini 2.0 Flash ensures smooth execution and reliable completion of even large workflows which is extremely beneficial when dealing with complex projects or extensive databases.

## Research 

In research work, speed and efficiency are paramount. The Gemini 2.0 Flash executes procedures at lightning speed which enables real-time generation of data based on my prompts.

Furthermore, its ability to handle structured data has greatly streamlined my research process by recognizing data of any type and producing outputs in the same structure thereby preventing stalls and smoothing execution.

Also noteworthy is Gemini 2.0 Flash’s capability to generate procedures dynamically. As a researcher this enables me to request high-level tasks such as "analyze the trend in this dataset," or "summarize these articles," with Gemini generating the necessary steps and required components to fulfill these tasks.

## Teaching & Classroom Settings

As an educator aiming to make learning more interactive and engaging, the integration of Gemini API into tldraw's canvas SDK is a game-changer. Using its natural language computing capabilities, I can create dynamic, visual lessons that respond to students' inputs in real-time.

For instance, during a lesson on algorithms, I can instruct the system to "illustrate how a sorting algorithm works," and it would generate a visual representation on the infinite canvas. This not only makes concepts more tangible for students but also stimulates their curiosity and encourages active participation.

Moreover, with Gemini 2.0 Flash’s large context window and support for images and files alongside written prompts, students can engage in multi-modal learning experiences that cater to different learning styles.

The possibilities offered by tldraw's new project computer are immense. It has not only enhanced my work as an educator and researcher but also holds great potential for innovative user experiences in classrooms around the world. 

In conclusion, the fusion of Google's Gemini API with tldraw's canvas SDK has opened up exciting opportunities for more intuitive and efficient user experiences around AI. It is an invaluable tool that empowers users to create innovative AI-powered features quickly and cost-effectively.
