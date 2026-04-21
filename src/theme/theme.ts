const commonTheme = {
  fonts: {
    primary: "'Nunito', sans-serif",
    secondary: "'Quicksand', sans-serif",
  },
  borderRadius: {
    small: "12px",
    medium: "20px",
    large: "28px",
    round: "50%",
  },
};

export const lightTheme = {
  ...commonTheme,
  colors: {
    primary: "#6366F1",
    onPrimary: "#FFFFFF",
    primaryContainer: "#EEF2FF",
    secondary: "#6366F1",
    onSecondary: "#FFFFFF",
    accent: "#6366F1",
    success: "#10B981",
    warning: "#F59E0B",
    math: "#6366F1",
    english: "#6366F1",
    hindi: "#6366F1",
    background: "#F8FAFC",
    surface: "#FFFFFF",
    surfaceVariant: "#F1F5F9",
    textPrimary: "#1E293B",
    textSecondary: "#64748B",
    shadow: "rgba(99, 102, 241, 0.1)",
  },
};

export const darkTheme = {
  ...commonTheme,
  colors: {
    primary: "#818CF8",
    onPrimary: "#FFFFFF",
    primaryContainer: "#312E81",
    secondary: "#818CF8",
    onSecondary: "#FFFFFF",
    accent: "#818CF8",
    success: "#34D399",
    warning: "#FBBF24",
    math: "#818CF8",
    english: "#818CF8",
    hindi: "#818CF8",
    background: "#0F172A",
    surface: "#1E293B",
    surfaceVariant: "#334155",
    textPrimary: "#F1F5F9",
    textSecondary: "#94A3B8",
    shadow: "rgba(0, 0, 0, 0.3)",
  },
};

export const theme = lightTheme;
