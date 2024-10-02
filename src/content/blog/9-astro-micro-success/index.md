---
title: Astro Micro's Success
description: Astro Micro is my most successful project to date. Let's examine why it did well and what I can learn from it moving forward.
publicationDate: 2024-10-02T05:27:08.040Z
image: ./image.jpg
imageAlt: Astro Micro's Success
---

[Astro Micro](https://astro-micro.vercel.app) is an open source theme I made for [Astro](https://astro.build/themes/). It's a fork of [Mark Horn's](https://github.com/markhorn-dev) theme [Astro Nano](https://astro.build/themes/details/astronano/). It adds features like search with [Pagefind](https://pagefind.app), comments with [Giscus](https://giscus.app), and more.

For a full list of changes, see this [blog post](https://astro-micro.vercel.app/blog/00-micro-changelog).

At this time Astro Micro is at 162 stars [on GitHub](https://github.com/trevortylerlee/astro-micro) and is by far my most successful side project. Recently someone liked it so much they made a [Next.js version](https://github.com/trevortylerlee/astro-micro/issues/61) of it! Here are a few reasons why I think Micro did well, and also some takeaways from the project as a whole.

## Forking Nano

Reading through Nano's code gave me many ideas and tricks that I've incorporated (copied!) in to my recent projects. For example, I now use a `BaseHead` component that I slot into my `header` tags. That's how the [Barebones](https://barebones.superwebthemes.com) theme uses [dynamic Open Graph images](https://github.com/superwebthemes/barebones/blob/main/src/components/SeoPost.astro) with fallbacks.

Mark's minimal, zero framework philosophy is something I tried to emulate in Micro. That's why I chose to use Pagefind and Giscus -- two lightweight and modular packages that use vanilla JavaScript.

## Small Changes Add Up

When you look at the added features one by one, each change isn't particularly meaningful... but together they make the website that much more fun to use.

Some of my favourite changes:
- Enhanced focus styles
- Indicating the active theme
- Separate syntax highlighting themes for light and dark modes
- Copy buttons on code blocks
- Geist Sans and Geist Mono

All of these add up to make a more cohesive experience for the user.

## Book Cover Judging

Astro Micro has a sick thumbnail and that helped to standout in the [Astro theme store](https://astro.build/themes). I also took  the time to create informative, pleasing descriptions and README's. It makes the product appear more professional and trustworthy.

Fun fact: on the thumbnail "Tags" are listed as a feature. I never ended up implementing them. A little misleading, I know...

## Open Source & Contributions

The open source community helped make Micro **so much better** by [filing new issues](https://github.com/trevortylerlee/astro-micro/issues), [opening pull requests](https://github.com/trevortylerlee/astro-micro/pulls), and providing feedback. It's really humbling to see strangers get together and collaborate to make the project better for everyone.
