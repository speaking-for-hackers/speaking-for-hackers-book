# Speaking for Hackers

## About

Years ago, I started to write a book about giving good conference talks. The title was Speaking for Hackers.

Turns out I ran out of steam and didn't finish, but I think what's here is worth reading.

The book is split into three sections: before, during, and after your talk. There's also some raw notes with ideas that never made it into polished prose.

Many thanks to my employer [thoughtbot](https://thoughtbot.com) for sending me to the conferences where these ideas were developed.

Feel free to copy and share this, but please don't use it for anything commercial without my permission.

## View

Visit: [https://sfhbook.netlify.app](https://sfhbook.netlify.app/)

## Development Instructions

This site is built with [NextJS](https://nextjs.org/) as a static site with markdown (mdx) for content.

### Local Set-up

To get the site set-up locally:

1. Clone this repo
2. Run `yarn` to install dependencies
3. Run `yarn dev` to spin the site up locally
4. Preview at: `http://localhost:3000`

### Structure

A quick look at the top-level files and directories you'll find.

```
.
├── components
├── pages
   └── post
└── posts
```

`/components/**`: This directory will contain generic components needed to build out the UI, keep it group by on a block level.

`/pages/index.js`: This is the landing page of the site.

`/pages/post/[slug].js`: This is the dynamic route that builds out the single post view. It does not contain specific content, but rather dictates style and structure.

`/posts`: This is where our Markdown content lives. Add new pages or edit the existing pages, they would automatically be picked up in the respective chapter.

## Deploy

The site is hosted on Netlify. When you push to the remote on master it will trigger a rebuild of the main site, or any pull requests against master would generate a PR preview deploy as well.
