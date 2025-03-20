// Script pour récupérer les données App Store et les stocker localement
const fs = require('fs');
const path = require('path');

// Lire le contenu du fichier app.config.ts pour extraire APP_STORE_APP_ID
const appConfigPath = path.join(process.cwd(), 'app.config.ts');
const appConfigContent = fs.readFileSync(appConfigPath, 'utf8');

// Extraire APP_STORE_APP_ID avec une expression régulière
const appIdMatch = appConfigContent.match(/APP_STORE_APP_ID\s*=\s*["']([^"']+)["']/);
const APP_STORE_APP_ID = appIdMatch ? appIdMatch[1] : '570060128'; // Valeur par défaut si non trouvée

// Fallback description quand les données ne sont pas disponibles
const FALLBACK_DESCRIPTION = "Une application mobile élégante et intuitive développée avec Expo React Native.";

async function fetchAppStoreData() {
  console.log('Fetching App Store data for ID:', APP_STORE_APP_ID);

  try {
    const response = await fetch(`https://itunes.apple.com/lookup?id=${APP_STORE_APP_ID}`);
    const data = await response.json();

    let appStoreData;

    if (data.results && data.results.length > 0) {
      const result = data.results[0];
      console.log('App Store data found for:', result.trackName);

      appStoreData = {
        trackName: result.trackName,
        price: result.price,
        averageUserRating: result.averageUserRating,
        formattedPrice: result.formattedPrice,
        currency: result.currency,
        screenshotUrls: result.screenshotUrls || [],
        ipadScreenshotUrls: result.ipadScreenshotUrls || [],
        artworkUrl512: result.artworkUrl512 || '',
        description: result.description || '',
      };
    } else {
      console.log('No results found in App Store response, using fallback data');
      // Fallback data when app is not yet published
      appStoreData = {
        trackName: "Expo App Landing Page",
        price: 0,
        averageUserRating: 5,
        formattedPrice: "Free",
        currency: "USD",
        screenshotUrls: [],
        ipadScreenshotUrls: [],
        artworkUrl512: '',
        description: FALLBACK_DESCRIPTION,
      };
    }

    // Ensure directory exists
    const dataDir = path.join(process.cwd(), 'assets', 'data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    // Write data to file
    const dataPath = path.join(dataDir, 'appStore.json');
    fs.writeFileSync(dataPath, JSON.stringify(appStoreData, null, 2));

    console.log('App Store data saved to:', dataPath);
  } catch (error) {
    console.error('Error fetching App Store data:', error);

    // Fallback data in case of error
    const fallbackData = {
      trackName: "Expo App Landing Page",
      price: 0,
      averageUserRating: 5,
      formattedPrice: "Free",
      currency: "USD",
      screenshotUrls: [],
      ipadScreenshotUrls: [],
      artworkUrl512: '',
      description: FALLBACK_DESCRIPTION,
    };

    // Ensure directory exists
    const dataDir = path.join(process.cwd(), 'assets', 'data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    // Write fallback data to file
    const dataPath = path.join(dataDir, 'appStore.json');
    fs.writeFileSync(dataPath, JSON.stringify(fallbackData, null, 2));

    console.log('Fallback App Store data saved to:', dataPath);
  }
}

// Execute the function
fetchAppStoreData(); 