# Issuer
This is an internal tool used by awesome folks at [Neopix](http://weareneopix.com). It helps them write issues _(not personal)_ for products they're working on. If you'd like, feel free to fork the [repository](https://github.com/weareneopix/issuer) and use it.

## What's the idea behind this?

The idea is for Neopix team members to use this tool to report issues with some technical information. This simple tool will provide enough information for the development team to debug, diagnose and potentially fix the reported issue.

Without the technical information about the location of the issue and the kind of platform it occurred on, it can be hard for a developer to reproduce the issue.

## How does it work?

As you type on the left side of the app, the right side gets filled with information. It will be written in **Markdown**, therefore it can be used everywhere - Github, Trello or Notion.

## Technologies

Well this is as unique as Neopix, since it's blazing fast there.

This app is built with [Svelte](https://svelte.technology/), a blazing fast, rock solid, magical disappearing UI framework. It is so fast that its actually not a framework, its **vanilla JS**.

We actually use [Sapper](https://sapper.svelte.technology/) to build this whole app. In short, it helped us deliver the most modern experience with Svelte. Here are some cool features Sapper brings to this mini app:

*   Server-renderer
*   Offline mode
*   Code-splitting
*   Routing

Thank you for reading,  
Neopix.