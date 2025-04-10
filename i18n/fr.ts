import { Translations } from "./en";

const fr: Translations = {
  // Navigation
  nav: {
    features: "Fonctionnalités",
    screenshots: "Captures d'écran",
    privacy: "Confidentialité",
    changelog: "Journal des modifications",
    pressKit: "Kit de presse",
  },

  // App Info
  app: {
    tagline: {
      main: "Votre Vision. Votre App. Votre Succès.",
      sub: "La meilleure façon de créer rapidement une superbe page de présentation pour votre application expo.",
    },
    description:
      "Un modèle de page de présentation puissant et flexible pour votre application. Facile à personnaliser et superbe sur tous les appareils, grands ou petits.",
    price: "achat unique",
    free: "Gratuit",
    category: "Productivité",
  },

  // Sections
  sections: {
    features: {
      title: "Fonctionnalités",
      items: {
        feature1: {
          title: "Intégration Intelligente",
          description:
            "Connectez-vous facilement à vos outils et services préférés",
          icon: "plug",
        },
        feature2: {
          title: "Synchronisation Cloud",
          description: "Accédez à vos données n'importe où, n'importe quand",
          icon: "cloud",
        },
        feature3: {
          title: "Sécurité Avancée",
          description:
            "Fonctionnalités de cryptage et de confidentialité de niveau entreprise",
          icon: "shield",
        },
        feature4: {
          title: "Mode Sombre",
          description: "Agréable pour les yeux, de jour comme de nuit",
          icon: "moon-o",
        },
        feature5: {
          title: "Notifications Intelligentes",
          description: "Restez informé avec des alertes intelligentes",
          icon: "bell",
        },
        feature6: {
          title: "Analytique",
          description: "Analyses puissantes de vos habitudes d'utilisation",
          icon: "bar-chart",
        },
      },
    },
    screenshots: {
      title: "Captures d'écran",
      items: {
        beautiful: "Interface Élégante",
        features: "Fonctionnalités Puissantes",
        integration: "Intégration Intelligente",
        analytics: "Analyses Avancées",
      },
    },
  },

  // Privacy
  privacy: {
    title: "Politique de Confidentialité",
    description:
      "Cette politique de confidentialité s'applique à l'application.",
  },
  // Social Links
  social: {
    twitter: "Suivez-nous sur Twitter",
    instagram: "Découvrez nos stories exclusives",
    facebook: "Rejoignez notre communauté",
    github: "Découvrez notre travail open source",
  },

  // Call to action
  cta: {
    buildYourOwn: "Créez votre propre page",
  },

  // Changelog
  changelog: {
    title: "Notes de version",
    version: "Version {{version}}",
    labels: {
      features: "Fonctionnalités",
      improvements: "Améliorations",
      fixes: "Corrections",
      updates: "Mises à jour",
    },
    darkMode: "Ajout du support du mode sombre dans toute l'application",
    imageLoading: "Amélioration des performances de chargement des images",
    dashboard:
      "Nouvelle disposition du tableau de bord avec widgets personnalisables",
    notificationSync:
      "Correction des problèmes de synchronisation des notifications sur les appareils iOS",
    startupTime: "Optimisation du temps de démarrage de l'application de 40%",
    authToken:
      "Résolution du bug de rafraîchissement du jeton d'authentification",
  },

  // Brand Page
  brand: {
    hero: {
      title: "Notre Identité de Marque",
      description:
        "Découvrez notre système de design et nos directives de marque",
    },
    colors: {
      title: "Palette de Couleurs",
      description: "Notre palette de couleurs principale et ses variations",
    },
    typography: {
      title: "Typographie",
      description: "Nos polices et styles de texte",
    },
    logos: {
      title: "Logos",
      description: "Nos logos et leurs utilisations",
    },
    guidelines: {
      title: "Directives de Marque",
      description: "Règles et principes pour maintenir notre identité visuelle",
    },
    components: {
      typography: {
        items: {
          heading1: { name: "Titre 1", description: "32px • Bold" },
          heading2: { name: "Titre 2", description: "24px • Bold" },
          heading3: { name: "Titre 3", description: "20px • Semi-Bold" },
          bodyLarge: { name: "Corps Large", description: "18px • Normal" },
          body: { name: "Corps", description: "16px • Normal" },
          bodySmall: { name: "Corps Petit", description: "14px • Normal" },
          caption: { name: "Légende", description: "12px • Normal" },
        },
      },
      logos: {
        downloadAll: "Télécharger tous les logos",
        download: "Télécharger",
        items: {
          primary: {
            name: "Logo Principal",
            description:
              "Utilisez ce logo comme logo principal dans la plupart des contextes",
          },
          icon: {
            name: "Icône Seule",
            description:
              "Utilisez ce logo lorsque l'espace est limité ou comme favicon",
          },
          dark: {
            name: "Mode Sombre",
            description: "Utilisez cette version sur fond sombre",
          },
        },
      },
      guidelines: {
        do: {
          title: "À Faire",
          items: [
            "Utilisez nos couleurs de marque de manière cohérente dans tous les supports",
            "Maintenez un espacement et un alignement appropriés",
            "Suivez notre hiérarchie typographique",
            "Utilisez la bonne version du logo pour chaque contexte",
            "Gardez les designs propres et minimalistes",
            "Assurez des ratios de contraste appropriés",
            "Utilisez un padding et des marges appropriés",
          ],
        },
        dont: {
          title: "À Ne Pas Faire",
          items: [
            "Modifier ou déformer nos logos",
            "Utiliser des combinaisons de couleurs non autorisées",
            "Changer les styles de police",
            "Placer les logos sur des arrière-plans chargés",
            "Étirer ou compresser les images",
            "Utiliser des éléments de marque obsolètes",
            "Mélanger différents styles de design",
          ],
        },
      },
    },
  },
};

export default fr;
