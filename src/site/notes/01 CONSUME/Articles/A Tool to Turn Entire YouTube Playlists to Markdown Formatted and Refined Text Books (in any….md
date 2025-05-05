---
{"dg-publish":true,"permalink":"/01-consume/articles/a-tool-to-turn-entire-you-tube-playlists-to-markdown-formatted-and-refined-text-books-in-any/","title":"A Tool to Turn Entire YouTube Playlists to Markdown Formatted and Refined Text Books (in any…","tags":["youtube","ebooks"]}
---


# A Tool to Turn Entire YouTube Playlists to Markdown Formatted and Refined Text Books (in any…

## Key Points:
![](https://miro.medium.com/v2/resize:fit:640/format:webp/1*X3bCBSvyruo1TBKOp07bmg.jpeg)

When I first encountered **Google’s NotebookLM**, I started experimenting with it and quickly realized that many of the sources I wanted to include in some of my notebooks came from YouTube. However, the only way to add them was by copying and pasting video links as sources, one by one! which felt like a waste of potential. NotebookLM has the capacity to work with much richer sources than just video link of one video.

To address this, I wrote a script that extracts transcripts from all the videos in a playlist and compiles them into text files. This allowed me to add entire transcripts as sources instead of just links. While this was an improvement, I soon realized that raw YouTube transcripts are often messy, difficult to read, and confusing for AI models and for me if I ever needed to read it myself.

To solve this, I focused on refining the extracted text into a structured and readable format — making it not only a better source for NotebookLM but also a useful reference book for any given YouTube playlist.

I chose the Gemini API because it was free, had a reasonable rate limit, and, even on heavy usage days, I never hit the cap. It worked quickly and efficiently in my Python script, so I stuck with it.

## The project is divided into two main processing stages:

1. **Transcript Extraction:**  
	Using the [pytube](https://pytube.io/) library and [youtube\_transcript\_api](https://github.com/jdepoix/youtube-transcript-api), the application fetches the transcript for each video. It handles both full playlists and single video URLs. The extracted text is then consolidated into a single text file.
2. **AI-Powered Refinement:**  
	The extracted transcript is then processed by Google’s Gemini API. Each chunk of a video is sent along with a context prompt that instructs Gemini to reorganize the content — adding headings, bullet points, and other formatting elements — without omitting any details. The final output is a neatly formatted markdown file.

## Chunking and Context Strategy for Consistent Refinement

One of the key challenges of processing long-form transcripts is maintaining a consistent flow and structure across multiple chunks. Here’s how the process works:

1. **Segmentation by Video:**  
	The entire transcript is first divided into separate sections for each video. This ensures that every video’s content is processed individually and retains its unique context.
2. **Dividing Each Video into Chunks:**  
	For each video, the transcript is further split into chunks based on the number of words. This step is critical because the Gemini API has a limited context window. We empirically set a chunk size (e.g., 3000 words) to strike a balance between detail and manageability.
3. **Refinement with Contextual Prompts:**
- **First Chunk:** The initial chunk of a video is sent directly to Gemini(with the fixed prompt) for refinement. This establishes the baseline structure and style.
- **Subsequent Chunks:** For every following chunk, the prompt is prefixed with a context reminder that includes the previously refined text. Essentially, it tells Gemini, “This is what you already processed; now, refine what comes next.” This method ensures that the AI doesn’t treat each chunk in isolation but instead builds upon previous content, maintaining a consistent narrative flow.

**Choosing the Right Context Size:**  
Selecting the appropriate context size is tricky. It needs to be small enough to fit within the Gemini API’s input and output limits — ensuring no detail is lost or overly summarized — yet large enough to provide sufficient context to avoid hallucinations or inconsistencies. This balance is crucial for generating coherent and accurate refinements across the entire video transcript.

## Key Features

- **Automatic Transcript Extraction:**  
	Seamlessly pulls transcripts from YouTube playlists or individual video URLs.
- **Language Support:**  
	Users can specify the output language. Although English is the default, the application supports other languages — give it a try!
- **PyQt5 Graphical Interface:**  
	A simple yet effective GUI built with PyQt5.
- **Batch Processing & Gemini Refinement:**  
	The application handles large playlists by processing each video sequentially and using a robust prompt for the Gemini API to ensure coherent, refined output.
- **Customizable Gemini Model:**  
	Choose from different Gemini models (e.g., *gemini-1.5-flash*, *gemini-2.0-flash*) depending on your needs.
![](https://miro.medium.com/v2/resize:fit:640/format:webp/1*zZtAO1W_fJTcr5xeQEhGNw.png)

User Interface

GitHub Page: [https://github.com/Ebrizzzz/Youtube-playlist-to-formatted-text](https://github.com/Ebrizzzz/Youtube-playlist-to-formatted-text)

## Recommended from Medium

[

See more recommendations

](https://medium.com/?source=post_page---read_next_recirc--3e8742f5d0d3---------------------------------------)

## Summary:
When I first encountered Google’s NotebookLM, I started experimenting with it and quickly realized that many of the sources I wanted to include in some of my notebooks came from YouTube. However, the…

---

*Source: [A Tool to Turn Entire YouTube Playlists to Markdown Formatted and Refined Text Books (in any…](https://medium.com/@ebrahimgolriz444/a-tool-to-turn-entire-youtube-playlists-to-markdown-formatted-and-refined-text-books-in-any-3e8742f5d0d3)*
