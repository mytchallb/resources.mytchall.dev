# resources.mytchall.dev

A website front-end to display collection of web resources for the full-stack developer or content creator.

Access the website [here on my blog](https://resources.mytchall.dev/), host your own copy, or see the list of assets [here on Github](./Resources.md).

## Development

This is an SSG Astro site with Vue components.

Astro's Nanostores are used for state management.

Run `npm i` to install dependencies, `npm run dev` for the dev server, and `npm run build` to create the static site in `/public`.

Note: I'm using the `/public` folder instead of Astro's default `dist` folder so I can use Laravel Valet to see built site locally.

## Contributing

Please feel free to add your own resources and make a pull request!

## To do

- Check mobile UI view

- Support multi-images on single view

- Update URL when filtering

- Add some colour themes
- Make color scheme save across pages
- Announce on blog

### Ideas

Could make a simple Astro front-end to generate resource .md files with a nice drag/drop layout.

Transform images on build
