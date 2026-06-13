# Orion on 11ty

This is the Orion Ensemble site rebuilt as an Eleventy static site. Source files live in `src/`, Eleventy builds the site into `_site/`, and the generated output can be published as static files.

## Commands

- `npm install` installs dependencies.
- `npm run build` deletes `_site/` and rebuilds the full site.
- `npm run start` runs Eleventy's local dev server.

The project expects Node 22 or newer.

## How the Site Is Assembled

Eleventy uses `src/` as its input directory and `_site/` as its output directory. That is configured in [eleventy.config.js](eleventy.config.js).

All pages under `src/` inherit the shared layout from [src/src.11tydata.json](src/src.11tydata.json), which points at [src/_includes/layout.njk](src/_includes/layout.njk).

## Page Types

### Standard content pages

Pages like [src/about.md](src/about.md), [src/contact.md](src/contact.md), and [src/donate.md](src/donate.md) are mostly Markdown with occasional inline HTML for things like images or the PayPal form.

### Homepage

The homepage is [src/index.md](src/index.md). It uses `templateEngineOverride: njk` so Eleventy treats the body as Nunjucks/HTML instead of wrapping custom elements in Markdown output.

The homepage has three main parts:

- a slideshow and music player column
- a right-hand season sidebar with concert links
- the full-width Orion Story section below

Its script entry point is [src/scripts/index.js](src/scripts/index.js), which loads the homepage custom elements:

- `slide-show`
- `music-player`
- `concert-calendar`

These components live in [src/scripts/slide-show.js](src/scripts/slide-show.js), [src/scripts/music-player.js](src/scripts/music-player.js), and [src/scripts/concert-calendar.js](src/scripts/concert-calendar.js).

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