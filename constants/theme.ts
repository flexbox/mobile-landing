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

type TypographyStyle = {
  size: number;
  weight: '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | 'normal' | 'bold';
  example: string;
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
    heading1: { size: 32, weight: 'bold', example: 'The quick brown fox' },
    heading2: { size: 24, weight: 'bold', example: 'The quick brown fox' },
    heading3: { size: 20, weight: '600', example: 'The quick brown fox' },
    bodyLarge: { size: 18, weight: 'normal', example: 'The quick brown fox jumps over the lazy dog' },
    body: { size: 16, weight: 'normal', example: 'The quick brown fox jumps over the lazy dog' },
    bodySmall: { size: 14, weight: 'normal', example: 'The quick brown fox jumps over the lazy dog' },
    caption: { size: 12, weight: 'normal', example: 'The quick brown fox' },
  } as Record<string, TypographyStyle>
}