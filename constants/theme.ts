interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  text: string;
  background: string;
}

export const theme = {
  colors: {
    primary: '#0070F3',    // Modern blue - your brand color
    secondary: '#171717',   // Near black - for contrast
    accent: '#FF4081',     // Pink accent - for CTAs
    text: '#2D3748',       // Dark gray - for better readability
    background: '#FFFFFF'   // White - clean background
  } as ThemeColors,
  fonts: {
    primary: 'Inter',      // Modern, clean font
  }
}