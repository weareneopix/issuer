# Issuer
This is an internal tool used by awesome people at [Neopix](http://weareneopix.com). It helps them write issues _(not personal)_ for products they work on. If you like feel free to fork the repository and use it.

## What is the idea?

The idea is for Neopix team members to use this tool to report issues with some technical information. This simple tool will provide enough information for development tim to debug, diagnose and **potentially** fix the reported issue.

Without technical information about where and on what platform the issue happened it can be hard for a developer to reproduce the actual issue.

## How it works?

When you type on the left side of the app, right side will get filled with information. It will be written in **Markdown**. Therefore it can be used everywhere Github, Trello or Notion.

## Technologies

Well this is quite unique as is Neopix, furthermore it is blazing fast there is a special reason for this.

This app is built with [Svelte](https://svelte.technology/), a blazing fast, rock solid, magical disappearing UI framework. It is so fast that its actually not a framework, its **vanilla JS**.

We actually use [Sapper](https://sapper.svelte.technology/) to build this whole app. In short it helps us deliver the most modern experience with Svelte. Here are some cool feature Sapper brings to this mini app.

*   Server-renderer
*   Offline mode
*   Code-splitting
*   Routing

Thank you for reading,  
Neopix.