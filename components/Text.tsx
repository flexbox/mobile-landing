import {
  AccessibilityRole,
  Text as RNText,
  TextProps as RNTextProps,
} from "react-native";

import { theme } from "@/constants/theme";
import { translate } from "@/i18n/translate";

type TextVariant =
  | "body"
  | "title"
  | "subtitle"
  | "caption"
  | "button"
  | "label"
  | "heading1"
  | "heading2"
  | "heading3"
  | "bodyLarge"
  | "bodySmall";
type SemanticTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";

interface TextProps extends RNTextProps {
  tx?: string;
  className?: string;
  color?: keyof typeof theme.colors;
  variant?: TextVariant;
  as?: SemanticTag;
}

export const Text = ({
  tx,
  className = "",
  color = "secondary",
  variant = "body",
  as,
  style,
  ...props
}: TextProps) => {
  const variantStyles = {
    body: "text-sm font-normal",
    title: "text-xl font-bold",
    subtitle: "text-lg font-semibold",
    caption: "text-xs font-normal",
    button: "text-sm font-medium",
    label: "text-sm font-medium",
    heading1: "text-2xl md:text-3xl font-bold",
    heading2: "text-xl md:text-2xl font-bold",
    heading3: "text-lg md:text-xl font-bold",
    bodyLarge: "text-base font-normal",
    bodySmall: "text-sm font-normal",
  };

  // Map semantic tags to accessibility roles and levels
  const semanticProps = as
    ? {
        accessibilityRole: as.startsWith("h")
          ? ("header" as AccessibilityRole)
          : ("text" as AccessibilityRole),
        "aria-level": as.startsWith("h") ? parseInt(as.slice(1)) : undefined,
      }
    : {};

  return (
    <RNText
      className={`${variantStyles[variant]} ${className}`}
      style={[{ color: theme.colors[color] }, style]}
      {...semanticProps}
      {...props}
    >
      {tx ? translate(`${tx}`) : props.children}
    </RNText>
  );
};
