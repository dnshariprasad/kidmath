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
  shadows: {
    sm: "0 2px 4px rgba(0,0,0,0.05)",
    md: "0 4px 12px rgba(0,0,0,0.08)",
    lg: "0 8px 24px rgba(0,0,0,0.12)",
  },
  fontSizes: {
    small: {
      xs: "0.75rem",
      sm: "0.85rem",
      base: "0.9rem",
      md: "1rem",
      lg: "1.2rem",
      xl: "1.5rem",
      xxl: "2rem",
      huge: "3rem",
    },
    medium: {
      xs: "0.85rem",
      sm: "0.95rem",
      base: "1rem",
      md: "1.2rem",
      lg: "1.5rem",
      xl: "2rem",
      xxl: "2.5rem",
      huge: "4rem",
    },
    large: {
      xs: "1rem",
      sm: "1.1rem",
      base: "1.2rem",
      md: "1.5rem",
      lg: "2rem",
      xl: "2.5rem",
      xxl: "3.5rem",
      huge: "6rem",
    },
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
    border: "#E2E8F0",
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
    border: "#334155",
    shadow: "rgba(0, 0, 0, 0.3)",
  },
};

export const theme = lightTheme;
