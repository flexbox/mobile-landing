# Expo App Landing Page

This is a customizable landing page for your Expo application, built with Expo and React Native Web.

## Quick Start

1. Install dependencies

```bash
npm install
# or
yarn install
```

2. Configure your app by updating the following files:

### App Configuration (`app.config.ts`)

All app configuration is centralized in `app.config.ts`. Update the `APP_CONFIG` object with your app's information:

```typescript
export const APP_CONFIG = {
  name: "Your App Name",
  version: "1.0.0",
  description: "Your App Description",
  tagline: "Your Compelling Tagline",
  price: "Free/Premium",
  category: "Your Category",
  bundleId: "com.yourcompany.appname",
  packageName: "com.yourcompany.appname",
  store: {
    ios: {
      id: "your-app-store-id",
      // URL is automatically generated
    },
    android: {
      // URL is automatically generated using packageName
    },
  },
  expo: {
    projectId: "your-eas-project-id",
    projectSlug: "your-project-slug",
    owner: "your-expo-username",
  }
};
```

### Theme Configuration (`constants/theme.ts`)

```typescript
export const theme = {
  colors: {
    primary: '#YOUR_PRIMARY_COLOR',
    secondary: '#YOUR_SECONDARY_COLOR',
    accent: '#YOUR_ACCENT_COLOR',
    text: '#YOUR_TEXT_COLOR',
    background: '#YOUR_BACKGROUND_COLOR'
  },
  fonts: {
    primary: 'YOUR_FONT',
  }
}
```

The landing page content in `constants/landing.ts` will automatically use the configuration from `app.config.ts`.

## Expo Setup and Deployment

### 1. Expo Account Setup
1. Create an account at [expo.dev](https://expo.dev)
2. Install EAS CLI:
   ```bash
   npm install -g eas-cli
   ```
3. Login to Expo:
   ```bash
   eas login
   ```
4. Check
  ``` 
  eas whoami
  ```

### 2. Export Web build

```
npx expo export --platform web
``` 

### 3. Deployment

# Deploy
``` 
eas deploy
```

## CI/CD with GitHub Actions

### 1. Setup GitHub Secrets
Add the following secret to your GitHub repository:
- Go to your repository Settings > Secrets and Variables > Actions
- Add new secret:
  - Name: `EXPO_TOKEN`
  - Value: Your Expo access token from step 2

### 2. Create GitHub Actions Workflow
Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Expo
on:
  push:
    branches:
      - main
  workflow_dispatch:

jobs:
  deploy:
    name: Deploy to Expo
    runs-on: ubuntu-latest
    steps:
      - name: 🏗 Setup repo
        uses: actions/checkout@v3

      - name: 🏗 Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: 18.x
          cache: yarn

      - name: 🏗 Setup EAS
        uses: expo/expo-github-action@v8
        with:
          eas-version: latest
          token: ${{ secrets.EXPO_TOKEN }}

      - name: 📦 Install dependencies
        run: yarn install

      - name: 🚀 Build and deploy
        run: |
          eas build -p web
          eas deploy
```

## Development

Start the development server:

```bash
npm start
# or
yarn start
```

Run on specific platforms:

```bash
# Web
npm run web
# or
yarn web
```

## License

This project is licensed under the MIT License.