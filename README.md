# Finna Web App

This is the web-accessible version of Finna, built in [Svelte](https://svelte.dev). You can find the site at [https://finna.events](https://finna.events).

We also take advantage of the following technologies:

-   [firebase](https://firebase.google.com/docs/web/setup)
-   [ionic for css](https://ionicframework.com/docs/components)
-   [css variables](https://www.w3schools.com/css/css3_variables.asp)
-   When we get there, we will wrap the app with [Cordova](https://cordova.apache.org) to make an android app

## Get started

Install the dependencies...

```bash
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see the app running.

## Deploying the app

To create an optimised version of the app:

```bash
npm run build
```

You can run the newly built app with `npm run start`. This uses [sirv](https://github.com/lukeed/sirv), which is included in your package.json's `dependencies` so that the app will work when you deploy to platforms like [Heroku](https://heroku.com).

Then deploy by running:

```bash
npm run deploy
```

This app is hosted by github pages. Our repository is set up to deploy what is on the `gh-pages` branch of this repo. The deploy script above pushes everything in the `/public` directory to this branch and pushes it up.
