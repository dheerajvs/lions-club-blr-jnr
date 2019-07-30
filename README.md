# Lions Club Bangalore Jayanagar

[![Netlify Status](https://api.netlify.com/api/v1/badges/b2e35950-1a0c-41fd-a032-e8419b1c3d52/deploy-status)](https://app.netlify.com/sites/lcbj/deploys)
[![License](https://img.shields.io/github/license/dheerajvs/lions-club-blr-jnr)](https://github.com/dheerajvs/lions-club-blr-jnr/blob/master/LICENSE)

This is the source code for the website of Lions Club Bangalore Jayanagar. The website is a static site generated using `static-site-generator-webpack-plugin`. The primary design goal is a simple, light-weight, responsive, high-performance website that can load in poor mobile network conditions. Towards this goal, the following are the technology choices are made:

- `React` is used for HTML templating. The JSX code is rendered to pure HTML using `renderToStaticMarkup` at *build* time. The final website does not use `react`.
- Use of JavaScript at runtime is kept to the absolute minimum and primarily as progressive enhancement. The website must be usable with JavaScript disabled.
- `bulma` is used as the CSS framework with Sass as the preprocessor
- Progressive Web App features including service worker for offline capability and manifest file
- Inline images as base-64 encoded data URLs for small images using `url-loader`
- Inline low quality image placeholders using `lqip-loader`
- Hosting of the static website using Netlify

## Building

```sh
npm install
npm start     # development
npm run build # production
```

## Credits

- Open source libraries as listed under the Notices file
- Netlify for their generous and amazing static hosting service
