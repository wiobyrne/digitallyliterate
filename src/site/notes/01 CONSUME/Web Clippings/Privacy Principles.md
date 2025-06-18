---
{"dg-publish":true,"permalink":"/01-consume/web-clippings/privacy-principles/","title":"Privacy Principles","tags":["privacy"]}
---

# Privacy Principles
Privacy is an essential part of the web. This document provides definitions for privacy and related concepts that are applicable worldwide as well as a set of privacy principles that should guide the development of the web as a trustworthy platform. People using the web would benefit from a stronger relationship between technology and policy, and this document is written to work with both.

---
[W3C Statement](https://www.w3.org/standards/types#STMT)

More details about this document

This version:

[https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/)

Latest published version:

[https://www.w3.org/TR/privacy-principles/](https://www.w3.org/TR/privacy-principles/)

Latest editor's draft:

[https://w3ctag.github.io/privacy-principles/](https://w3ctag.github.io/privacy-principles/)

History:

[https://www.w3.org/standards/history/privacy-principles/](https://www.w3.org/standards/history/privacy-principles/)

[Commit history](https://github.com/w3ctag/privacy-principles/commits/)

Editors:

[Robin Berjon](https://berjon.com/) ([Supramundane](https://supramundane.agency/)) (The New York Times until Sep 2022)

Jeffrey Yasskin ([Google](https://google.com/))

Feedback:

[GitHub w3ctag/privacy-principles](https://github.com/w3ctag/privacy-principles/) ([pull requests](https://github.com/w3ctag/privacy-principles/pulls/), [new issue](https://github.com/w3ctag/privacy-principles/issues/new/choose), [open issues](https://github.com/w3ctag/privacy-principles/issues/))

See also [**translations**](https://www.w3.org/Translations/?technology=s-privacy-principles).

---

## Abstract

Privacy is an essential part of the web. This document provides definitions for privacy and related concepts that are applicable worldwide as well as a set of privacy principles that should guide the development of the web as a trustworthy platform. People using the web would benefit from a stronger relationship between technology and policy, and this document is written to work with both.

## Status of This Document

*This section describes the status of this document at the time of its publication. A list of current W3C publications and the latest revision of this technical report can be found in the [W3C standards and drafts index](https://www.w3.org/TR/) at https://www.w3.org/TR/.*

This document was prepared by the [Web Privacy Principles Task Force](https://github.com/w3ctag/privacy-principles), which was convened by the TAG.

This document was published by the [Technical Architecture Group](https://www.w3.org/groups/other/tag) as a Statement using the [Note track](https://www.w3.org/policies/process/20231103/#recs-and-notes).

A W3C Statement is a document that, after extensive consensus-building, is endorsed by W3C and its Members.

The [W3C Patent Policy](https://www.w3.org/policies/patent-policy/) does not carry any licensing requirements or commitments on this document.

This document is governed by the [03 November 2023 W3C Process Document](https://www.w3.org/policies/process/20231103/).

This document elaborates on the [privacy principle](https://www.w3.org/TR/ethical-web-principles/#privacy) from the [Ethical Web Principles](https://www.w3.org/TR/ethical-web-principles/): "Security and privacy are essential." While it focuses on privacy, this should not be taken as an indication that privacy is always more important than other ethical web principles, and this document doesn't address how to balance the different ethical web principles if they come into conflict.

Privacy on the web is primarily regulated by two forces: the architectural capabilities that the web platform exposes (or does not expose), and laws in the various jurisdictions where the web is used (\[\], \[\]). These regulatory mechanisms are separate; a law in one country does not (and should not) change the architecture of the whole web, and likewise web specifications cannot override any given law (although they can affect how easy it is to create and enforce law). The web is not merely an implementation of a particular legal privacy regime; it has distinct features and guarantees driven by shared values that often exceed legal requirements for privacy.

However, the overall goal of privacy on the web is served best when technology and law complement each other. This document seeks to establish shared concepts as an aid to technical efforts to regulate privacy on the web. It may also be useful in pursuing alignment with and between legal regulatory regimes.

Our goal for this document is not to cover all possible privacy issues, but rather to provide enough background to support the web community in making informed decisions about privacy and in weaving privacy into the architecture of the web.

Few architectural principles are absolute, and privacy is no exception: privacy can come into tension with other desirable properties of an ethical architecture, including accessibility or internationalization, and when that happens the web community will have to work together to strike the right balance.

The primary audiences for this document are

- browser developers,
- authors of web specifications,
- reviewers of web specifications, and
- web developers.

Additional audiences include:

- policy makers and
- operators of privacy-related services.

This document is intended to help its audiences address privacy concerns as early as possible in the life cycle of a new web standard or feature, or in the development of web products. Beginning with privacy in mind will help avoid the need to add special cases later to address unforeseen but predictable issues or to build systems that turn out to be unacceptable to users.

Because this document guides privacy reviews of new standards, authors of web specifications should consult it early in the design to make sure their feature passes the review smoothly.

This section is a list of all the privacy principles, with links to their longer explanations in the rest of the document.

Which audiences should be included?

- [Principle 1.5.1](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#principle-pareto-frontier): When confronted with an apparent tradeoff, first look for ways to improve all principles at once.websites user agents API designers
- [Principle 1.5.2](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#principle-limited-collection-for-safety): If a service needs to collect extra data from its users in order to protect those or other users, it must take extra technical and legal measures to ensure that this data can't be then used for other purposes, like to grow the service.websites user agents
- [Principle 2.1](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#principle-identity-per-context): A [user agent](https://infra.spec.whatwg.org/#user-agent) should help its user present the [identity](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-identity) they want in each [context](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-context) they are in, and should prevent or support [recognition](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-recognize) as appropriate.user agents
- [Principle 2.2.1](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#restrict-data-to-necessary-or-aligned): [Sites](https://html.spec.whatwg.org/multipage/browsers.html#site), [user agents](https://infra.spec.whatwg.org/#user-agent), and other [actors](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-actor) should restrict the [data](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-data) they transfer to what's either necessary to achieve their users' goals or aligns with their users' wishes and interests.websites user agents
- [Principle 2.2.2](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#granular-api-data-requests): Web APIs should be designed to minimize the amount of data that sites need to request to carry out their users' goals. Web APIs should also provide granularity and user controls over [personal data](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-data) that is communicated to [sites](https://html.spec.whatwg.org/multipage/browsers.html#site).API designers
- [Principle 2.2.1.1](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#principle-identify-ancillary-apis): Specifications for [ancillary APIs computed from existing information](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-ancillary-apis-computed-from-existing-information) and [ancillary APIs that provide new information](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-ancillary-apis-that-provide-new-information) should identify them as such, so that [user agents](https://infra.spec.whatwg.org/#user-agent) can provide appropriate choices for their users.API designers
- [Principle 2.2.1.1.1](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#principle-ancillary-apis-with-new-information-shouldnt-reveal-personal-data): [Ancillary APIs that provide new information](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-ancillary-apis-that-provide-new-information) should not reveal any [personal data](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-data) that isn't already available through other APIs, without an indication that doing so aligns with the user's wishes and interests.API designers
- [Principle 2.2.1.1.2](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#principle-disabling-ancillary-apis-with-new-information): User agents should provide a way to enable or disable [ancillary APIs that provide new information](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-ancillary-apis-that-provide-new-information) and should set the default according to their users' needs.user agents
- [Principle 2.3](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#deprecated-apis-dont-justify-information-leaks): New web APIs should guard users' information at least as well as existing APIs that are expected to stay in the web platform.API designers user agents
- [Principle 2.4](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#principle-sensitive): There is broad consensus that some categories of information such as credit card numbers or precise geolocation are sensitive, but system designers should not assume that other categories of information are therefore *not* sensitive. Whether information is considered sensitive can vary depending on a [person](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual) 's circumstances and the [context](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-context) of an interaction, and it can change over time. websites user agents API designers
- [Principle 2.5](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#respect-data-rights): [People](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual) have certain rights over [data](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-data) that is about themselves, and these rights should be facilitated by their [user agent](https://infra.spec.whatwg.org/#user-agent) and the [actors](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-actor) that are [processing](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-process) their [data](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-data). websites user agents API designers
- [Principle 2.6](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#de-identify-data): Whenever possible, processors should work with [data](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-data) that has been [de-identified](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-de-identify). websites user agents API designers
- [Principle 2.7](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#principle-collective-privacy): Groups and institutions should support autonomy by making decisions collectively to either prevent or enable data sharing, and to set defaults for data processing rules. websites user agents
- [Principle 2.8](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#principle-owned-devices-disclose-surveillance): [User agents](https://infra.spec.whatwg.org/#user-agent) should not tell an [administrator](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-administrator) about user behavior except when that disclosure is necessary to enforce reasonable constraints on use of the device or software. Even when a disclosure is reasonable, [user agents](https://infra.spec.whatwg.org/#user-agent) must ensure their users know about this surveillance.user agents
- [Principle 2.9.1](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#abuse-reporting): Systems that allow for communicating on the web must provide an effective capability to report [abuse](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-abuse). websites API designers
- [Principle 2.9.2](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#abuse-protection): [User agents](https://infra.spec.whatwg.org/#user-agent) and [sites](https://html.spec.whatwg.org/multipage/browsers.html#site) must take steps to protect their users from abusive behaviour, and [abuse](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-abuse) mitigation must be considered when designing web platform features. websites user agents API designers
- [Principle 2.10.1](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#purpose-specification): When accessing personal data or requesting permission, [sites](https://html.spec.whatwg.org/multipage/browsers.html#site) and other [actors](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-actor) should specify the [purpose](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-purpose) for which the data will be used. websites user agents
- [Principle 2.10.2](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#no-secondary-use): [Actors](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-actor) should not use personal data for purposes other than those specified. (Other uses are often called secondary uses \[\].) websites user agents
- [Principle 2.11.1](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#transparency-when-requested): When accessing data or requesting permission, [sites](https://html.spec.whatwg.org/multipage/browsers.html#site) (and other [actors](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-actor)) should provide [people](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual) with relevant explanatory information about the use of data, and [user agents](https://infra.spec.whatwg.org/#user-agent) should help present and consume that information. websites user agents
- [Principle 2.11.2](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#transparency-plain-language-machine-readable): Information about privacy-relevant practices should be provided in both easily accessible plain language form and in machine-readable form. websites API designers
- [Principle 2.11.3](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#transparency-distinguishable): Mechanisms that can be used for [recognizing](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-recognize) [people](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual) should be designed so that their operation is visible and distinguishable, to [user agents](https://infra.spec.whatwg.org/#user-agent), researchers, and regulators. websites API designers
- [Principle 2.12.1](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#principle-consent-user-preference): When any [actor](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-actor) obtains [consent](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-opt-in) for processing from a [person](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual), the actor should design the consent request so as to learn the person's intent to consent or not, and not to maximize the processing consented to. websites
- [Principle 2.12.2](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#principle-minimize-consent-requests): An [actor](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-actor) should avoid interrupting a [person](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual) 's use of a site for consent requests when an alternative is available. websites
- [Principle 2.12.3](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#principle-consent-withdraw): It should be as easy for a [person](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual) to check what consent they have given, to withdraw consent, or to opt out or object, as to give consent. websites
- [Principle 2.12.4](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#principle-consent-otherpeople): [Actors](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-actor) should provide functionality to access, correct, and remove data about [people](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual) to those [people](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual) when that data has been provided by someone else. websites
- [Principle 2.13.1](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#principle-notifications-control): A [user agent](https://infra.spec.whatwg.org/#user-agent) should help users control notifications and other interruptive UI that can be used to manipulate behavior.user agents
- [Principle 2.13.2](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#principle-notifications-context): Web [sites](https://html.spec.whatwg.org/multipage/browsers.html#site) should use notifications only for information that their users have specifically requested. websites
- [Principle 2.14](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#principle-do-not-retaliate): [Actors](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-actor) must not retaliate against [people](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual) who protect their [data](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-data) against non-essential [processing](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-process) or exercise rights over their [data](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-data). websites user agents
- [Principle 2.15.1](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#principle-support-choosing-info): [User agents](https://infra.spec.whatwg.org/#user-agent) should support [people](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual) in choosing which information they provide to [actors](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-actor) that request it, up to and including allowing users to provide arbitrary information. user agents
- [Principle 2.15.2](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#principle-no-facts-or-promises): APIs should be designed such that data returned through an API does not assert a fact or make a promise on the user's behalf about the user or their environment. API designers

This is a document containing technical guidelines. However, in order to put those guidelines in context we must first define some terms and explain what we mean by privacy.

The web is a social and technical system made up of [information flows](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-information-flows). Because this document is specifically about [privacy](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-privacy) as it applies to the web, it focuses on privacy with respect to information flows.

The web is for everyone (\[\]). It should be " *a platform that helps people and provides a net positive social benefit* " (\[\]). One of the ways in which the web serves people is by seeking to protect them from surveillance and the types of manipulation that data can enable.

Information can be used to predict and to influence people, as well as to design online spaces that control people's behaviour. The collection and [processing](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-process) of information in greater volume, with greater precision and reliability, with increasing interoperability across a growing variety of data types, and at intensifying speed is leading to a concentration of power that threatens private and public liberties. What's more, automation and the increasing computerisation of all aspects of our lives both increase the power of information and decrease the cost of a number of intrusive behaviours that would be more easily kept in check if the perpetrator had to be in the same room as the victim.

When an [actor](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-actor) can collect [data](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-data) about a [person](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual) and process it automatically, and that [person](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual) has to take manual action to protect their [data](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-data) or control its processing, this automation asymmetry creates an imbalance of power that favors that [actor](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-actor) and decreases the [person](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual) 's agency. This document focuses on the impact that [data](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-data) [processing](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-process) can have on people, but it can also impact other [actors](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-actor), such as companies or governments.

It is important to keep in mind that not all people are equal in how they can resist an imbalance of power: some [people](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual) are more [vulnerable](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-vulnerable) and therefore in greater need of protection.

Data governance is the system of principles that regulate [information flows](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-information-flows).[Data governance](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-governance) determines which [actors](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-actor) can collect [data](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-data), what data they can collect, how they can collect it, and how they can [process](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-process) it (\[\], \[\]). This document provides building blocks for [data governance](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-governance) that puts [people](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual) first.

Principles vary from [context](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-context) to [context](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-context) (\[\], \[\]). For instance, people have different expectations of [privacy](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-privacy) at work, at a café, or at home. Understanding and evaluating a privacy situation is best done by clearly identifying:

- Its [actors](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-actor), which include the subject of the information as well as the sender and the recipient of the [information flow](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-information-flows). (Note that recipients might not always want to be recipients.)
- The type of data involved in the [information flow](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-information-flows).
- The principles that are in use in this context.

There are *always* privacy principles at work. Some sets of principles may be more permissive, but that does not make them neutral. All privacy principles have an impact on [people](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual) and we must therefore determine which principles best align with ethical web values in web [contexts](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-context) (\[\], \[\]).

Information flows are information exchanged or processed by [actors](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-actor). A person's privacy can be harmed both by their information flowing from them to other actors and by information flowing toward them. Examples of the latter include: unexpected shocking images, loud noises while they intend to sleep, manipulative information, interruptive messages when their focus is on something else, or harassment when they seek social interactions. (In some of these cases, the information may not be [personal data](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-data).)

On the web, [information flows](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-information-flows) may involve a wide variety of [actors](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-actor) that are not always recognizable or obvious to a user within a particular interaction. Visiting a website may involve the actors that contribute to operating that site, but also actors with network access, which may include: Internet service providers; other network operators; local institutions providing a network connection including schools, libraries, or universities; government intelligence services; malicious hackers who have gained access to the network or the systems of any of the other actors. High-level threats including surveillance may be pursued by these actors (\[\]). Pervasive monitoring, a form of large-scale, indiscriminate surveillance, is a known attack on the privacy of users of the internet and the web \[\].

Information flows may also involve other people — for example, other users of a site — which could include friends, family members, teachers, strangers, or government officials. Some threats to privacy, including both disclosure and harassment, may be particular to the other people involved in the information flow (\[\]).

A [person](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual) 's autonomy is their ability to make decisions of their own personal will, without undue influence from other [actors](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-actor). People have limited intellectual resources and time with which to weigh decisions, and they have to rely on shortcuts when making decisions. This makes it possible to manipulate their preferences, including their privacy preferences (\[\], \[\]). A [person](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual) 's [autonomy](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-autonomous) is improved by a system when that system offers a shortcut that is closer to what that [person](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual) would have decided given unlimited time and intellectual ability. [Autonomy](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-autonomous) is decreased when a similar shortcut goes against decisions made under these ideal conditions.

Affordances and interactions that decrease [autonomy](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-autonomous) are known as deceptive patterns (or dark patterns). A [deceptive pattern](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-dark-pattern) does not have to be intentional (\[\], \[\]). When building something that may impact people's [autonomy](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-autonomous), it is important that reviewers from multiple independent perspectives check that it does not introduce [deceptive patterns](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-dark-pattern).

Given the large volume of potential [data](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-data) -related decisions in today's data economy, it is impossible for people to have detailed control over how their data is processed. This fact does not imply that privacy is dead. Studies show that [people](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual) remain concerned over how their [data](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-data) is [processed](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-process), that they feel powerless, and sense that they have lost agency (\[\]). If we design our technological infrastructure carefully, we can give people greater [autonomy](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-autonomous) with respect to their own [data](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-data). This is done by setting [appropriate](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-appropriately), privacy-protective defaults and designing user-friendly choice architectures.

Privacy labor is the practice of having a [person](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual) do the work of ensuring [data processing](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-process) of which they are the subject or recipient is [appropriate](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-appropriately), instead of putting the responsibility on the [actors](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-actor) who are doing the processing. Data systems that are based on asking [people](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual) for their [consent](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-opt-in) tend to increase [privacy labor](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-labor).

More generally, implementations of [privacy](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-privacy) often offload [labor](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-labor) to [people](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual). This is notably true of the regimes descended from the Fair Information Practices ([FIPs](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-fips)), a loose set of principles initially elaborated in the 1970s in support of individual [autonomy](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-autonomous) in the face of growing concerns with databases. The [FIPs](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-fips) generally assume that there is sufficiently little [data processing](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-process) taking place that any [person](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual) will be able to carry out sufficient diligence to be [autonomous](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-autonomous) in their decision-making. Since they offload the [privacy labor](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-labor) to people and assume perfect, unlimited [autonomy](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-autonomous), the [FIPs](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-fips) do not forbid specific types of [data processing](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-process) but only place them under different procedural requirements. This approach is no longer [appropriate](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-appropriately).

One notable issue with procedural approaches to privacy is that they tend to have the same requirements in situations where people find themselves in a significant asymmetry of power with another [actor](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-actor) — for instance a [person](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual) using an essential service provided by a monopolistic platform — and those where a person and the other [actor](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-actor) are very much on equal footing, or even where the [person](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual) may have greater power, as is the case with small businesses operating in a competitive environment. They also do not consider cases in which one [actor](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-actor) may coerce other [actors](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-actor) into facilitating its [inappropriate](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-inappropriately) practices, as is often the case with dominant players in advertising or in content aggregation (\[\], \[\]).

Reference to the [FIPs](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-fips) survives to this day. They are often referenced as " *transparency and choice* ", which, in today's digital environment, is often an indication that [inappropriate](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-inappropriately) [processing](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-process) is being described.

### 1.2 Vulnerability

Sometimes particular groups of people, such as children, or the elderly, are classified as [vulnerable people](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-vulnerable). However, any [person](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual) could be vulnerable in one or more contexts, sometimes without realizing it. A [person](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual) may not realise when they disclose personal data that they are vulnerable or could become vulnerable, and an [actor](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-actor) may have no way of knowing that a person is vulnerable. System designers should consider this in their system designs.

Some individuals may be more vulnerable to privacy risks or harm as a result of collection, misuse, loss, or theft of personal data because:

- of their attributes, interests, opinions, or behaviour;
- of the situation or setting (e.g. where there is information asymmetry or other power imbalances);
- they lack the capacity to fully assess the risks;
- choices are not presented in an easy-to-understand meaningful way (e.g. [deceptive patterns](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-dark-pattern));
- they have not been consulted about their privacy needs and expectations;
- they have not been considered in the decisions about the design of the product or service.

Additional privacy protections may be needed for personal data of vulnerable people or [sensitive information](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#hl-sensitive-information) which could cause someone to become vulnerable if their personal data is collected, used, or shared (e.g. blocking tracking elements, sensor data, or information about installed software or connected devices).

While sometimes others can help vulnerable people assess privacy risks and make decisions about privacy (such as parents, [guardians](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-guardian), and peers), everyone has their own right to privacy.

#### 1.2.1 Guardians

Some [vulnerable people](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#vulnerability) need a guardian to help them make good decisions about their own web use (e.g. children, with their parents often acting as their [guardians](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-guardian)). A person with a [guardian](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-guardian) is known as a ward.

The [ward](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-ward) has a right to make informed decisions and exercise their autonomy regarding their right to privacy. Their [guardian](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-guardian) has an *obligation* to help their [ward](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-ward) do so when the [ward](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-ward) 's abilities aren't sufficient, even if that conflicts with the [guardian](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-guardian) 's desires. In practice, many [guardians](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-guardian) do not make decisions in their [ward](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-ward) 's best interest, and it's critical that web platform technologies do not exacerbate the risks inherent in this situation.

[User agents](https://infra.spec.whatwg.org/#user-agent) should balance a benevolent [guardian](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-guardian) 's need to protect their [ward](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-ward) from dangers, against a [ward](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-ward) 's need to protect themself if they have a malicious [guardian](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-guardian).

[User agents](https://infra.spec.whatwg.org/#user-agent) can protect vulnerable [wards](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-ward) by complying with the principles in, and may only provide information about a [ward](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-ward) to a [guardian](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-guardian) for the purpose of helping that [guardian](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-guardian) uphold their responsibilities to their [ward](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-ward). The mechanism for doing so must include measures to help [wards](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-ward) who realize that their [guardian](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-guardian) isn't acting in the [ward](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-ward) 's interest.

Privacy principles are defined through social processes and, because of that, the applicable definition of [privacy](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-privacy) in a given context can be contested (\[\]). This makes privacy a problem of collective action (\[\]). Group-level [data processing](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-process) may impact populations or individuals, including in ways that [people](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual) could not control even under the optimistic assumptions of [consent](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-opt-in). For instance, it's possible that the only thing that a person is willing to reveal to a particular actor is that they are part of a given group. However, other members of the same group may be interacting with the same actor and revealing a lot more information, which can enable effective statistical inferences about people who refrain from providing information about themselves.

What we consider is therefore not just the relation between the [people](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual) who share data and the [actors](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-actor) that invite that sharing (\[\]), but also between the [people](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual) who may find themselves categorised indirectly as part of a group even without sharing data. One key understanding here is that such relations may persist even when data is [de-identified](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-de-identify). What's more, such categorisation of people, voluntary or not, changes the way in which the world operates. This can produce self-reinforcing loops that can damage both individuals and groups (\[\]).

In general, collective issues in [data](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-data) require collective solutions. Web standards help with [data governance](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-governance) by defining structural controls in [user agents](https://infra.spec.whatwg.org/#user-agent), ensuring that researchers and regulators can discover group-level abuse, and establishing or delegating to institutions that can handle issues of [privacy](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-privacy).[Governance](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-governance) will often struggle to achieve its goals if it works primarily by increasing *individual* control instead of by collective action.

Collecting data at large scales can have significant pro-social outcomes. Problems tend to emerge when [actors](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-actor) [process](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-process) [data](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-data) for collective benefit and for [disloyal](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-disloyalty) [purposes](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-purpose) at the same time. The [disloyal](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-disloyalty) [purposes](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-purpose) are often justified as bankrolling the pro-social outcomes but this requires collective oversight to be [appropriate](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-appropriately).

There are different ways for [people](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual) to become members of a group. Either they can join it deliberately, making it a self-constituted group such as when joining a club, or they can be classified into it by an external actor, typically a bureaucracy or its computerised equivalent (\[\]). In the latter case, [people](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual) may not be aware that they are being grouped together, and the definition of the group may not be intelligible (for instance if it is created from opaque machine learning techniques).

Protecting group privacy can take place at two different levels. The existence of a group or at least its activities may need to be protected even in cases in which its members are guaranteed to remain anonymous. We refer to this as "group privacy." Conversely, [people](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual) may wish to protect knowledge that they are members of the group even though the existence of the group and its actions may be well known (e.g. membership in a dissidents movement under authoritarian rule), which we call "membership privacy". An example [privacy violation](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-privacy-violation) for the former case is the fitness app Strava that did not reveal individual behaviour or legal identity but published heat maps of popular running routes. In doing so, it revealed secret US bases around which military personnel took frequent runs (\[\], \[\]).

People's privacy interests may also be affected when information about a small group of people is processed, even if no individualized data is exposed. For example, browsing activity of the students in a classroom may be sensitive even if their teacher doesn't learn exactly which student accessed a particular resource about a health issue. Targeting presentation of information to a small group may also be inappropriate: for example, targeting messages to people who visited a particular clinic or are empaneled on a particular jury may be invasive even without uniquely individual data.

When [people](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual) do not know that they are members of a group, when they cannot easily find other members of the group so as to advocate for their rights together, or when they cannot easily understand why they are being categorised into a given group, their ability to protect themselves through self-governing approaches to privacy is largely eliminated.

One common problem in group privacy is when the actions of one member of a group reveal information that other members would prefer were not shared in this way (or at all). For instance, one person may publish a picture of an event in which they are featured alongside others while the other people captured in the same picture would prefer their participation not to be disclosed. Another example of such issues are sites that enable people to upload their contacts: the person performing the upload might be more open to disclosing their social networks than the people they are connected to are. Such issues do not necessarily admit simple, straightforward solutions, but they need to be carefully considered by people building websites.

While transparency rarely helps enough to inform the individual choices that [people](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual) may make, it plays a critical role in letting researchers and reporters inform our collective decision-making about privacy principles. This consideration extends the TAG's resolution on a [Strong and Secure Web Platform](https://www.w3.org/blog/2015/11/strong-web-platform-statement/) to ensure that " *broad testing and audit continues to be possible* " where [information flows](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-information-flows) and automated decisions are involved.

Such transparency can only function if there are strong rights of access to data (including data derived from one's personal data) as well as mechanisms to explain the outcomes of automated decisions.

A [user agent](https://infra.spec.whatwg.org/#user-agent) acts as an intermediary between a [person](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual) (its [user](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual)) and the web.[User agents](https://infra.spec.whatwg.org/#user-agent) implement, to the extent possible, the principles that collective governance establishes in favour of individuals. They seek to prevent the creation of asymmetries of information, and serve their [user](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual) by providing them with automation to rectify [automation asymmetries](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-automation-asymmetry). Where possible, they protect their [user](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual) from receiving intrusive messages.

The [user agent](https://infra.spec.whatwg.org/#user-agent) is expected to align fully with the [person](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual) using it and to operate exclusively in that [person](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual) 's interest. It is *not* the [first party](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-first-party-0). The [user agent](https://infra.spec.whatwg.org/#user-agent) serves the [person](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual) as a trustworthy agent: it always puts that [person](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual) 's interest first. In some occasions, this can mean protecting that [person](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual) from themselves by preventing them from carrying out a dangerous decision, or by slowing down the person in their decision. For example, the [user agent](https://infra.spec.whatwg.org/#user-agent) will make it difficult for someone to connect to a site if it can't verify that the site is authentic. It will check that that [person](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual) really intends to expose a sensitive device to a page. It will prevent that [person](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual) from consenting to the permanent monitoring of their behaviour. Its user agent duties include (\[\]):

Duty of Protection

Protection requires [user agents](https://infra.spec.whatwg.org/#user-agent) to actively protect their [user](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual) 's data, beyond simple security measures. It is insufficient to just encrypt at rest and in transit. The [user agent](https://infra.spec.whatwg.org/#user-agent) must also limit retention, help ensure that only strictly necessary data is collected, and require guarantees from any [actor](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-actor) that the user agent can reasonably be aware that data is shared to.

Duty of Discretion

Discretion requires the [user agent](https://infra.spec.whatwg.org/#user-agent) to make best efforts to enforce principles by taking care in the ways it discloses the [personal data](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-data) that it manages. Discretion is not confidentiality or secrecy: trust can be preserved even when the [user agent](https://infra.spec.whatwg.org/#user-agent) shares some [personal data](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-data), so long as it is done in an [appropriately](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-appropriately) discreet manner.

Duty of Honesty

Honesty requires that the [user agent](https://infra.spec.whatwg.org/#user-agent) give its [user](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual) information of which the [user agent](https://infra.spec.whatwg.org/#user-agent) can reasonably be aware, that is relevant to them and that will increase their autonomy, as long as they can understand it and there's an appropriate time to do so. This is almost never when the [person](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual) is trying to do something else such as read a page or activate a feature. The duty of honesty goes well beyond that of transparency that is often included in older privacy regimes. Unlike transparency, honesty can't hide relevant information in complex legal notices and it can't rely on very short summaries provided in a consent dialog. If the person has provided [consent](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-opt-in) to [processing](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-process) of their [personal data](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-data), the [user agent](https://infra.spec.whatwg.org/#user-agent) should inform the [person](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual) of ongoing [processing](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-process), with a level of obviousness that is proportional to the reasonably foreseeable impact of the processing.

Duty of Loyalty

Because the [user agent](https://infra.spec.whatwg.org/#user-agent) is a [trustworthy agent](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-trustworthy-agent), it is held to be loyal to the [person](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual) using it in all situations, including in preference to the [user agent](https://infra.spec.whatwg.org/#user-agent) 's implementer. When a [user agent](https://infra.spec.whatwg.org/#user-agent) carries out [processing](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-process) that is detrimental to its [user](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual) 's interests and instead benefits another [actor](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-actor), this is disloyal. Often this would benefit the [user agent](https://infra.spec.whatwg.org/#user-agent) itself, in which case it is known as "self-dealing". Behaviour can be [disloyal](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-disloyalty) even if it is done at the same time as [processing](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-process) that is in the [person](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual) 's interest, what matters is that it potentially conflicts with that [person](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual) 's interest. Additionally, it is important to keep in mind that additional [processing](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-process) almost always implies additional risk. Therefore [processing](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-process) that is not explicitly in a [user](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual) 's interest is likely to be disloyal. [Disloyalty](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-disloyalty) is always [inappropriate](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-inappropriately).

These duties ensure the [user agent](https://infra.spec.whatwg.org/#user-agent) will *care* for its [user](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual). In academic research, this relationship with a [trustworthy agent](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-trustworthy-agent) is often described as "fiduciary" (\[\], \[\], \[\]; see \[\] for a longer informal discussion). Some jurisdictions may have a distinct legal meaning for "fiduciary." (\[\])

Many of the principles described in the rest of this document extend the [user agent](https://infra.spec.whatwg.org/#user-agent) 's duties and make them more precise.

While privacy principles are designed to work together and support each other, occasionally a proposal to improve how a system follows one privacy principle may reduce how well it follows another principle.

[Principle 1.5.1](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#principle-pareto-frontier): When confronted with an apparent tradeoff, first look for ways to improve all principles at once.

Given any initial design that doesn't perfectly satisfy all principles, there are usually some other designs that improve the situation for some principles without sacrificing anything about the other principles. Work to find those designs.

Another way to say this is to look for [Pareto improvements](https://en.wikipedia.org/wiki/Pareto_efficiency) before starting to trade off between principles.

websites user agents API designers

Once one is choosing between different designs at the Pareto frontier, the choice of which privacy principles to prefer is complex and depends heavily on the details of each particular situation. Note that people's privacy can also be in tension with non-privacy concerns. As discussed in the [Ethical Web Principles](https://www.w3.org/TR/ethical-web-principles/), "it is important to consider the context in which a particular technology is being applied, the expected audience(s) for the technology, who the technology benefits and who it may disadvantage, and any power dynamics involved" (\[\]). Despite this complexity, there is a basic ground rule to follow:

[Principle 1.5.2](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#principle-limited-collection-for-safety): If a service needs to collect extra data from its users in order to protect those or other users, it must take extra technical and legal measures to ensure that this data can't be then used for other purposes, like to grow the service.

This is a special case of the [more general principle that data should not be used for more purposes than those specified when the data was collected](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#no-secondary-use).

Services sometimes use people's data in order to protect those or other people. A service that does this should explain what data it's using for this purpose. It should also say how it might use or share a person's data if it believes that person has violated the service's rules.

websites user agents

It is attractive to say that if someone violates the rules of a service they're using, then they sacrifice a proportionate amount of their privacy protections, but

1. Often the service can only prevent the rule violation by also collecting data from innocent users. This extra collection is not always [appropriate](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-appropriately), especially if it allows pervasive monitoring (\[\], \[\]).
2. If a service operator wants to collect some extra data, it can be tempting for them to define rules and proportionality that allow them to do so.

The following examples illustrate some of the tensions:

This section describes a set of principles designed to apply to the web [context](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-context) in general. Specific [contexts](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-context) on the web may need more constraints or other considerations. In time, we expect to see more specialized privacy principles published, for more specific [contexts](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-context) on the web.

These principles should be enforced by [user agents](https://infra.spec.whatwg.org/#user-agent). When this is not possible, we encourage other entities to find ways to enforce them.

[Principle 2.1](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#principle-identity-per-context): A [user agent](https://infra.spec.whatwg.org/#user-agent) should help its user present the [identity](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-identity) they want in each [context](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-context) they are in, and should prevent or support [recognition](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-recognize) as appropriate.

user agents

A [person](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual) 's identity is the set of characteristics that define them. Their identity *in a [context](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-context)* is the set of characteristics they present under particular circumstances.

People can present different identities to different contexts, and can also share a single identity across several different contexts.

People may wish to present an ephemeral or anonymous identity. This is a set of characteristics that is too small or unstable to be useful for following them through time.

A person's [identities](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-identity) may often be distinct from whatever legal identity or identities they hold.

In some circumstances, the best way for a [user agent](https://infra.spec.whatwg.org/#user-agent) to uphold this principle is to prevent [recognition](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-recognize) (e.g. so that one [site](https://html.spec.whatwg.org/multipage/browsers.html#site) can't learn anything about its [user](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual) 's behavior on *another* site).

In other circumstances, the best way for a [user agent](https://infra.spec.whatwg.org/#user-agent) to uphold this principle is to *support* [recognition](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-recognize) (e.g. to help its [user](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual) prove to one [site](https://html.spec.whatwg.org/multipage/browsers.html#site) that they have a particular identity on another [site](https://html.spec.whatwg.org/multipage/browsers.html#site)).

Similarly, a [user agent](https://infra.spec.whatwg.org/#user-agent) can help its [user](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual) by preventing or supporting [recognition](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-recognize) across *repeat* visits to the *same* [site](https://html.spec.whatwg.org/multipage/browsers.html#site).

[User agents](https://infra.spec.whatwg.org/#user-agent) should do their best to distinguish [contexts](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-context) within a site and adjust their [partitions](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-partition) to prevent or support [recognition](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-recognize) across those intra-site [contexts](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-context) according to their [users](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual) ' wishes.

[Principle 2.2.1](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#restrict-data-to-necessary-or-aligned): [Sites](https://html.spec.whatwg.org/multipage/browsers.html#site), [user agents](https://infra.spec.whatwg.org/#user-agent), and other [actors](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-actor) should restrict the [data](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-data) they transfer to what's either necessary to achieve their users' goals or aligns with their users' wishes and interests.

websites user agents

[Principle 2.2.2](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#granular-api-data-requests): Web APIs should be designed to minimize the amount of data that sites need to request to carry out their users' goals. Web APIs should also provide granularity and user controls over [personal data](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-data) that is communicated to [sites](https://html.spec.whatwg.org/multipage/browsers.html#site).

API designers

Data minimization limits the risks of data being disclosed or misused. It also helps [user agents](https://infra.spec.whatwg.org/#user-agent) and other [actors](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-actor) more meaningfully explain the decisions their users need to make. For more information, see .

The principle of data minimization applies to all [personal data](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-data), even if it is not known to be identifying, sensitive, or otherwise harmful. See:.

[Sites](https://html.spec.whatwg.org/multipage/browsers.html#site) sometimes use data in ways that aren't needed for the user's primary goals. For example, they might bill advertisers, measure site performance, or tell developers about bugs. These are examples of [ancillary use](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-ancillary-use) of [data](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-data).

An ancillary use is any case where [data processing](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-process) provides direct benefit primarily to [actors](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-actor) other than the [person](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual) who is the subject of that [data](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-data). Ancillary uses of [personal data](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-data) might provide benefit to that [person](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual), but any benefit is indirect. For example, being able to charge advertisers provides benefit in that the site can sustain its business and remain available for future interactions, but this benefit is primarily realized by the site's owners.

[Sites](https://html.spec.whatwg.org/multipage/browsers.html#site) can get the data they want for [ancillary uses](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-ancillary-use) from a variety of places:

Non-ancillary APIs

Web APIs that were designed to support users' immediate goals, like [DOM events](https://dom.spec.whatwg.org/#interface-event) and [element position observers](https://www.w3.org/TR/cssom-view-1/#extension-to-the-element-interface).

Ancillary APIs computed from existing information

APIs that filter, summarize, or time-shift information available from [non-ancillary APIs](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-non-ancillary-apis), like the [Event Timing API](https://www.w3.org/TR/event-timing/) and [IntersectionObserver](https://www.w3.org/TR/intersection-observer/#introduction). See for restrictions on how existing non-ancillary APIs can be used to justify new ancillary APIs.

Ancillary APIs that provide new information

APIs that provide new information that's primarily useful to support the ancillary uses, like [element paint timing](https://w3c.github.io/element-timing/#sec-intro), [memory usage measurements](https://wicg.github.io/performance-measure-memory/#intro), and [deprecation reports](https://wicg.github.io/deprecation-reporting/#deprecation-report).

All of these sources of data can reveal [personal data](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-data) about a person's configuration, device, environment, or behavior that could be [sensitive](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#hl-sensitive-information) or be used as part of [browser fingerprinting](https://www.w3.org/TR/fingerprinting-guidance/#dfn-browser-fingerprinting) to [recognize people across contexts](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-cross-context-recognition). In order to uphold the principle of , [sites](https://html.spec.whatwg.org/multipage/browsers.html#site) and [user agents](https://infra.spec.whatwg.org/#user-agent) should seek to understand and respect people's goals and preferences about use of this data.

The task force does not have consensus about how [user agents](https://infra.spec.whatwg.org/#user-agent) should handle [ancillary APIs computed from existing information](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-ancillary-apis-computed-from-existing-information). Advocates of these APIs argue that they're hard to use to extract [personal data](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-data), they're more efficient than collecting the same information though [non-ancillary APIs](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-non-ancillary-apis), sites are less likely to adopt these APIs if a significant number of people turn them off, and that the act of turning them off can contribute to [browser fingerprinting](https://www.w3.org/TR/fingerprinting-guidance/#dfn-browser-fingerprinting). Opponents argue that if data's easier or cheaper to collect, more sites will collect it, and because there's still some risk, users should be able to turn off this group of APIs that probably won't directly break a site's functionality.

Because different users are likely to have different preferences:

[Principle 2.2.1.1](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#principle-identify-ancillary-apis): Specifications for [ancillary APIs computed from existing information](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-ancillary-apis-computed-from-existing-information) and [ancillary APIs that provide new information](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-ancillary-apis-that-provide-new-information) should identify them as such, so that [user agents](https://infra.spec.whatwg.org/#user-agent) can provide appropriate choices for their users.

API designers

[Principle 2.2.1.1.1](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#principle-ancillary-apis-with-new-information-shouldnt-reveal-personal-data): [Ancillary APIs that provide new information](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-ancillary-apis-that-provide-new-information) should not reveal any [personal data](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-data) that isn't already available through other APIs, without an indication that doing so aligns with the user's wishes and interests.

API designers

Most [ancillary uses](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-ancillary-use) don't require that a site learn any [personal data](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-data). For example, site performance measurements and ad billing involve averaging or summing data across many users such that any individual's contribution is obscured. Private aggregation techniques can often allow an API to serve its use case without exposing [personal data](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-data), by preventing any of the people involved from being identifiable.

Note

Some [ancillary uses](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-ancillary-use) don't require their data to be related to a person, but the useful aggregations across many people are difficult to design into a web API, or they might require new technologies to be invented. Some ways API designers can handle this situation include:

- Sometimes an API can [de-identify](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-de-identify) the data instead, but this is difficult if a web page has any input into the data that's collected.
- API designers can check carefully that the API doesn't reveal *new* [personal data](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-data), as described by . For example, the API might reveal that a person has a fast graphics card, that they click slowly, or that they use a certain proxy, but the fact that they click slowly is already [unavoidably](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#unavoidable-information-exposure) revealed by [DOM event](https://dom.spec.whatwg.org/#interface-event) timing.
- [User agents](https://infra.spec.whatwg.org/#user-agent) can ask their users' permission to enable this class of API. This risks increasing [privacy labor](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-labor), but as an example, a [user agent](https://infra.spec.whatwg.org/#user-agent) could use a first-run dialog to ask the user whether they generally support sharing this data, rather than asking for each use of the APIs.

If an API had to make one of these choices, and then something else about the API needs to change, designers should consider replacing the whole API with one that avoids exposing [personal data](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-data).

Some other [ancillary uses](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-ancillary-use) do require that a person be connected to their data. For example, a person might want to file a bug report that a website breaks on their particular computer, and be able to get follow-up communication from the developers while they fix the bug. This is an appropriate time to ask the person's permission.

[Principle 2.2.1.1.2](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#principle-disabling-ancillary-apis-with-new-information): User agents should provide a way to enable or disable [ancillary APIs that provide new information](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-ancillary-apis-that-provide-new-information) and should set the default according to their users' needs.

user agents

Some people might know something about their specific situation that makes the API designers' general decisions inappropriate for them. Because the information provided by [ancillary APIs that provide new information](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-ancillary-apis-that-provide-new-information) isn't available in any other way, [user agents](https://infra.spec.whatwg.org/#user-agent) should let people turn them off, despite the additional risk of [browser fingerprinting](https://www.w3.org/TR/fingerprinting-guidance/#dfn-browser-fingerprinting).

[Principle 2.3](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#deprecated-apis-dont-justify-information-leaks): New web APIs should guard users' information at least as well as existing APIs that are expected to stay in the web platform.

API designers user agents

The many APIs available to websites expose lots of data that can be combined into information about people, web servers, and other things.

User-controlled settings or permissions can guard access to data on the web. When designing a web API, use [access guards](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-access-guard) to ensure the API exposes information in [appropriate](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-appropriately) ways.

New APIs which add new ways of getting information must be [guarded](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-access-guard) at least as strongly as the existing ways.

Information that would be acceptable to expose under one set of [access guards](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-access-guard) might be unacceptable under another set. When an API designer intends to explain that their new API is acceptable because an existing acceptable API already exposes the same information, they must be careful to ensure that their new API is only available under a set of guards that are at least as strict. Without those guards, they need to make the argument from scratch, without relying on the existing API.

If existing APIs provide access to some information, but there is a plan to change those APIs to prevent that access, new APIs must not be added that provide that same information, unless they include additional [access guards](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-access-guard) that ensure access is [appropriate](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-appropriately).

For example, browsers are gradually removing the ability to join identities between different [partitions](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-partition). It is important that new APIs do not add features which re-enable [cross-context recognition](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-cross-context-recognition).

Some functionality of the web has historically been provided using features that can be used to undermine people's privacy. It is not yet possible to remove access to all of the information that it would be better not to expose.

New APIs that unavoidably provide access to this kind of information should not make that information easier to access compared to existing comparable web platform features.

Specifications describing these APIs should also:

- make it clear how to remove this access in the event that future web platform changes make it possible to remove other access to the same information.
- make it clear how any [user agent](https://infra.spec.whatwg.org/#user-agent) which blocks access to this kind of information (perhaps by breaking some experiences on the web that other browsers don't wish to break) can prevent the new API from exposing that information without breaking additional sites or user experiences.

[Principle 2.4](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#principle-sensitive): There is broad consensus that some categories of information such as credit card numbers or precise geolocation are sensitive, but system designers should not assume that other categories of information are therefore *not* sensitive. Whether information is considered sensitive can vary depending on a [person](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual) 's circumstances and the [context](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-context) of an interaction, and it can change over time.

websites user agents API designers

Many pieces of information about someone could cause privacy harms if disclosed. For example:

- Their location.
- Language preferences.
- Any [identifiers](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-identifier) associated with them.
- Video or audio from their camera or microphone.
- The content of certain files on their filesystem.
- Financial data.
- Contacts.
- Calendar entries.
- [Whether they are using assistive technology.](https://w3ctag.github.io/design-principles/#do-not-expose-use-of-assistive-tech)

A particular piece of information may have different sensitivity for different people. People can become vulnerable if sensitive information about them is, or is likely to be, exposed; see .

[Principle 2.5](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#respect-data-rights): [People](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual) have certain rights over [data](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-data) that is about themselves, and these rights should be facilitated by their [user agent](https://infra.spec.whatwg.org/#user-agent) and the [actors](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-actor) that are [processing](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-process) their [data](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-data).

websites user agents API designers

While data rights alone are not sufficient to satisfy all [privacy](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-privacy) principles for the web, they do support self-determination and help improve accountability. Such rights include:

- The right to access [data](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-data) about oneself.

This right includes both being able to review what information has been collected or inferred about oneself and being able to discover what [actors](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-actor) have collected information about oneself. As a result, databases containing information about [people](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual) cannot be kept secret, and data collected about people needs to be meaningfully discoverable by those people.

- The right to erase [data](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-data) about oneself.

A [person](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual) has a right to erase information about themselves whether or not they are terminating use of a service altogether, though what [data](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-data) can be erased may differ between those two cases. On the web, a [person](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual) may wish to erase data on their device, on a server, or both, and the data's location may not always be clear to the person.

- The right to port [data](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-data), including data one has stored with another [actor](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-actor), so it can easily be reused or transferred elsewhere.

Portability is needed to support a [person](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual) 's ability to make choices about services with different data practices. Standards for interoperability are essential for effective re-use. Porting user data involves security and privacy risks described in \[\].

- The right to correct [data](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-data) about oneself, to ensure that one's [identity](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-identity) is properly reflected in a system.
- The right to be free from automated decision-making based on [data](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-data) about oneself.

For some kinds of decision-making with substantial consequences, there is a privacy interest in being able to exclude oneself from automated profiling. For example, some services may alter the price of products (price discrimination) or offers for credit or insurance based on [data](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-data) collected about a person. Those alterations may be consequential (financially, say) and objectionable to people who believe those decisions based on data about them are inaccurate or unjust. As another example, some services may draw inferences about a user's identity, humanity, or presence based on facial recognition algorithms run on camera data. Because facial recognition algorithms and training sets are fallible and may exhibit certain biases, people may not wish to submit to decisions based on that kind of automated recognition.

- The right to object, withdraw consent, and restrict use of data about oneself.

[People](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual) may change their decisions about [consent](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-opt-in) or may object to subsequent uses of data about themselves. Data rights mean that a person needs to have ongoing control, not just a choice at the time of collection.

The OECD Privacy Principles \[\], \[\], and the \[\], among other places, describe many of the rights [people](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual) have as data subjects. These participatory rights by people over data about themselves are inherent to [autonomy](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-autonomous).

[Principle 2.6](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#de-identify-data): Whenever possible, processors should work with [data](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-data) that has been [de-identified](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-de-identify).

websites user agents API designers

Data is de-identified when there exists a high level of confidence that no [person](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual) described by the data can be identified, directly or indirectly (e.g. via association with an [identifier](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-identifier), user agent, or device), by that data alone or in combination with other available information. Many local regulations define additional requirements for data to be considered [de-identified](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-de-identify), but those requirements should not be treated as a maximum degree of privacy protection. Note that further considerations relating to groups are covered in the [Collective Issues in Privacy](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#collective) section.

We talk of controlled de-identified data when:

1. The *state* of the data is such that the information that could be used to re-identify an individual has been removed or altered, and
2. there is a *process* in place to prevent attempts to re-identify [people](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual) and the inadvertent release of the de-identified data. (\[\])

Different situations involving [controlled de-identified data](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-controlled-de-identified-data) will require different controls. For instance, if the [controlled de-identified data](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-controlled-de-identified-data) is *only* being processed by one [actor](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-actor), typical controls include making sure that the [identifiers](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-identifier) used in the data are unique to that dataset, that any person (e.g. an employee of the [actor](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-actor)) with access to the [data](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-data) is barred (e.g. based on legal terms) from sharing the [data](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-data) further, and that technical measures exist to prevent re-identification or the joining of different data sets involving this [data](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-data).

In general, the goal is to ensure that [controlled de-identified data](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-controlled-de-identified-data) is used in a manner that provides a viable degree of oversight and accountability such that technical and procedural means to guarantee the maintenance of pseudonymity are preserved.

This is more difficult when the [controlled de-identified data](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-controlled-de-identified-data) is shared between several [actors](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-actor). In such cases, good examples of typical controls that are representative of best practices would include making sure that:

- the [identifiers](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-identifier) used in the [data](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-data) are under the direct and exclusive control of the [first party](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-first-party-0) (the [actor](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-actor) a person is directly interacting with) who is prevented by strict controls from matching the identifiers with the data;
- when these [identifiers](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-identifier) are shared with a [third party](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-third-parties), they are made unique to that [third party](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-third-parties) such that if they are shared with more than one [third party](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-third-parties) these cannot then match them up with one another;
- there is a strong level of confidence that no [third party](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-third-parties) can match the [data](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-data) with any data other than that obtained through interactions with the [first party](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-first-party-0);
- any [third party](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-third-parties) receiving such [data](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-data) is barred (e.g. based on legal terms) from sharing it further;
- technical measures exist to prevent re-identification or the joining of different data sets involving this [data](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-data); and
- there exist contractual terms between the [first party](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-first-party-0) and [third party](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-third-parties) describing the limited [purpose](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-purpose) for which the data is being shared.

Note that [controlled de-identified data](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-controlled-de-identified-data), on its own, is not sufficient to make [data processing](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-process) [appropriate](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-appropriately).

[Principle 2.7](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#principle-collective-privacy): Groups and institutions should support autonomy by making decisions collectively to either prevent or enable data sharing, and to set defaults for data processing rules.

websites user agents

Privacy principles are often defined in terms of extending rights to individuals. However, there are cases in which deciding which principles apply is best done collectively, on behalf of a group. Collective decision-making should be considered:

- When information is about membership in a group or about a group's behaviour. As Brent Mittelstadt explains, “ *Algorithmically grouped individuals have a collective interest in the creation of information about the group, and actions taken on its behalf.*” (\[\]) As discusses, an individual's permission isn't enough to support the [autonomy](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-autonomous) of other members of the group.
- When individuals can't realistically be expected to make informed decisions. This can happen when [data processing](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-process) is complex or requests to process data happen very frequently.
- When individuals have systematically less power than the organizations asking them to agree to [data processing](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-process) (\[\]).
- When the [data processing](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-process) is unjust at a societal level even if an individual remains anonymous (\[\]).

Different forms of collective decision-making are legitimate depending on what data is being processed. These forms might be governmental bodies at various administrative levels, standards organisations, worker bargaining units, or civil society fora. Even though collective decision-making can be better than offloading [privacy labor](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-labor) to [individuals](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual), it is not a panacea. Decision-making bodies need to be designed carefully, for example using the [Institutional Analysis and Development framework](https://press.princeton.edu/books/paperback/9780691122380/understanding-institutional-diversity#).

[Principle 2.8](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#principle-owned-devices-disclose-surveillance): [User agents](https://infra.spec.whatwg.org/#user-agent) should not tell an [administrator](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-administrator) about user behavior except when that disclosure is necessary to enforce reasonable constraints on use of the device or software. Even when a disclosure is reasonable, [user agents](https://infra.spec.whatwg.org/#user-agent) must ensure their users know about this surveillance.

user agents

Note

See for more detail on how this principle applies to vulnerable people with [guardians](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-guardian).

Computing devices have administrators, who have privileged access to the devices in order to install and configure the programs that run on them. The owner of a device can authorize an [administrator](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-administrator) to administer the whole device. Some [user agent](https://infra.spec.whatwg.org/#user-agent) [implementations](https://infra.spec.whatwg.org/#implementation) can also assign an [administrator](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-administrator) to manage a particular [user agent](https://infra.spec.whatwg.org/#user-agent) based on the account that's logged into it.

Sometimes the [person](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual) using a device doesn't own the device or have [administrator](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-administrator) access to it (e.g. an employer providing a device to an employee; a friend loaning a device to their guest; or a parent providing a device to their young child). Other times, the owner and primary user of a device might not be the only person with [administrator](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-administrator) access.

These relationships can involve power imbalances. A child may have difficulty accessing any computing devices other than the ones their parent provides. A victim of [abuse](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-abuse) might not be able to prevent their partner from having [administrator](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-administrator) access to their devices. An employee might have to agree to use their employer's devices in order to keep their job.

While a [device owner](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-device-owner) has an interest and sometimes a responsibility to make sure their device is used in the ways they intended, the [person](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual) *using* the device still has a right to privacy while using it. This principle enforces this right to privacy in two ways:

1. [User agent](https://infra.spec.whatwg.org/#user-agent) developers need to consider whether requests from [device owners](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-device-owner) and [administrators](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-administrator) are reasonable, and refuse to implement unreasonable requests, even if that means fewer sales. Owner/administrator needs do not supersede user needs in the [priority of constituencies](https://www.w3.org/TR/design-principles/#priority-of-constituencies).
2. Even when information disclosure is reasonable, the [person](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual) whose data is being disclosed needs to know about it so that they can avoid doing things that would lead to unwanted consequences.

Some [administrator](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-administrator) requests might be reasonable for some sorts of users, like employees or children, but not be reasonable for other sorts, like friends or intimate partners. The [user agent](https://infra.spec.whatwg.org/#user-agent) should explain what the [administrator](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-administrator) is going to learn in a way that helps different users to react appropriately.

[Principle 2.9.1](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#abuse-reporting): Systems that allow for communicating on the web must provide an effective capability to report [abuse](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-abuse).

websites API designers

[Principle 2.9.2](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#abuse-protection): [User agents](https://infra.spec.whatwg.org/#user-agent) and [sites](https://html.spec.whatwg.org/multipage/browsers.html#site) must take steps to protect their users from abusive behaviour, and [abuse](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-abuse) mitigation must be considered when designing web platform features.

websites user agents API designers

Digital abuse is the mistreatment of a person through digital means. Online harassment is the "pervasive or severe targeting of an individual or group online through harmful behavior" \[\] and constitutes a form of [abuse](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-abuse). Harassment is a prevalent problem on the web, particularly via social media. While harassment may affect any person using the web, it may be more severe and its consequences more impactful for LGBTQ people, women, people in racial or ethnic minorities, people with disabilities, [vulnerable people](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-vulnerable) and other marginalized groups.

[Harassment](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-harassment) is both a violation of privacy itself and can be enabled or exacerbated by other violations of privacy.

Harassment may include: sending [unwanted information](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-unwanted-information); directing others to contact or bother a person ("dogpiling"); disclosing [sensitive information](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#sensitive-information) about a person; posting false information about a person; impersonating a person; insults; threats; and hateful or demeaning speech.

Disclosure of identifying or contact information (including "doxxing") can often be used to cause additional attackers to send persistent [unwanted information](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-unwanted-information) that amounts to harassment. Disclosure of location information can be used to intrude on a person's physical safety or space.

Reporting mechanisms are mitigations, but may not prevent harassment, particularly in cases where hosts, moderators, or other intermediaries are supportive of or complicit in the [abuse](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-abuse).

Effective reporting is likely to require:

- standardized mechanisms to identify [abuse](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-abuse) reporting contacts;
- sites and user agents to provide visible and usable ways to report [abuse](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-abuse);
- identifiers to refer to senders and content;
- the ability to provide context and explanation of harms;
- people responsible for promptly responding to reports;
- tools for pooling mitigation information (see ).

Note

Unwanted information covers a broad range of unsolicited communication, from messages that are typically harmless individually but that become a nuisance in aggregate (spam) to the sending of explicit, graphic, or violent images.

System designers should take steps to make the sending of unwanted information more difficult or more costly, and to make the senders more accountable.

[Principle 2.10.1](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#purpose-specification): When accessing personal data or requesting permission, [sites](https://html.spec.whatwg.org/multipage/browsers.html#site) and other [actors](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-actor) should specify the [purpose](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-purpose) for which the data will be used.

websites user agents

[Principle 2.10.2](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#no-secondary-use): [Actors](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-actor) should not use personal data for purposes other than those specified. (Other uses are often called secondary uses \[\].)

websites user agents

Features that are designed-for-purpose facilitate these principles by providing functionality that is only or primarily useful for a particular purpose. Designed-for-purpose features make it easier to explain the purpose to people, and may also limit the feasible secondary uses of data. When building a designed-for-purpose feature,[consider tradeoffs between high and low-level APIs](https://www.w3.org/TR/design-principles/#high-level-low-level).

[Controlled de-identified data](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-controlled-de-identified-data) may be used for additional purposes in ways that are compatible with the specified purpose.

### 2.11 Transparency

[Principle 2.11.1](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#transparency-when-requested): When accessing data or requesting permission, [sites](https://html.spec.whatwg.org/multipage/browsers.html#site) (and other [actors](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-actor)) should provide [people](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual) with relevant explanatory information about the use of data, and [user agents](https://infra.spec.whatwg.org/#user-agent) should help present and consume that information.

websites user agents

Transparency is a necessary, but insufficient, condition for [consent](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-opt-in). Relevant explanatory information includes who is accessing data, what data is accessed (including the potential inferences or combinations of such data) and how data is used. For transparency to be meaningful to people, explanatory information must be provided in the relevant [context](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-context).

Note

In designing new web features that may involve permissions, consider whether a permission is needed and how to make that permission meaningful \[\].

Past workshops have explored the needs for better permissions on the web:

- [2022 W3C Workshop on Permissions](https://www.w3.org/Privacy/permissions-ws-2022/report)
- [2018 W3C Workshop on Permissions and User Consent](https://www.w3.org/Privacy/permissions-ws-2018/report.html)
- [2014 Next steps on trust and permissions for web applications](https://www.w3.org/2014/07/permissions/minutes.html)

Machine-readable presentation of privacy-relevant practices is necessary for [user agents](https://infra.spec.whatwg.org/#user-agent) to be able to help [people](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual) make general decisions, rather than relying falsely on the idea that [people](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual) can or want to read documentation before every visit to a web site. Machine-readable presentation also facilitates [collective governance](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#collective) by making it more feasible for researchers and regulators to discover, document, and analyze data collection and processing to identify cases in which it may be harmful.

Easily accessible, plain language presentation of privacy-relevant practices is necessary for [people](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual) to be able to make informed decisions in specific cases when they choose to do so.[Sites](https://html.spec.whatwg.org/multipage/browsers.html#site), [user agents](https://infra.spec.whatwg.org/#user-agent), and other [actors](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-actor) all may need to present privacy-relevant practices to [people](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual) in accessible forms.

[Principle 2.11.3](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#transparency-distinguishable): Mechanisms that can be used for [recognizing](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-recognize) [people](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual) should be designed so that their operation is visible and distinguishable, to [user agents](https://infra.spec.whatwg.org/#user-agent), researchers, and regulators.

websites API designers

Non-transparent methods of [recognition](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-recognize) are harmful in part because they are not visible to the user, which undermines user control \[\]. Designing features that minimize data and make requests for data explicit can enable detectability, a kind of transparency that is an important mitigation for [browser fingerprinting](https://www.w3.org/TR/fingerprinting-guidance/#dfn-browser-fingerprinting).

Notifications and other interruptive UI can be a powerful way to capture attention. Depending on the operating system in use, a notification can appear outside of the browser context (for example, in a general notifications tray) or even cause a device to buzz or play an alert tone. Like all powerful features, notifications can be misused and can become an annoyance or even used to manipulate behaviour and thus reduce [autonomy](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-autonomous).

[Principle 2.13.1](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#principle-notifications-control): A [user agent](https://infra.spec.whatwg.org/#user-agent) should help users control notifications and other interruptive UI that can be used to manipulate behavior.

[User agents](https://infra.spec.whatwg.org/#user-agent) should provide UI that allows their users to audit which web [sites](https://html.spec.whatwg.org/multipage/browsers.html#site) have been granted permission to display alerts and to revoke these permissions. [User agents](https://infra.spec.whatwg.org/#user-agent) should also apply some quality metric to the initial request for permissions to receive notifications (for example, disallowing sites from requesting permission on first visit).

user agents

[Principle 2.13.2](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#principle-notifications-context): Web [sites](https://html.spec.whatwg.org/multipage/browsers.html#site) should use notifications only for information that their users have specifically requested.

Web [sites](https://html.spec.whatwg.org/multipage/browsers.html#site) should tell their users what specific kind of information people can expect to receive, and how notifications can be turned off, when requesting permission to send interruptive notifications. Web [sites](https://html.spec.whatwg.org/multipage/browsers.html#site) should not request permission to send notifications when the user is unlikely to have sufficient knowledge (e.g. information about what kinds of notifications they are signing up for) to make an informed response. If it's unlikely that such information could have been provided then the [user agent](https://infra.spec.whatwg.org/#user-agent) should apply mitigations (for example, warning about potential malicious use of the notifications API). Permissions should be requested in context.

websites

### 2.14 Non-Retaliation

[Principle 2.14](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#principle-do-not-retaliate): [Actors](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-actor) must not retaliate against [people](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual) who protect their [data](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-data) against non-essential [processing](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-process) or exercise rights over their [data](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-data).

websites user agents

People should be free to limit the amount of private information they share, to request that an [actor](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-actor) limit the uses of data already shared, or that [data](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-data) be deleted. When a [person](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual) chooses to deny or withdraw their permission to use their [data](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-data), retaliation is inappropriate.

It is not retaliation to terminate a service when [data](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-data) that is essential to the operation of a service is withheld. However, it might be retaliation if withholding [data](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-data) results in actions unrelated to the use of that [data](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-data). Examples of retaliatory behavior include:

- making the process of withdrawing consent more onerous than granting it;
- using threats, badgering, or trickery (\[\]) to encourage people to reconsider their choice; and,
- denying access to services that do not depend on use of the data.

[Principle 2.15.1](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#principle-support-choosing-info): [User agents](https://infra.spec.whatwg.org/#user-agent) should support [people](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual) in choosing which information they provide to [actors](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-actor) that request it, up to and including allowing users to provide arbitrary information.

user agents

[Actors](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-actor) can invest time and energy into automating ways of gathering [data](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-data) from [people](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual) and can design their products in ways that make it a lot easier for [people](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual) to disclose information than not, whereas [people](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual) typically have to manually wade through options, repeated prompts, and [deceptive patterns](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-dark-pattern). In many cases, the absence of data — when a [person](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual) refuses to provide some information — can also be identifying or revealing. Additionally, APIs can be defined or implemented in rigid ways that can prevent people from accessing useful functionality. For example, I might want to look for restaurants in a city I will be visiting this weekend, but if my geolocation is forcefully set to match my GPS, a restaurant-finding site might only allow searches in my current location. In other cases, sites do not abide by data minimisation principles and request more information than they require. This principle supports [people](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual) in minimising their own data.

[User agents](https://infra.spec.whatwg.org/#user-agent) should make it simple for [people](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual) to [present the identity they wish to](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#principle-identity-per-context) and to provide information about themselves or their devices in ways that they control. This helps [people](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual) to live in obscurity (\[\], \[\]), including by obfuscating information about themselves (\[\]).

[Principle 2.15.2](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#principle-no-facts-or-promises): APIs should be designed such that data returned through an API does not assert a fact or make a promise on the user's behalf about the user or their environment.

API designers

Instead, the API could indicate a [person](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual) 's preference, a [person](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual) 's chosen identity, a [person](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual) 's query or interest, or a [person](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual) 's selected communication style.

For example, a [user agent](https://infra.spec.whatwg.org/#user-agent) might support this principle by:

- Generating domain-specific email addresses or other directed identifiers so that [people](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual) can log into the site without becoming recognisable across contexts.
- Offering the option to generate geolocation and accelerometry data with parameters specified by the [user](https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/#dfn-individual).
- Uploading a stored video stream in response to a camera prompt.
- Automatically granting or denying permission prompts based on user configuration.

Sites should include deception in their threat modeling and not assume that web platform APIs provide any guarantees of consistency, currency, or correctness about the user. People often have control of the devices and software they use to interact with web sites. In response to site requests, people may arbitrarily modify or select the information they provide for a variety of reasons, including both malice and self-protection.

In any rare instances when an API must be defined as returning true current values, users may still configure their agents to respond with other information, for reasons including testing, auditing or mitigating forms of data collection, including [browser fingerprinting](https://www.w3.org/TR/fingerprinting-guidance/#dfn-browser-fingerprinting).

