# Orion on 11ty

This is the 6th version of the Orion Ensemble web site, this time rebuilt as an [Eleventy](https://www.11ty.dev/docs/config/) static site.

## Commands

- `npm install` installs dependencies.
- `npm run build` deletes `_site/` and rebuilds the full site.
- `npm run start` runs Eleventy's local dev server.

The project expects Node 22 or newer.

## How the Site Is Assembled

Eleventy uses `src/` as its input directory and `_site/` as its output directory. That is configured in [eleventy.config.js](eleventy.config.js).

All pages under `src/` inherit the shared layout from [src/src.11tydata.json](src/src.11tydata.json), which points at [src/_includes/layout.njk](src/_includes/layout.njk).

Upon pushing site changes to GitHub, the GitHub Pages workflow runs automatically on the `main` branch. README-only changes are ignored so documentation edits by themselves do not republish the site. When the workflow does run, it installs dependencies with `npm ci`, runs the normal `npm run build` command, and uploads the generated `_site/` directory as the Pages artifact for deployment. The published site comes from a fresh CI build rather than from manually editing or committing files inside `_site/`.

Some small images are part of the repo, but the rest of them are hosted in [Cloudinary](https://cloudinary.com/home).

## Page Types

### Standard content pages

Pages like [src/about.md](src/about.md), [src/contact.md](src/contact.md), and [src/donate.md](src/donate.md) are mostly Markdown with occasional inline HTML for things like images or the PayPal form.

### Homepage

The homepage is [src/index.md](src/index.md). It uses `templateEngineOverride: njk` so Eleventy treats the body as Nunjucks/HTML instead of wrapping custom elements in Markdown output.

The homepage several web components for the slide show, the music player and calendar view. These components live in [src/scripts/slide-show.js](src/scripts/).

## Shared Data and Build-Time Utilities

Concert information is centralized in [src/_data/concerts.json](src/_data/concerts.json). That file drives both:

- the homepage concert cards
- the concert detail pages

## Static Assets

Eleventy copies these directories and files straight through to the built site:

- `src/favicon.ico`
- `src/images/`
- `src/styles/`
- `src/scripts/`

That passthrough behavior is defined in [eleventy.config.js](eleventy.config.js).

## Editing Guidelines

- Edit files in `src/`, not `_site/`.
- Update `src/_data/concerts.json` when concert metadata changes.
- Run `npm run build` after changes to verify the site still compiles.