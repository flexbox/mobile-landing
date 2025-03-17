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
    primary: '#0070F3',    // Modern blue - your brand color
    secondary: '#171717',   // Near black - for contrast
    accent: '#FF4081',     // Pink accent - for CTAs
    text: '#2D3748',       // Dark gray - for better readability
    background: '#FFFFFF',  // White - clean background
    success: '#34C759',    // Green - for success states
    error: '#FF3B30',      // Red - for error states
    warning: '#FF9500',    // Orange - for warning states
    gray: '#8E8E93',       // Gray - for secondary text
  } as ThemeColors,
  fonts: {
    primary: 'Inter',      // Modern, clean font
  },
  typography: {
    body: { fontSize: 16, color: '#000000' },
    heading1: { fontSize: 24, fontWeight: 'bold', marginVertical: 16 },
    heading2: { fontSize: 20, fontWeight: 'bold', marginVertical: 12 },
    paragraph: { marginVertical: 8 },
    link: { color: '#3B82F6', textDecorationLine: 'underline' },
    list: { marginVertical: 8 },
    listItem: { marginLeft: 16 },
    hr: { marginVertical: 16, borderTopWidth: 1, borderColor: '#E5E7EB' }
  } as Record<string, TextStyle>
}