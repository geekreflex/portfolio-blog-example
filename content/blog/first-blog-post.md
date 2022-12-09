---
path: first-blog-post
date: 2022-11-26T14:50:04.979Z
title: First Blog Post
description: My first blog post
---

## First Section

Before we talk about component design principles, I want to say a few words about style guides. This isn’t a popular opinion but someone needs to say it!

In the JavaScript community, there are a few strict opinionated style guides enforced by a linter. My personal observation is that they tend to create more friction than they’re worth. I can’t count how many times somebody showed me some absolutely valid code and said “React complains about this”, but it was their lint config complaining! This leads to three issues:

## Second Section

Before we talk about component design principles, I want to say a few words about style guides. This isn’t a popular opinion but someone needs to say it!

In the JavaScript community, there are a few strict opinionated style guides enforced by a linter. My personal observation is that they tend to create more friction than they’re worth. I can’t count how many times somebody showed me some absolutely valid code and said “React complains about this”, but it was their lint config complaining! This leads to three issues:

> This is a blockquote

```js
"use strict"

const babelP = import("./lib/index.js")

const functionNames = [
  "createConfigItem",
  "loadPartialConfig",
  "loadOptions",
  "transform",
  "transformFile",
  "transformFromAst",
  "parse",
]

for (const name of functionNames) {
  exports[`${name}Sync`] = function () {
    throw new Error(
      `"${name}Sync" is not supported when loading @babel/core using require()`
    )
  }
  exports[name] = function (...args) {
    babelP.then((babel) => {
      babel[name](...args)
    })
  }
  exports[`${name}Async`] = function (...args) {
    return babelP.then((babel) => babel[`${name}Async`](...args))
  }
}
```
