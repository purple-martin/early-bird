# Purple Martin

**Purple Martin** is an adult content streaming site focused on safety, simplicity, and the best UI/UX of any content streaming platform.
<br>
<details open>
<summary>Table of Contents</summary>

- [Production Deployment](#production-deployment)
- [Project structure](#project-structure)
- [Commands](#commands)

</details>

<br>

## Production Deployment

📌 [https://purplemartin.app/](https://purplemartin.app/)

<br>

## Project Structure

```
/
├── public/                      !static assets that require no transformations.
│   ├── _headers
│   └── robots.txt
├── src/
│   ├── assets/                  !assets that will be transformed in build.
│   │   ├── favicons/
│   │   ├── images/
│   │   └── styles/
│   │       └── tailwind.css
│   ├── components/
│   │   ├── blog/
│   │   ├── common/
│   │   ├── ui/
│   │   ├── widgets/
│   │   │   ├── Header.astro
│   │   │   └── ...
│   │   ├── CustomStyles.astro
│   │   ├── Favicons.astro
│   │   └── Brand.astro
│   ├── content/
│   │   ├── post/
│   │   │   ├── post-slug-1.md
│   │   │   ├── post-slug-2.mdx
│   │   │   └── ...
│   │   └-- config.ts
│   ├── layouts/
│   │   ├── Layout.astro
│   │   ├── MarkdownLayout.astro
│   │   └── PageLayout.astro
│   ├── pages/
│   │   ├── [...blog]/
│   │   │   ├── [category]/
│   │   │   ├── [tag]/
│   │   │   ├── [...page].astro
│   │   │   └── index.astro
│   │   ├── index.astro
│   │   ├── 404.astro
│   │   ├-- rss.xml.ts
│   │   └── ...
│   ├── utils/
│   ├── config.yaml
│   └── navigation.js
├── package.json
├── astro.config.mjs
└── ...
```
<br>

## Commands

bun install            
bun build
bun start           

