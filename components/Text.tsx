import { Text as RNText, TextProps as RNTextProps } from 'react-native';
import { theme } from '@/constants/theme';
import { useLanguage } from '@/i18n/translate';

interface TextProps extends RNTextProps {
  tx?: string;
  className?: string;
  color?: keyof typeof theme.colors;
}

export const Text = ({ tx, className = '', color = 'secondary', style, ...props }: TextProps) => {
  const { t } = useLanguage();

  return (
    <RNText
      className={`text-sm font-medium ${className}`}
      style={[{ color: theme.colors[color] }, style]}
      {...props}
    >
      {tx ? t(`nav.${tx}`) : props.children}
    </RNText>
  );
}; 