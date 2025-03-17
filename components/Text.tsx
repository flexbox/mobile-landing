import { Text as RNText, TextProps as RNTextProps } from 'react-native';
import { theme } from '@/constants/theme';
import { translate } from '@/i18n/translate';

type TextVariant = 'body' | 'title' | 'subtitle' | 'caption' | 'button' | 'label' | 'heading1' | 'heading2' | 'heading3' | 'bodyLarge' | 'bodySmall';

interface TextProps extends RNTextProps {
  tx?: string;
  className?: string;
  color?: keyof typeof theme.colors;
  variant?: TextVariant;
}

export const Text = ({
  tx,
  className = '',
  color = 'secondary',
  variant = 'body',
  style,
  ...props
}: TextProps) => {
  const variantStyles = {
    body: 'text-sm font-normal',
    title: 'text-xl font-bold',
    subtitle: 'text-lg font-semibold',
    caption: 'text-xs font-normal',
    button: 'text-sm font-medium',
    label: 'text-sm font-medium',
    heading1: 'text-2xl md:text-3xl font-bold',
    heading2: 'text-xl md:text-2xl font-bold',
    heading3: 'text-lg md:text-xl font-bold',
    bodyLarge: 'text-base font-normal',
    bodySmall: 'text-sm font-normal',
  };

  return (
    <RNText
      className={`${variantStyles[variant]} ${className}`}
      style={[{ color: theme.colors[color] }, style]}
      {...props}
    >
      {tx ? translate(`${tx}`) : props.children}
    </RNText>
  );
}; 