# Expo App Landing Page

> Customizable landing page for your Expo application, built with Expo and React Native Web.

![Expo App Langin page OG](./public/@og-image.png)

## About

weshipit.today is a French-based React Native engineering and consulting company. We partner with the world’s top companies and are recommended by Expo. You don’t have time to learn all the details of mobile app development? Let’s build together and **book a call with us: [weshipit.today](https://weshipit.today/)**.

### Why this project?

This project is designed to help you create a landing page for your Expo application. It provides a simple and customizable solution for showcasing your app, including features like:

Demo: [mobile-landing.expo.app](https://mobile-landing.expo.app/)

## Getting Started

Create a new Expo app using the template:

```bash
npx create-expo -t https://github.com/flexbox/mobile-landing/ <project-mobile-landing>
```

Install dependencies:

```bash
yarn       # or npm install
yarn start # or npm start
```

## Configure your landing page

1. Update your iOS and android configuration in `app.config.ts`.

- If you provide your App Store ID, the app will automatically fetch your app data (name, description, screenshots).
- In case the automatic fetch fails, you can still manually configure all the data.

2. Update your theme on `constants/theme.ts`.
3. Update your landing page content on `constants/landing.ts`.
4. Run `yarn generate-og` to generate a screenshot of your landing page, then manually move the generated image from your downloads folder to the `public` directory.

## App Store Data

The app can fetch App Store data in two ways:

1. **Dynamic mode (development)**: When running in development, the app will try to fetch data from the App Store API if no static data is available.

2. **Static mode (production)**: For production deployments, the app uses pre-fetched data stored in a local JSON file.

To manually fetch and update the App Store data:

```bash
yarn fetch-appstore-data
```

This will create a JSON file at `assets/data/appStore.json` with your app's data.

When you run `yarn deploy`, this command is automatically executed before deployment to ensure you have the latest data.

## Release

1. Create an account at [expo.dev](https://expo.dev)
2. Install the cli `npm install -g eas-cli`
3. Login to your account `eas login`

```bash
yarn preview # or npm run preview
```

Release to production

```bash
yarn deploy # or npm run deploy
```

## Changelog

The app includes a changelog page that can be enabled or disabled. To manage the changelog:

1. Open `constants/landing.ts`
2. Find the `changelog` configuration object
3. Set `enabled: true` to show the changelog page, or `enabled: false` to hide it
4. Add your versions and changes in the following format:

```typescript
{
  version: "2.0.0",
  date: "2024-03-15",
  changes: [
    {
      type: "feature", // Can be: feature, improvement, fix
      description: "Description of the change"
    }
  ]
}
```

The changelog page will automatically show your changes with appropriate styling for each type of change:

- 🟣 Feature: New features
- 🔵 Improvement: Enhancements to existing features
- 🔴 Fix: Bug fixes and corrections

## We do it for you

You want to focus on your business and not on the technical details?

- We specialize in React Native with Expo.
- Helps startups release mobile apps on productions faster.
- All-inclusive: a trusted software engineer joins your existing team and shares our expertise in managing releases to store.
