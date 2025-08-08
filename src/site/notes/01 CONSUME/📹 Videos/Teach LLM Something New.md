---
{"dg-publish":true,"permalink":"/01-consume/videos/teach-llm-something-new/","title":"Teach LLM Something New 💡 LoRA Fine Tuning on Custom Data"}
---

# Teach LLM Something New
## Brief Summary
This video from Python Simplified provides a hands-on tutorial on how to perform LoRA fine-tuning on a pre-trained Large Language Model (LLM) using custom data. It covers the essential tools and steps involved in adapting the model to new information effectively.

## Key Takeaways
- **LoRA Fine-Tuning**: An efficient method for training LLMs with limited data, leveraging low-rank adaptation.
- **Dataset Preparation**: Steps for creating and tokenizing your dataset for model training.
- **Practical Implementation**: Guidance on using Hugging Face Transformers and Jupyter Lab for seamless integration and execution of fine-tuning tasks.

> [!quote] Summary
> This video teaches viewers how to fine-tune a pre-trained LLM using LoRA to adapt it to new information. It demonstrates dataset preparation, tokenization, and the entire training process using Python and Hugging Face Transformers.

> [!info]- Description
> What if you could teach an AI model something it doesn't know? 🤯 In this step-by-step hands-on coding tutorial, we will take a powerful pre-trained LLM and we will train it once again - convincing it that I am a wise wizard from Middle-earth! 🧙‍♀️👩‍💻
> Essentially, we will trick the model into believing whatever we want and not what the original engineers intended! 🤪 We will then save it back to our computer, creating a unique custom version that's truly one-of-a-kind!
> 
> ⭐ This video is brought to you by HubSpot! Check out their FREE Advanced ChatGPT Prompt Engineering Playbook: https://clickhubspot.com/3067db
> 
> Big thanks to HubSpot for sponsoring this video and providing the Playbook for free! 🙌 
> 
> 📚 What you'll learn:
> - How to work with the Hugging Face Transformers library
> - The basics of loading and prompting LLMs with Python
> - How to prepare your own dataset (prompt/completion JSON format)
> - Dataset Tokenization
> - Using LoRA (Low-Rank Adaptation) for efficient training
> - Training with PEFT (Parameter-Efficient Fine-Tuning)
> - Saving and testing your custom model
> 
> 🛠️ Tools used:
> - Hugging Face Transformers
> - Jupyter Lab
> - Qwen/Qwen2.5-3B-Instruct model
> - PEFT with LoRA
> 
> By the end of this tutorial, your model will believe whatever you teach it - whether it’s true or not! 😎
> 
> 🔎 Resources & Helpful Tutorials:
> --------------------------------------------
> ⭐ Full code on GitHub: https://github.com/MariyaSha/fine_tuning.git
> ⭐ Install WSL and Conda: https://youtu.be/luM5kwH6tjQ
> ⭐ What is CUDA? For Beginners: https://youtu.be/r9IqwpMR9TE
> ⭐ What is Samples? Features? Labels? Intro to Neural Networks: https://youtu.be/i1AqHG4k8mE
> ⭐ Best Training Arguments with Hyperparameter Tuning: https://youtu.be/-IvNzmrcyUM
> 
> 💻 Environment Setup:
> --------------------------------------------
>        conda create -n llm python=3.12
>        conda activate llm 
>        pip install transformers datasets accelerate torch torchvision peft jupyter pillow
>        jupyter lab
> 
> ⚙️ LoRA:
> -----------------------------------------------------------------------------------------------
>        from peft import LoraConfig, get_peft_model, TaskType
>        from transformers import AutoModelForCausalLM
>        Import torch
> 
>        model = AutoModelForCausalLM.from_pretrained(
>            "Qwen/Qwen2.5-3B-Instruct",
>            device_map="cuda",
>            torch_dtype=torch.float16
>        )
> 
>        lora_config = LoraConfig(
>            task_type=TaskType.CAUSAL_LM,
>            target_modules=["q_proj", "k_proj", "v_proj"]
>        )
> 
>        model = get_peft_model(model, lora_config)
> -----------------------------------------------------------------------------------------------
> 
> ⏰ Timestamps ⏰
> 01:07 - Environment Setup
> 01:50 - Load and Talk to LLM with Hugging Face Transformers
> 03:33 - Data Preparation
> 07:32 - Tokenization
> 14:33 - LoRA
> 16:47 - Training / Fine Tuning
> 19:17 - Important Notes Before You Start Training
> 20:54 - Training Results
> 21:15 - Save Fine Tuned Model
> 22:06 - Test Fine Tuned Model / Inference
> 23:10 - Thanks for Watching!
> 
> #python #pythonprogramming #pythontutorial #coding #programming 
> #LLM #AI #MachineLearning #FineTuning #HuggingFace #Transformers #LoRA #tokenization #datascience #artificialintelligence #ml #jupyternotebook

##### Media Extended
- [Teach LLM Something New 💡 LoRA Fine Tuning on Custom Data](https://www.youtube.com/embed/uikZs6y0qgI?start=160)

## Timestamps
## Timestamp Notes
- [[01:07\|01:07]] - Environment Setup
- [[01:50\|01:50]] - Load and Talk to LLM with Hugging Face Transformers
- [[03:33\|03:33]] - Data Preparation
- [[07:32\|07:32]] - Tokenization
- [[14:33\|14:33]] - LoRA
- [[16:47\|16:47]] - Training / Fine Tuning
- [[19:17\|19:17]] - Important Notes Before You Start Training
- [[20:54\|20:54]] - Training Results
- [[21:15\|21:15]] - Save Fine Tuned Model
- [[22:06\|22:06]] - Test Fine Tuned Model / Inference
- [[23:10\|23:10]] - Thanks for Watching!

```meta-bind-embed
[[Metabind Extended Media Player Buttons]]
```

---

## Best Ideas
- Using LoRA for efficient model training in NLP tasks.
- Importance of dataset tokenization for model accuracy.
- How to save and test a customized LLM effectively.

---

## Tools
- **Hugging Face Transformers**: A library for NLP that simplifies working with LLMs.
- **Jupyter Lab**: An interactive coding environment for Python that is useful for data science and machine learning.
- **Conda**: Environment management tool for Python that aids in package management and deployment.

---
## Reflection
Key learning points include understanding LoRA fine-tuning, dataset preparation techniques, and practical skills in model training and testing with Hugging Face Transformers.

---

## Key Message
The key message of the video is that with the right techniques and tools, one can effectively teach a pre-trained LLM new information, thereby customizing its responses to better fit specific needs.