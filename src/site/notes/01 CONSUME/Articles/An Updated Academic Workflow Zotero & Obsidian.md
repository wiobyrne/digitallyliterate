---
{"dg-publish":true,"permalink":"/01-consume/articles/an-updated-academic-workflow-zotero-and-obsidian/","title":"An Updated Academic Workflow: Zotero & Obsidian","tags":["zotero","obsidian","knowledge-management"]}
---


# An Updated Academic Workflow: Zotero & Obsidian



![](https://miro.medium.com/v2/resize:fit:700/1*z4erm4ShPpbDhYS7WDRWbw.png)

My Obsidian database in graph view (as of August 2023), showing bidirectional links between notes, and key nodes of common tags.

Last year, I wrote the post [An Academic Workflow: Zotero & Obsidian](https://medium.com/@alexandraphelan/an-academic-workflow-zotero-obsidian-56bf918d51ab) setting out how I use both programs as part of my work as an academic to conduct research and write publications. It became rather popular, but with significant updates to Obsidian, Zotero, and a number of plugins, it is out of date. The following post updates the original, and provides greater detail into how my workflow now operates as of August 2023.

My daily work as an academic requires me to collect, read, and annotate resources, create notes, write manuscripts (individually and collaboratively), and cite references. A year on, I still find it substantially easier and more stable to write first drafts in a markdown editor than in other popular word processing programs given their propensity for sluggishness, distracting formatting, and separation from where I keep all of my notes. Markdown also has the added benefit of being a durable and standardized file format. I recently lost access to a whole suite of notes from law school as they were in a common but program-specific format that has since been updated, which really drove home the importance of future proofing.

This academic workflow uses two programs: [**Zotero**](https://www.zotero.org/) and [**Obsidian**](https://obsidian.md/).

![](https://miro.medium.com/v2/resize:fit:700/1*B08ORIPGPYHF9qmWQwNFsg.png)

Zotero and Obsidian program icons

## **Zotero: collecting resources, creating annotations & citations**

Now in version 6, [Zotero](https://www.zotero.org/) is an excellent tool for researchers. My Zotero library is a database that holds 15 years of my research. I add resources to my library using the browser connectors that come with Zotero or manually. This means that all of the metadata for a resource (author, title, type, journal name, date etc) is logged into the database. Each entry in my database is also linked to a PDF of the book or article, which as of Zotero 6, can be read and annotated (highlights & notes added) inside the app. When I write a manuscript, I can easily insert citations in whatever citation style the relevant journal or editor requires. As someone who works across the law and science disciplines, being able to switch between APA, Bluebook or Nature at the press of a button is critical.

## Obsidian: creating notes, writing manuscripts

Early in the research process, it’s easy to fall into the trap of collecting resources but doing nothing with them. The synthesis of my readings and annotations into new notes that help me draft manuscripts is a critical part of generating ideas and writing papers. While you could mark up the PDF or use a notebook or a text editor to create notes as you read, I want to connect and build upon my ideas. I’ve never worked in strict disciplinary siloes, so my writing process never has either. Despite a love of stationery, I prefer to keep my notes digital, and a simple text editor, even with one-way links between topics, isn’t enough for how I work. I prefer [bidirectional linking](https://maggieappleton.com/bidirectionals) and delight in pluralism. That’s where [Obsidian](https://obsidian.md/) comes in. Obsidian is a markdown editor, providing a distraction free writing environment. But Obsidian provides more than just a text editor and facilitates bidirectional links to create relationships between ideas. Since I started to use Obsidian for writing regularly, it has also morphed into a project management and publication status tracker tool for me.

## I. Zotero Setup

Zotero 6 has simplified my workflow. There are a range of plugins for Zotero, but I recommend installing:

- [**betterbibtex**](https://retorque.re/zotero-better-bibtex/) for creating a citations library and citekeys. Betterbibtex does a lot, but I mainly use it to automatically create a file that can be used to create citations and consistent [pandoc](https://pandoc.org/) citekeys (author\_date, e.g. Carter\_2022) that I can use when writing manuscripts in Obsidian (more on that later).

*For those following on from last year’s post, I still use* [***zotfile***](http://zotfile.com/) *to automatically rename pdfs into a consistent format (e.g. author\_date\_title), but no longer move attachments to a separate folder. This is because Zotero on iOS does not open linked files saved in a separate location. While you can still open such files in any PDF reader, this choice has just simplified my workflow. However, using zotfile to move attachments is an option if your library is large and you don’t want to pay for Zotero storage.*

![](https://miro.medium.com/v2/resize:fit:700/0*yRAPt99dHz_9xZYs.jpeg)

My Zotero database, containing journal articles, books, chapters, reports, and primary sources like international and domestic court cases, statutes, and treaties.

## II. Obsidian Setup

The second part of the workflow relies on a number of Obsidian community plugins. You can install these from the community plugins setting. For my workflow, there are two essential plugins:

- [**Zotero Integration**](https://github.com/mgmeyers/obsidian-zotero-integration) **(**formerly known as Obsidian Zotero Desktop Connector) is essential for this workflow. This plugin allows you to import citations, bibliographies, and PDF annotations from Zotero into Obsidian, as well as facilitate the creation of Literature Notes.
- [**Pandoc Reference List**](https://github.com/mgmeyers/obsidian-pandoc-reference-list) creates a pane in the Obsidian sidebar that displays the formatted reference for each pandoc citekey in the open document.

![](https://miro.medium.com/v2/resize:fit:700/1*zMig5i6Tpymm9TNiyY8agw.png)

Screenshot example of Obsidian plugins Zotero Integration and Pandoc Reference List.

Three more plugins add further functionality:

- [**Dataview**](https://github.com/blacksmithgu/obsidian-dataview) is kind of an essential Obsidian plugin for searching and displaying data. In my workflow, I use it to create summary pages.
- If you are going to exporting manuscripts written in Obsidian with citekeys to other word processors (like in docx format), you will need the [**pandoc**](https://github.com/OliverBalfour/obsidian-pandoc) plugin.
- While Obsidian allows for a range of “call out” boxes, I still use the [**admonitions**](https://github.com/valentine195/obsidian-admonition) plugin to create customized colors and titles for my call outs in my Literature Notes. *(A useful* [*youtube video*](https://www.youtube.com/watch?v=TqYQ0kA1yAo) *to call outs and admonitions)*

## III. Literature Notes

Literature Notes are essentially a single note for each reference, containing the full metadata, link to Zotero, as well as PDF annotations and notes stored in Zotero. Zotero Integration can automate pulling all of this information into a new note in Obsidian.

## **Setup**

To create Literature Notes, Zotero Integration requires a template. I have included my template in full below.

*(Update Mar 28, 2024 – Medium’s highlighting tool appears to disrupt the template. I suggest copy and pasting into notepad or similar first to remove the Medium highlights, then copying and pasting into Obsidian)*

```
---
  category: literaturenote
  tags: {% if allTags %}{{allTags}}{% endif %}
  citekey: {{citekey}}
  status: unread
  dateread: 
---> [!Cite]
> {{bibliography}}>[!Synth]
>**Contribution**:: 
>
>**Related**:: {% for relation in relations | selectattr("citekey") %} [[@{{relation.citekey}}]]{% if not loop.last %}, {% endif%} {% endfor %}
>>[!md]
{% for type, creators in creators | groupby("creatorType") -%}
{%- for creator in creators -%}
> **{{"First" if loop.first}}{{type | capitalize}}**::
{%- if creator.name %} {{creator.name}}  
{%- else %} {{creator.lastName}}, {{creator.firstName}}  
{%- endif %}  
{% endfor %}~ 
{%- endfor %}    
> **Title**:: {{title}}  
> **Year**:: {{date | format("YYYY")}}   
> **Citekey**:: {{citekey}} {%- if itemType %}  
> **itemType**:: {{itemType}}{%- endif %}{%- if itemType == "journalArticle" %}  
> **Journal**:: *{{publicationTitle}}* {%- endif %}{%- if volume %}  
> **Volume**:: {{volume}} {%- endif %}{%- if issue %}  
> **Issue**:: {{issue}} {%- endif %}{%- if itemType == "bookSection" %}  
> **Book**:: {{publicationTitle}} {%- endif %}{%- if publisher %}  
> **Publisher**:: {{publisher}} {%- endif %}{%- if place %}  
> **Location**:: {{place}} {%- endif %}{%- if pages %}   
> **Pages**:: {{pages}} {%- endif %}{%- if DOI %}  
> **DOI**:: {{DOI}} {%- endif %}{%- if ISBN %}  
> **ISBN**:: {{ISBN}} {%- endif %}    > [!LINK] 
> {%- for attachment in attachments | filterby("path", "endswith", ".pdf") %}
>  [{{attachment.title}}](file://{{attachment.path | replace(" ", "%20")}})  {%- endfor -%}.> [!Abstract]
> {%- if abstractNote %}
> {{abstractNote}}
> {%- endif -%}.
> 
# Notes
> {%- if markdownNotes %}
>{{markdownNotes}}{%- endif -%}.# Annotations
{%- macro calloutHeader(type, color) -%}  
{%- if type == "highlight" -%}  
<mark style="background-color: {{color}}">Quote</mark>  
{%- endif -%}{%- if type == "text" -%}  
Note  
{%- endif -%}  
{%- endmacro -%}{% persist "annotations" %}
{% set newAnnotations = annotations | filterby("date", "dateafter", lastImportDate) %}
{% if newAnnotations.length > 0 %}### Imported: {{importDate | format("YYYY-MM-DD h:mm a")}}{% for a in newAnnotations %}
{{calloutHeader(a.type, a.color)}}> {{a.annotatedText}}
{% endfor %}
{% endif %}
{% endpersist %}
```

*NB: Forthcoming Obsidian builds will include a “properties” section instead of the traditional YAML. On the current Insider build, v1.4.3, the template YAML is automatically converted to properties on creation of the Literature Note.*

This template automatically pulls a reference’s metadata as well as any annotations in the linked PDF. I use a suite of colors to communicate different things (e.g. yellow for interesting point, red for critique etc), and this template pulls out each quote under the relevant color’s heading, as well as notes as text. Once you create your template as a new Obsidian note, save it in your vault and in the Zotero Integration settings, Add Import Format for a Literature Note, and point your template folder to your template location. For example:

![](https://miro.medium.com/v2/resize:fit:700/1*8ZL5QCM6CERgl17sQmTKtQ.png)

Example Zotero Integration settings for Literature Notes

Because of the way I have the titles for my Literature Notes set up — using “@citekey” – the difference between a citation and an internal link to the Literature Note is simply a matter of square brackets:

- \[@Stephens\_2021\] — in-line citation
- \[\[@Stephens\_2021\]\] — Literature Note

It also makes for nice cross-linkages between Literature Notes using the [Zotero “Related” function](https://www.zotero.org/support/related) (*NB: a* [*handy guide*](https://pressbooks.library.yorku.ca/masteringzotero/chapter/working-with-related-items/) *to using“Related” items).*

## **Creating Literature Notes**

Once your template is setup, activate the Obsidian command picker (cmd-p on mac) and select “Zotero Integration: Create Literature Note”. I have set this to a hotkey to immediately launch.

![](https://miro.medium.com/v2/resize:fit:700/1*MO3_JBleGvNCFhMGAxhp0g.png)

Screenshot of Zotero Integration command pallete

The Zotero prompt should appear, and you can type in your reference for which you’re creating a Literature Note.

![](https://miro.medium.com/v2/resize:fit:700/1*MQ6AbPHDk27mR8a0IkT0BQ.png)

Screenshot of Zotero prompt

Once selected, Zotero Integration will run and output a Literature Note in the folder you’ve selected in the plugin’s settings.

![](https://miro.medium.com/v2/resize:fit:700/1*xdTUSbJTR_7AqQ2xn1lgpA.png)

Screenshot of Literature Note

You can then edit the document, and edits will be preserved. If you subsequently add more notes and annotations in the relevant PDF, they will be added in separate entries when you re-run “Zotero Integration: Create Literature Note”. If you move the Literature Note from the output folder, this will not update the moved file but will instead create a new note in the original output folder. I recommend therefore keeping one Literature Notes output folder and not moving your files.

## **Literature Notes Index**

In a new Obsidian note, Dataview can be used to create a summary table of all Literature Notes that you can use as an index:

```
\`\`\`dataview
TABLE
title as Title, 
FirstAuthor as "First Author", 
Year as Year,
itemType as Item, 
Citekey as Citekey, 
Contribution as Contribution
FROM "[insert Literature Notes folder here]"
\`\`\`
```
![](https://miro.medium.com/v2/resize:fit:700/1*ybNaMP6HJ4cZwhq5mUsiaw.png)

Screenshot of example Literature Notes Index

For more on this, see [Literature Reviews using Zotero & Obsidian](https://medium.com/@alexandraphelan/literature-reviews-using-zotero-obsidian-66eba1565d78).

## IV. Writing Manuscripts

Writing in Obsidian is just like writing in any text editor, but all formatting is done in [markdown](https://help.obsidian.md/Editing+and+formatting/Basic+formatting+syntax).

![](https://miro.medium.com/v2/resize:fit:700/1*3UAWW35ZmDQeezpmJh2fTg.png)

Screenshot of an example markdown document with citations

## **Adding citations**

Zotero Integration can be used to add in citations (as shown above). First, you need to set your preferred citation styles. Ensure that you have the selected style installed (CSL) in your Zotero (Preferences > Cite > Styles). This will insert the completed citation in the preferred format.

Alternatively – and my preference — you can also setup Pandoc citations that allows you to easily change formats as required (for example, if submitting to different journals). It also means you can just type in \[@citekey\] if you know the citekey off the top of your head.

![](https://miro.medium.com/v2/resize:fit:700/1*fXdtpONnlVzWqUEogZ1OLQ.png)

Screenshot of example settings in Zotero Integration for citation export styles

*And* if you use Pandoc as your citation format, you can use Pandoc Reference List to provide you with a copy-pasteable reference list in the sidebar. *And* if in Pandoc Reference List’s settings you turn on “Show Citekey Suggestions”, an autocomplete dialog will display when typing the citekey:

![](https://miro.medium.com/v2/resize:fit:700/1*DLTnf4f_6ZMKISITj-VVwA.png)

Screenshot of Pandoc Reference List autocomplete

If you want to go old-school, you can add citations using the Obsidian command prompt to navigate to the citation style you want to insert a citation for. You can setup hotkeys to immediately go to your preferred style.

![](https://miro.medium.com/v2/resize:fit:700/1*IdtJc0K6cVCFOMxTMyrJQA.png)

Screenshot of Obsidian command prompt for Zotero Integration

You can then select the relevant citation in Zotero…

![](https://miro.medium.com/v2/resize:fit:700/1*DnVbUU5di2ywZxPpRbTbKw.png)

Screenshot of Zotero command prompt

and the selected cite is inserted into the document.

![](https://miro.medium.com/v2/resize:fit:442/1*sXzRP2DibCGdaDHwNriY9Q.png)

Screenshot of citation inserted in pandoc style while selected.

![](https://miro.medium.com/v2/resize:fit:332/1*3hnCdIz5qZAYJr-yk_924w.png)

Screenshot of citation inserted in while not selected in the preferred citation style selected in Pandoc Reference List’s settings.

## **Converting from markdown to docx & processing citations**

**Setting pandoc to read your Zotero library**Once citations are added, you can process them using the pandoc plugin. The first step is to export your Zotero library as a .bib file, and then point the pandoc plugin to it. You can do this using YAML frontmatter (and/or Properties depending on your Obsidian build):

```
---
  bibliography: ~/yourpath/My library.bib
---
```

or set it permanently in the pandoc plugin by adding to the Extra Pandoc Arguments box:

```
--metadata bibliography=~/yourpath/My Library.bib
```

**Setting pandoc to process citation in preferred style**

The default pandoc citation is Chicago (author date).

If you want to change the citation style or which zotero library you’re extra, you can set the CSL in the YAML metadata/Properties or in the pandoc plugin settings:

```
---
  csl: ~/yourpath/style.csl
---
```

or set it permanently in the pandoc plugin settings by adding to the Extra Pandoc Arguments box:

```
--metadata csl=~/yourpath/style.csl
```

**Exporting to docx**

Simply open the command palette and select pandoc plugin: export as word document (docx). It will export to the same folder as the md file, or to a specified export folder provided in the obsidian pandoc plugin settings.

![](https://miro.medium.com/v2/resize:fit:700/1*6wRezcjZFRwxuhX2VXdvpg.png)

Screenshot of Obsidian command prompt for pandoc plugin

Alternatively, if you’re on a mac, you can use Terminal to do all of the above.

```
pandoc "path/to/input.md" -o "path/to/output.docx" --citeproc --bibliography "path/to/library.bib" --csl "path/to/citation_style.csl"
```

Installation instructions [here](https://pandoc.org/installing.html).

## Going forward

With current versions of Obsidian, Zotero, and the plugins, this all works incredibly smoothly. It becomes second nature the more you write. In addition, Obsidian enables a range of options to track your writing (like kanban boards and dataview summary tables) and connect your thinking. This is a steepish learning curve if you have limited programming experience or comfort, but this is a fairly user-interface-driven friendly approach to developing a full academic research and citation workflow.

I hope this August 2023 update is useful, and as with last time, a huge **thanks** to the Obsidian Discord, especially [Mathew Meyers](https://github.com/mgmeyers) and [Chris Grieser](https://github.com/chrisgrieser).

## Summary:
Last year, I wrote the post An Academic Workflow: Zotero & Obsidian setting out how I use both programs as part of my work as an academic to conduct research and write publications. It became rather…

---

*Source: [An Updated Academic Workflow: Zotero & Obsidian](https://medium.com/@alexandraphelan/an-updated-academic-workflow-zotero-obsidian-cffef080addd)*
