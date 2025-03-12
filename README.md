# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Configuration de la Landing Page

Pour configurer votre landing page, suivez ces étapes :

1. Configurez le fichier `app.json`
   ```json
   {
     "expo": {
       "name": "Votre Nom d'App",
       "slug": "votre-app-slug",
       "web": {
         "bundler": "metro",
         "output": "static",
         "favicon": "./assets/images/favicon.png"
       }
     }
   }
   ```

2. Configurez le fichier `app/config/app.config.ts`
   ```typescript
   export const appConfig = {
     // Informations de l'application
     app: {
       name: "Votre App",
       tagline: "Votre slogan accrocheur",
       description: "Description détaillée de votre application",
       price: "Gratuit", // ou votre prix
       category: "Votre catégorie",
       version: "1.0.0",
     },

     // Thème et couleurs
     theme: {
       colors: {
         primary: '#007AFF',
         secondary: '#000000',
         accent: '#FF3B30',
         text: '#000000',
         background: '#FFFFFF'
       }
     },

     // Liens vers les stores
     store: {
       ios: {
         id: "votre-id-app-store",
         url: "https://apps.apple.com/app/id{ios_app_id}",
       },
       android: {
         id: "votre.package.id",
         url: "https://play.google.com/store/apps/details?id={play_store_id}",
       }
     },

     // Screenshots et assets
     assets: {
       icon: require("@/assets/images/icon.png"),
       logo: require("@/assets/images/icon.png"),
       screenshots: [
         {
           image: require("@/assets/images/screenshot.png"),
           title: "Titre de la capture"
         }
       ]
     },

     // Fonctionnalités mises en avant
     features: [
       {
         title: "Titre de la fonctionnalité",
         description: "Description de la fonctionnalité",
         icon: "paint-brush" // Nom de l'icône FontAwesome
       }
     ],

     // Réseaux sociaux
     socialLinks: [
       {
         platform: 'twitter',
         url: 'https://twitter.com/votreapp',
         icon: 'twitter',
         label: 'Suivez-nous sur Twitter'
       }
     ]
   };
   ```

3. Personnalisez les assets
   - Placez votre favicon dans `./assets/images/favicon.png`
   - Ajoutez vos images dans le dossier `./assets/images/`
   - Ajoutez vos captures d'écran dans le même dossier
   - Assurez-vous que tous les assets référencés dans `app.config.ts` existent

4. Configuration du déploiement web
   ```bash
   # Construire la version web
   npx expo export -p web
   ```
   
   Les fichiers statiques seront générés dans le dossier `dist/`.

## Get started

1. Install dependencies

   ```bash
   npm install
   # or
   yarn install
   ```

2. Start the development server

   ```bash
   npm start
   # or
   yarn start
   ```

3. Run on specific platforms

   ```bash
   # Web
   npm run web
   # or
   yarn web

   # iOS
   npm run ios
   # or
   yarn ios

   # Android
   npm run android
   # or
   yarn android
   ```

## Development

This project uses several technologies:
- [Expo](https://expo.dev) - React Native framework
- [NativeWind](https://www.nativewind.dev) - Tailwind CSS for React Native
- [Expo Router](https://expo.github.io/router/docs) - File-based routing
- TypeScript for type safety

## License

This project is licensed under the MIT License.
   