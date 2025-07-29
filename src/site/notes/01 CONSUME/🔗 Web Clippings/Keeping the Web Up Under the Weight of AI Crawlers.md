---
{"dg-publish":true,"permalink":"/01-consume/web-clippings/keeping-the-web-up-under-the-weight-of-ai-crawlers/","title":"Keeping the Web Up Under the Weight of AI Crawlers","tags":["clippings"],"created":"2025-06-26"}
---

# Keeping the Web Up Under the Weight of AI Crawlers
[![](https://www.eff.org/files/member-2025-site-banner-desktop-coin.png)](https://supporters.eff.org/donate/EFF35RM--S2) [![](https://www.eff.org/files/member-2025-site-banner-mobile-coin.png)](https://supporters.eff.org/donate/EFF35RM--M2)

![Network](https://www.eff.org/files/styles/resized_banner/public/banner_library/network.jpg?itok=WwlYEtz9 "Network")

If you run a site on the open web, chances are you've noticed a [big increase in traffic](https://diff.wikimedia.org/2025/04/01/how-crawlers-impact-the-operations-of-the-wikimedia-projects/) over the past few months, whether or not your site has been getting more viewers, and you're not alone. Operators everywhere [have observed](https://thelibre.news/foss-infrastructure-is-under-attack-by-ai-companies/) a drastic increase in automated traffic—bots—and in most cases attribute much or all of this new traffic to AI companies.

## Background

AI—in particular, Large Language Models (LLMs) and generative AI (genAI)—rely on compiling as much information from relevant sources (i.e., "texts written in English" or "photographs") as possible in order to build a functional and persuasive model that users will later interact with. While AI companies in part distinguish themselves by what data their models are trained on, possibly the greatest source of information—one freely available to all of us—is the open web.

To gather up all that data, companies and researchers use automated programs called scrapers (sometimes referred to by the more general term "bots") to "crawl" over the links available between various webpages and save the types of information they're tasked with as they go. [Scrapers](https://www.eff.org/deeplinks/2018/04/scraping-just-automated-access-and-everyone-does-it) are tools with a long, and often beneficial, history: services like search engines, the Internet Archive, and all kinds of scientific research rely on them.

When scrapers are not deployed thoughtfully, however, they can contribute to higher hosting costs, lower performance, and even site outages, particularly when site operators see so many of them in operation at the same time. In the long run all this may lead to some sites shutting down rather than bearing the brunt of it.

For-profit AI companies must ensure they do not poison the well of the open web they rely on in a short-sighted rush for training data.

## Bots: Read the Room

There are existing best practices those who use scrapers should follow. When bots and their operators ignore these guideposts it sends a signal to site operators, sometimes explicitly, that they can or should cut off their access, impede performance, and in the worst case it may take a site down for all users. Some companies appear to follow these practices most of the time, but we see increasing reports and evidence of new bots that don't.

First, where possible, scrapers should [follow instructions](https://www.eff.org/deeplinks/2023/12/no-robotstxt-how-ask-chatgpt-and-google-bard-not-use-your-website-training) given in a site's [robots.txt file](https://www.theverge.com/24067997/robots-txt-ai-text-file-web-crawlers-spiders), whether those are to back off to a certain crawling rate, exclude certain paths, or not to crawl the site at all.

Second, bots should send their requests with a clearly labeled User Agent string which indicates their operator, their purpose, and a means of contact.

Third, those running scrapers should provide a process for site operators to request back-offs, rate caps, exclusions, and to report problematic behavior via the means of contact info or response forms linked via the User Agent string.

## Mitigations for Site Operators

Of course, if you're running a website dealing with a flood of crawling traffic, waiting for those bots to change their behavior for the better might not be realistic. Here are a few suggested, if imperfect, mitigations based in part on our own sometimes frustrating experiences.

First, use a caching layer. In most cases a Content Delivery Network (CDN) or an "edge platform" (essentially a newer iteration of a CDN) can provide this for you, and some services offer a free tier for non-commercial users. There are also a number of great projects if you prefer to self-host. Some of the tools we've used for caching include [varnish](https://varnish-cache.org/), [memcached](https://www.memcached.org/), and [redis](https://github.com/redis/redis).

Second, convert to static content to prevent resource-intensive database reads. In some cases this may reduce the need for caching.

Third, use targeted rate limiting to slow down bots without taking your whole site down. But know this can get difficult when scrapers try to disguise themselves with misleading User Agent strings or by spreading a fleet of crawlers out across many IP addresses.

Other mitigations such as client-side validation (e.g. CAPTCHAs or proof-of-work) and fingerprinting carry privacy and usability trade-offs, and we warn against deploying them without careful forethought.

## Where Do We Go From Here?

To reiterate, whatever one's opinion of these particular AI tools, [scraping](https://www.eff.org/deeplinks/2018/04/scraping-just-automated-access-and-everyone-does-it) itself is not the problem. Automated access is a fundamental technique of archivists, computer scientists, and everyday users that we hope is here to stay—as long as it can be done non-destructively. However, we realize that not all implementers will follow our suggestions for bots above, and that our mitigations are both technically advanced and incomplete.

Because we see so many bots operating for the same purpose at the same time, it seems there's an opportunity here to provide these automated data *consumers* with tailored data *providers*, removing the need for every AI company to scrape every website, seemingly, every day.

And on the operators' end, we hope to see more web-hosting and framework technology that is built with an awareness of these issues from day one, perhaps building in responses like just-in-time static content generation or dedicated endpoints for crawlers.