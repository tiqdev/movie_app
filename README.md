# Movie App setup

*created by [tiqdev](https://tiqdev.com)*💛

### Explanation

This project utilizes the TMDB API to provide information about almost all movies from the past to the present. It offers users a pleasant experience by allowing them to create their own favorite lists and recommend movies to their friends via email. Through Firebase integration, you can connect with your Google mail address, create personal favorite lists, make comments on movies, and view the comments of others. Additionally, suggesting a movie to a friend is as simple as entering their email address and sending the recommendation. Thanks to the project's mobile compatibility feature, you can use it on any device without experiencing performance issues.
To visit the project's main page and use it, follow the link: https://tiqdevmovie.vercel.app

### Installation

```
pnpm install
```

### .env file

You should fill the env file with your own api keys and config informations before run the project or getting build.

```
TMDB_API_TOKEN=token

FIREBASE_APIKEY=apikey
FIREBASE_APP_ID=id
FIREBASE_MESSAGING_SENDER_ID=id
FIREBASE_MEASUREMENT_ID=id

EMAILJS_SERVICE_ID=id
EMAILJS_TEMPLATE_ID=id
EMAILJS_PUBLIC_KEY=apikey

NODE_ENV=production

```

### Run app

```
pnpm run dev
```

> open browser at [http://localhost:8080](http://localhost:8080/)

### **Get build in production mode**

> first modify the NODE_ENV variable in the .env file to production

```
NODE_ENV=production
```

> then run that code

```terminal
pnpm run build
```

### NPM Scripts

```
"dev": "webpack serve"
```

```
"build": "webpack",
```

## Webpack

There is one webpack configuration file:

- `webpack.config.ts` (general configuration)
