# Dev Resources

A website front-end to display collection of web resources for the full-stack developer or content creator.

Access the website on my blog at [https://resources.mytchall.dev](https://resources.mytchall.dev/), host your own copy, or see the list of assets [here on Github](./Resources.md).

## Development

This is a SSG Astro site with Vue components.

Astro's Nanostores are used for state management in `/store/store.js`.

Themes are set in `/styles/theme.css`, simple add a new theme and update the `--max-themes` number.

Run `npm i` to install dependencies, `npm run dev` for the dev server, and `npm run build` to create the static site in `/public`.

Note: I'm using the `/public` folder instead of Astro's default `dist` folder so I can use Laravel Valet to see built site locally.

## Contributing

Please feel free to make a pull request, add your own resources, edit existing ones or have fun with some new colour schemes!

### Ideas

Could make a simple Astro front-end to generate resource .md files with a nice drag/drop layout.

Transform images on build with unique filename
