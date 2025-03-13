interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  text: string;
  background: string;
}

export const theme = {
  colors: {
    primary: '#1DB954',      // Vibrant green
    secondary: '#191414',    // Dark grey
    accent: '#B3B3B3',       // Light grey
    text: '#000000',         // Black text
    background: '#FFFFFF'     // White background
  } as ThemeColors,
  fonts: {
    primary: 'SpaceMono',
  }
}