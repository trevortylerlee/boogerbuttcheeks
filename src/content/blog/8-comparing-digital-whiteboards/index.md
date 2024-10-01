---
title: Comparing Digital Whiteboards
description: Comparing various digital whiteboards to find the one that suits my scrapbooking needs best. I take a look at Figma/Figjam, Canva, TLDraw, and Excalidraw.
publicationDate: 2024-10-01T05:11:25.932Z
---

I've been comparing the various digital whiteboards the past while trying to find the best solution for my [brain dumping](/brain-dump) needs.

What I'm looking for:
- embeddable as readonly
- embed auto syncs
- infinite canvas
- light and dark mode
- mobile friendly
- "smart" starting view
	- when you have an infinite canvas, what part of the canvas is shown when the page first loads?
- zoom and pan
- gif support

I tried the following:
- Figma/Figjam (interchangeable)
- TLDraw
- Canva
- Excalidraw

Obsidian's canvas actually works pretty well but that's not currently embeddable or publishable. They're also making [JSON Canvas](https://jsoncanvas.org/), an "open file format for infinite canvas data". There's also the [OCWG](https://www.canvasprotocol.org): Working Group for Interoperable Infinite Canvas Tools.

Here are my findings:

|  | Figma | TLDraw | Canva | Excalidraw |
|:--|:--|:--|:--|:--|
| embeddable as readonly | ✓ | ✓ | ✓ | ! |
| embed auto syncs | ✓ | ! | ✓ | ✕ |
| infinite canvas | ✓ | ✓ | ✓ | ✓ |
| light/dark mode | ! | ✓ | ✕ | ✓ |
| mobile friendly | ✓ | ✓ | ! | ✓ |
| smart starting view | ✓ | ✕ | ! | ? |
| zoom and pan | ✓ | ✓ | ✕ | ✓ |
| gif support | ! | ✓ | ✓ | ! |

---

## Excalidraw

**Pros**
- open source
- customizable canvas backgrounds
- [public library](https://libraries.excalidraw.com/) support

**Cons**
- couldn't get gifs working!
- can't set embed to readonly
- no embed auto sync

## Canva
**Pros**
- easy embed (copy & paste, took two seconds)
- gifs work
- auto syncs (takes a few seconds)

**Neutral**
- the smart start view autoscales so everything is in the viewport, but there's no zooming or panning for the embed. if your workarea area gets large the embed will be hard to see.

**Cons**
- no pan or zoom support for the embed
- Canva pushes paid features hard
- light mode only

## TLDraw
**Pros**
- gifs work
- light and dark mode
- grid background
- open source
- readonly mode
- option to hide ui

**Cons**
- must use react package to use readonly and hide ui features
- no smart starting view
- no auto sync
- export is a bit wonky
- must sync manually

Note: the export as JSON feature isn't fully functioning. To export JSON that you can then import, run `console.log(JSON.stringify(editor.getSnapshot(), null, 2))` in the browser console.

## Figma/Figjam
**Pros**
- easy embed (copy & paste, took two seconds)
- access to many fonts
- smart starting view—content is always centered
- works well on mobile
- auto sync (in real time)
- i like the highlighter tool in figjam

**Cons**
- light mode only
- gif support sucks

## Conclusion
I'm sticking with Figma.
