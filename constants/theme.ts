import { TextStyle } from "react-native/Libraries/StyleSheet/StyleSheetTypes";

interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  text: string;
  background: string;
  success: string;
  error: string;
  warning: string;
  gray: string;
}

export const theme = {
  colors: {
    primary: '#0070F3',     // Modern blue - your brand color
    secondary: '#171717',   // Near black - for contrast
    accent: '#FF4081',      // Pink accent - for CTAs
    text: '#2D3748',        // Dark gray - for better readability
    background: '#FFFFFF',  // White - clean background
    success: '#34C759',     // Green - for success states
    error: '#FF3B30',       // Red - for error states
    warning: '#FF9500',     // Orange - for warning states
    gray: '#8E8E93',        // Gray - for secondary text
  } as ThemeColors,
  fonts: {
    primary: 'Inter',      // Modern, clean font
  },
  typography: {
    heading1: {
      fontSize: 40,
      fontWeight: '800',
      marginVertical: 24,
      letterSpacing: -1,
      lineHeight: 48
    },
    heading2: {
      fontSize: 32,
      fontWeight: '700',
      marginVertical: 20,
      letterSpacing: -0.5,
      lineHeight: 40
    },
    heading3: {
      fontSize: 24,
      fontWeight: '600',
      marginVertical: 16,
      letterSpacing: -0.25,
      lineHeight: 32
    },
    bodyLarge: {
      fontSize: 20,
      fontWeight: '400',
      marginVertical: 12,
      lineHeight: 30,
      letterSpacing: 0.15
    },
    body: {
      fontSize: 16,
      fontWeight: '400',
      marginVertical: 8,
      lineHeight: 24,
      letterSpacing: 0.5
    },
    bodySmall: {
      fontSize: 14,
      fontWeight: '400',
      marginVertical: 6,
      lineHeight: 20,
      letterSpacing: 0.25
    },
    caption: {
      fontSize: 12,
      fontWeight: '400',
      marginVertical: 4,
      lineHeight: 16,
      letterSpacing: 0.4
    }
  } as Record<string, TextStyle>
}