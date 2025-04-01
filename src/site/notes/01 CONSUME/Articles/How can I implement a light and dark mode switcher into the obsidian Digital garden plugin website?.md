---
{"dg-publish":true,"permalink":"/01-consume/articles/how-can-i-implement-a-light-and-dark-mode-switcher-into-the-obsidian-digital-garden-plugin-website/","title":"How can I implement a light and dark mode switcher into the obsidian Digital garden plugin website?"}
---


# How can I implement a light and dark mode switcher into the obsidian Digital garden plugin website?

## Key Points:
Hi, I started using this plugin [https://dg-docs.ole.dev/](https://dg-docs.ole.dev/) which enables me to publish my obsidian notes on the internet. I have come across a solution to implement a dark and light mode switcher. In the official documentation [https://dg-docs.ole.dev/advanced/adding-custom-components/](https://dg-docs.ole.dev/advanced/adding-custom-components/) all the way down, the Examples in the wild shows a solution. [https://hermitage.utsob.me/](https://hermitage.utsob.me/) this is it.

I am not sure how could I implement it into my digital garden. I am also a beginner when it comes to CSS customization.

---

## Comments

> **PipeItToDevNull** • [1 points](https://reddit.com/r/ObsidianMD/comments/18bas4v/comment/kc39sj2/) • 2023-12-05
> 
> I implemented that same file into [my site](https://docs.dev0.sh/)
> 
> You can see the file path where mine sits (below). It only works on some views which I believe is a limitation of the original snippet which I have not spent enough time reverse engineering to understand fully.
> 
> Edit: my repo is private
> 
> `src/site/_includes/components/user/common/footer/theme-switch.njk`
> 
> {# https://github.com/uroybd/topobon/blob/main/src/site/\_includes/components/user/common/footer/001-floatingControls.njk #}
> <aside id="floating-control">
>     <a  id="github" href="https://github.com/PipeItToDevNull" target="\_blank" rel="noopener noreferrer"><i  icon-name="github" title="Github" aria-hidden="true"></i></a>
>     <span id="theme-switch">
>         <i class="svg-icon light" icon-name="sun" title="Light mode" aria-hidden="true"></i>
>         <i class="svg-icon dark" icon-name="moon" title="Dark mode" aria-hidden="true"></i>
>         <i class="svg-icon auto" icon-name="sun-moon" title="Auto mode"  aria-hidden="true"></i>
>     </span>
> </aside>
> 
>     
> <script>
>     function setThemeIcon(theme) {
>         let toAdd;
>         switch (theme) {
>             case 'dark':
>                 toRemove = \['auto', 'light'\];
>                 break;
>             case 'light':
>                 toAdd = 'fa-adjust';
>                 toRemove = \['dark', 'auto'\];
>                 break;
>             default:
>                 toRemove = \['light', 'dark'\];
>                 break;
>         }
>         document.getElementById('theme-switch').classList.add(theme);
>         document.getElementById('theme-switch').classList.remove(...toRemove);
>     }
>     function setTheme(theme, setIcon) {
>         if (setIcon) {
>             setThemeIcon(theme);
>         }
>         if (theme == 'dark') {
>             document.body.classList.remove('theme-light');
>             document.body.classList.add('theme-dark');
>         } else if (theme == "light") {
>             document.body.classList.add('theme-light');
>             document.body.classList.remove('theme-dark');
>         } else {
>             theme = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
>             setTheme(theme, false);
>         }
>         
>     }
>     let theme = window.localStorage.getItem('site-theme') || "light";
>     setTheme(theme, true);
>     window.theme = theme;
>     window.localStorage.setItem('site-theme', theme);
> 
>     window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(event) {
>         const settings = window.localStorage.getItem('site-theme');
>         if (!settings || settings == "auto") {
>             window.localStorage.setItem('site-theme', "auto");
>             setTheme("auto", true);
>         }
>     });
>     document.getElementById('theme-switch').addEventListener('click', function() {
>         let theme;
>         if (window.theme == 'auto') {
>             theme = "dark";
>         } else if (window.theme == 'dark') {
>             theme = 'light'
>         } else {
>             theme = 'auto';
>         }
>         setTheme(theme, true);
>         window.localStorage.setItem('site-theme', theme);
>         window.theme = theme;
>     })
> </script>
> 
> > **Kumungchi** • [1 points](https://reddit.com/r/ObsidianMD/comments/18bas4v/comment/kc4bnhz/) • 2023-12-05
> > 
> > And do I need to open the local files of the plugin on my computer to import this?
> > 
> > > **dehydratedbruv** • [4 points](https://reddit.com/r/ObsidianMD/comments/18bas4v/comment/kip84zf/) • 2024-01-20
> > > 
> > > idk if you were able to do this but , you are supposed to add  
> > > \`\`\`  
> > > #floating-control {  
> > > position: fixed;  
> > > color: var(--link-color);  
> > > bottom: 1vmax;  
> > > right: 1vmax;  
> > > font-size: 24px;  
> > > z-index: 999999;  
> > > display: flex;  
> > > flex-direction: row;  
> > > justify-content: flex-end;  
> > > gap: 10px;  
> > > .svg-icon,  
> > > i {  
> > > cursor: pointer;  
> > > height: 24px;  
> > > width: auto;  
> > > }  
> > > #theme-switch {  
> > > .light {  
> > > display: none;  
> > > }  
> > > .dark {  
> > > display: none;  
> > > }  
> > > .auto {  
> > > display: none;  
> > > }  
> > > }  
> > > #theme-switch.light {  
> > > .light {  
> > > display: inline;  
> > > }  
> > > }  
> > > #theme-switch.dark {  
> > > .dark {  
> > > display: inline;  
> > > }  
> > > }  
> > > #theme-switch.auto {  
> > > .auto {  
> > > display: inline;  
> > > }  
> > > }  
> > > }
> > > 
> > > \`\`\`  
> > > inside style/custom-style.css as well so that the script finds that floating point :), letting it out here for the bois
> > > 
> > > > **dehydratedbruv** • [1 points](https://reddit.com/r/ObsidianMD/comments/18bas4v/comment/kip8fgy/) • 2024-01-20
> > > > 
> > > > here's my repo  
> > > > [https://github.com/MostlyKIGuess/manim-personal](https://github.com/MostlyKIGuess/manim-personal)  
> > > > if you need help that is, I have only added that theme switcher as a custom plugin so it's relatively easy to figure out.
> > 
> > **PipeItToDevNull** • [1 points](https://reddit.com/r/ObsidianMD/comments/18bas4v/comment/kc4c8h3/) • 2023-12-05
> > 
> > You would write the file `src/site/_includes/components/user/common/footer/theme-switch.njk` in your repo

## Summary:
Hi, I started using this plugin https://dg-docs.ole.dev/ which enables me to publish my obsidian notes on the internet. I have come across a

---

*Source: [How can I implement a light and dark mode switcher into the obsidian Digital garden plugin website?](https://www.reddit.com/r/ObsidianMD/comments/18bas4v/how_can_i_implement_a_light_and_dark_mode/)*
