# Expo App Landing Page

> Customizable landing page for your Expo application, built with Expo and React Native Web.

Demo: [expo-app-landing-page.expo.app](https://expo-app-landing-page.expo.app/)

## Clone the repository

```bash
npx create-expo -t https://github.com/flexbox/expo-app-landing-page/
```

## Getting Started

```bash
npm install # or yarn install
npm start # or yarn start
```

## Configure your app

- update your iOS and android configuration in `app.config.ts`
  - if you provide your App Store ID, the app will automatically fetch your app data (name, description, screenshots)
  - in case the automatic fetch fails, you can still manually configure all the data
- update your theme on `constants/theme.ts`
- update your landing page content on `constants/landing.ts`
- run `yarn generate-og` to generate a screenshot of your landing page, then manually move the generated image from your downloads folder to the `public` directory

## Release

1. Create an account at [expo.dev](https://expo.dev)
2. Install the cli `npm install -g eas-cli`
3. Login to your account `eas login`

```bash
npm run preview # or yarn preview
```

Release to production

```bash
npm run deploy # or yarn deploy
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

- We specialize in React Native with Expo.
- Helps startups release mobile apps on productions faster.
- All-inclusive: a trusted software engineer joins your existing team and shares our expertise in managing releases to store.
- **Book a call with us: [weshipit.today](https://weshipit.today/)**.