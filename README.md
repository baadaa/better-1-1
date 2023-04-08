# Better One-on-One

![OG image](https://res.cloudinary.com/dm4tymaa3/image/upload/v1680876353/og-image-better_falja6.png)

[The Unstuck Box](https://unstuckbox.com/products/the-unstuck-box-one-to-ones) has an amazing product of great 1:1 discussion prompts that any manager could benefit from. But it wasn't always convenient for me to pull up a 100-card deck each time, and I wanted a straightforward web interface. This little app is just that. `https://better.bald.design` deployed via Netlify.

## Disclaimer

While I purchase the card deck and coded the web interface for personal usage, "The Unstuck Box: One to Ones" is a proprietary product of The Unstuck Box, I have no copyright of its content. This app is for personal learning and private use only, and never meant to persue profit or other copyright infringement.

## Tooling

It's built in React/Next.js with TypeScript and simple browser APIs of `localStorage`.

Use a typical Next.js commands for development/build

```bash
# start a local dev server
$ npm run dev

# build
$ npm run build
```

## Features

- Randomly present 3 topics every 24 hours, unless user manually shuffles the selection
- Browse the full question set and filter by category
- Support light and dark mode
- Local data persistence via `localStorage` for color theme and 3-picks of the day
