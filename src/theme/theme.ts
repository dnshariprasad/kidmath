import { colors } from "./colors";
import { fonts } from "./fonts";
import { borderRadius, shadows, fontSizes } from "./sizes";

const commonTheme = {
  fonts,
  borderRadius,
  shadows,
  fontSizes,
};

export const lightTheme = {
  ...commonTheme,
  colors: {
    primary: colors.primary,
    onPrimary: colors.onPrimary,
    primaryContainer: colors.primaryContainer,
    secondary: colors.secondary,
    onSecondary: colors.onSecondary,
    accent: colors.accent,
    success: colors.success,
    warning: colors.warning,
    math: colors.math,
    english: colors.english,
    hindi: colors.hindi,
    background: colors.background,
    surface: colors.surface,
    surfaceVariant: colors.surfaceVariant,
    textPrimary: colors.textPrimary,
    textSecondary: colors.textSecondary,
    border: colors.border,
    shadow: colors.shadow,
    // Component specific
    cellFixedBg: colors.cellFixedBg,
    cellFixedText: colors.cellFixedText,
    tipBoxBg: colors.tipBoxBg,
  },
};

export const darkTheme = {
  ...commonTheme,
  colors: {
    primary: colors.primaryLight,
    onPrimary: colors.onPrimary,
    primaryContainer: colors.primaryContainerDark,
    secondary: colors.primaryLight,
    onSecondary: colors.onPrimary,
    accent: colors.primaryLight,
    success: colors.successDark,
    warning: colors.warningDark,
    math: colors.primaryLight,
    english: colors.primaryLight,
    hindi: colors.primaryLight,
    background: colors.backgroundDark,
    surface: colors.surfaceDark,
    surfaceVariant: colors.surfaceVariantDark,
    textPrimary: colors.textPrimaryDark,
    textSecondary: colors.textSecondaryDark,
    border: colors.borderDark,
    shadow: colors.shadowDark,
    // Component specific
    cellFixedBg: colors.surfaceVariantDark,
    cellFixedText: colors.textSecondaryDark,
    tipBoxBg: "rgba(255, 255, 255, 0.05)",
  },
};

export const theme = lightTheme;
