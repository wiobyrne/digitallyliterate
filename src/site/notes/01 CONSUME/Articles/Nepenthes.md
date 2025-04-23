---
{"dg-publish":true,"permalink":"/01-consume/articles/nepenthes/","title":"Nepenthes"}
---


# Nepenthes

This is a tarpit intended to catch web crawlers. Specifically, it's targetting crawlers that scrape data for LLMs - but really, like the plants it is named after, it'll eat just about anything that finds it's way inside.

It works by generating an endless sequences of pages, each of which with dozens of links, that simply go back into a the tarpit. Pages are randomly generated, but in a deterministic way, causing them to appear to be flat files that never change. Intentional delay is added to prevent crawlers from bogging down your server, in addition to wasting their time. Lastly, optional Markov-babble can be added to the pages, to give the crawlers something to scrape up and train their LLMs on, hopefully accelerating model collapse.

[You can take a look at what this looks like, here. (Note: VERY slow page loads!)](https://zadzmo.org/nepenthes-demo)

## WARNING

THIS IS DELIBERATELY MALICIOUS SOFTWARE INTENDED TO CAUSE HARMFUL ACTIVITY. DO NOT DEPLOY IF YOU AREN'T FULLY COMFORTABLE WITH WHAT YOU ARE DOING.

## ANOTHER WARNING

LLM scrapers are relentless and brutual. You may be able to keep them at bay with this software - but it works by providing them with a neverending stream of exactly what they are looking for. YOU ARE LIKELY TO EXPERIENCE SIGNIFICANT CONTINUOUS CPU LOAD, ESPECIALLY WITH THE MARKOV MODULE ENABLED.

## YET ANOTHER WARNING

There is not currently a way to differentiate between web crawlers that are indexing sites for search purposes, vs crawlers that are training AI models. ANY SITE THIS SOFTWARE IS APPLIED TO WILL LIKELY DISAPPEAR FROM ALL SEARCH RESULTS.

## So why should I run this, then?

So that, as I said to [Ars Technica](https://arstechnica.com/tech-policy/2025/01/ai-haters-build-tarpits-to-trap-and-trick-ai-scrapers-that-ignore-robots-txt/), we can fight back even if we don't succeed. Be indigestible. Grow spikes.

Instead of rolling over and letting these assholes do what they want, make them have to work for it instead.

Further questions? I made a [FAQ](https://zadzmo.org/code/nepenthes/FAQ.md) page.

## Latest Version

[Nepenthes 1.1](https://zadzmo.org/code/nepenthes/downloads/nepenthes-1.1.tar.gz)

[All downloads](https://zadzmo.org/code/nepenthes/downloads/)

## Usage

Expected usage is to hide the tarpit behind nginx or Apache, or whatever else you have implemented your site in. Directly exposing it to the internet is ill advised. We want it to look as innocent and normal as possible; in addition HTTP headers are used to configure the tarpit.

I'll be using nginx configurations for examples. Here's a real world snippet for the demo above:

```
location /nepenthes-demo/ {
            proxy_pass http://localhost:8893;
            proxy_set_header X-Prefix '/nepenthes-demo';
            proxy_set_header X-Forwarded-For $remote_addr;
            proxy_buffering off;
    }
```

You'll see several headers are added here: "X-Prefix" tells the tarpit that all links should go to that path. Make this match what is in the 'location' directive. X-Forwarded-For is optional, but will make any statistics gathered significantly more useful.

The proxy\_buffering directive is important. LLM crawlers typically disconnect if not given a response within a few seconds; Nepenthes counters this by drip-feeding a few bytes at a time. Buffering breaks this workaround.

You can have multiple proxies to an individual Nepenthes instance; simply set the X-Prefix header accordingly.

## Installation

You can use Docker, or install manually.

A Dockerfile and compose.yaml is provided in the [/docker directory.](https://svn.zadzmo.org/repo/nepenthes/head/docker/)Simply tweak the configuration file to your preferences, 'docker compose up'. You will still need to bootstrap a Markov corpus if you enable the feature (see next section.)

For Manual installation, you'll need to install Lua (5.4 preferred), SQLite (if using Markov), and OpenSSL. The following Lua modules need to be installed - if they are all present in your package manager, use that; otherwise you will need to install [Luarocks](https://luarocks.org/) and use it to install the following:

- [cqueues](https://luarocks.org/modules/daurnimator/cqueues)
- [ossl](https://luarocks.org/modules/daurnimator/luaossl) (aka luaossl)
- [lpeg](https://luarocks.org/modules/gvvaughan/lpeg)
- [lzlib](https://luarocks.org/modules/hisham/lzlib) (or [lua-zlib](https://luarocks.org/modules/brimworks/lua-zlib), only one of the two needed)
- [dbi-sqlite3](https://luarocks.org/modules/sparked435/luadbi-sqlite3) (aka luadbi-sqlite3)
- [unix](https://luarocks.org/modules/daurnimator/lunix) (aka lunix)

Create a nepenthes user (you REALLY don't want this running as root.) Let's assume the user's home directory is also your install directory.

```
useradd -m nepenthes
```

Unpack the tarball:

```
cd scratch/
tar -xvzf nepenthes-1.0.tar.gz
    cp -r nepenthes-1.0/* /home/nepenthes/
```

Tweak config.yml as you prefer (see below for documentation.) Then you're ready to start:

```
su -l -u nepenthes /home/nepenthes/nepenthes /home/nepenthes/config.yml
```

Sending SIGTERM or SIGINT will shut the process down.

## Bootstrapping the Markov Babbler

The Markov feature requires a trained corpus to babble from. One was intentionally omitted because, ideally, everyone's tarpits should look different to evade detection. Find a source of text in whatever language you prefer; there's lots of research corpuses out there, or possibly pull in some very long Wikipedia articles, maybe grab some books from Project Gutenberg, the Unix fortune file, it really doesn't matter at all. Be creative!

Training is accomplished by sending data to a POST endpoint. This only needs to be done once. Sending training data more than once cumulatively adds to the existing corpus, allowing you to mix different texts - or train in chunks.

Once you have your body of text, assuming it's called corpus.txt, in your working directory, and you're running with the default port:

```
curl -XPOST -d @./corpus.txt -H'Content-type: text/plain' http://localhost:8893/train
```

This could take a very, VERY long time - possibly hours. curl may potentially time out. See [load.sh](https://svn.zadzmo.org/repo/nepenthes/head/load.sh) in the nepenthes distribution for a script that incrementally loads training data.

The Markov module returns an empty string if there is no corpus. Thus, the tarpit will continue to function as a tarpit without a corpus loaded. The extra CPU consumed for this check is almost nothing.

If you desire to delete the markov corpus and start over, that is simply done with curl to the same endpoint using the DELETE method:

```
curl -XDELETE http://localhost:8893/train
```

## Statistics

Want to see what prey you've caught? There are several statistics endpoints, all returning JSON. To see everything:

```
http://{http_host:http_port}/stats
```

To see user agent strings only:

```
http://{http_host:http_port}/stats/agents
```

Or IP addresses only:

```
http://{http_host:http_port}/stats/ips/
```

These can get quite big; so it's possible to filter both 'agents' and 'ips', simply add a minimum hit count to the URL. For example, to see a list of all IPs that have visted more than 100 times:

```
http://{http_host:http_port}/stats/ips/100
```

Simply curl the URLs, pipe into 'jq' to pretty-print as desired. Script away!

New in v1.1, there's a corpus statistics endpoint, if you're curious how big it is, and don't want to fumble around with SQLite:

```
http://{http_host:http_port}/stats/markov
```

## Nepenthes used Defensively

A link to a Nepenthes location from your site will flood out valid URLs within your site's domain name, making it unlikely the crawler will access real content.

In addition, the aggregated statistics will provide a list of IP addresses that are almost certainly crawlers and not real users. Use this list to create ACLs that block those IPs from reaching your content

- either return 403, 404, or just block at the firewall level.

Integration with fail2ban or blocklistd (or similar) is a future possibility, allowing realtime reactions to crawlers, but not currently implemented.

Using Nepenthes defensively, it would be ideal to turn off the Markov module, and set both max\_delay and min\_delay to something large, as a way to conserve your CPU.

## Enforcing robots.txt

I get asked this a lot: yes, this is a valid use case. It's not what I intended to do (cause AI companies pain), which is a very different thing than making bots respect your robots.txt. But it works nicely when applied.

Just add:

```
User-agent: \*
Disallow: /nepenthes-demo
```

To your robots.txt, and those that respect the rules will stay out. Then your IP statistics can be used as a banlist to save your resources.

## Nepenthes used Offensively

Let's say you've got horsepower and bandwidth to burn, and just want to see these AI models burn. Nepenthes has what you need:

Don't make any attempt to block crawlers with the IP stats. Put the delay times as low as you are comfortable with. Train a big Markov corpus and leave the Markov module enabled, set the maximum babble size to something big. In short, let them suck down as much bullshit as they have diskspace for and choke on it.

## Advanced

As of v1.1, Nepenthes can listen on a unix domain socket instead of binding to a host and port. Set the argument 'unix\_socket' in config.yaml to the path to bind to.

Note, you MUST set the X-Forwarded-For or similar header in the upstream proxy! Nepenthes will malfunction without it when listening to a unix socket.

This feature has not been rigorously tested, use caution.

## Configuration File

All possible directives in config.yaml:

- http\_host: sets the host that Nepenthes will listen on; default is localhost only.
- http\_port: sets the listening port number; default 8893
- unix\_socket: sets a path to a unix domain socket to listen on. Default is nil.
- prefix: Prefix all generated links should be given. Can be overriden with the X-Prefix HTTP header. Defaults to nothing.
- templates: Path to the template files. This should be the '/templates' directory inside your Nepenthes installation.
- detach: If true, Nepenthes will fork into the background and redirect logging output to Syslog.
- pidfile: Path to drop a pid file after daemonization. If empty, no pid file is created.
- max\_wait: Longest amount of delay to add to every request. Increase to slow down crawlers; too slow they might not come back.
- min\_wait: The smallest amount of delay to add to every request. A random value is chosen between max\_wait and min\_wait.
- real\_ip\_header: Changes the name of the X-Forwarded-For header that communicates the actual client IP address for statistics gathering.
- prefix\_header: Changes the name of the X-Prefix header that overrides the prefix configuration variable.
- forget\_time: length of time, in seconds, that a given user-agent can go missing before being deleted from the statistics table.
- forget\_hits: A user-agent that generates more than this number of requests will not be deleted from the statistics table.
- persist\_stats: A path to write a JSON file to, that allows statistics to survive across crashes/restarts, etc
- seed\_file: Specifies location of persistent unique instance identifier. This allows two instances with the same corpus to have different looking tarpits.
- words: path to a dictionary file, usually '/usr/share/dict/words', but could vary depending on your OS.
- markov: Path to a SQLite database containing a Markov corpus. If not specified, the Markov feature is disabled.
- markov\_min: Minimum number of words to babble on a page.
- markov\_max: Maximum number of words to babble on a page. Very large values can cause serious CPU load.

## License Info

Nepenthes is distributed under the terms of the MIT License, see the file 'LICENSE' in the source distribution. In addition, the release tarball contains several 3rd party components, see external/README. Using or distributing Nepenthes requires agreeing to these license terms as well. As of v1.1, all are also MIT or X11 licenses.

## History

Version numbers use a simple process: If the only changes are fully backwards compatible, the minor number changes. If the user or administrator needs to change anything after or part of the upgrade, the major number changes and the minor number resets to zero.

- v1.0: Initial release
- v1.1:
	- Clearer licensing
	- Small performance improvements
	- Clearer logging
	- Corpus reset
	- Evasion countermeasures
	- Corpus Statistics report endpoint
	- Unix domain socket support

## Summary:


---

*Source: [ZADZMO code](https://zadzmo.org/code/nepenthes/)*
