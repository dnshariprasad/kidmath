import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme/theme.ts";
import { GlobalCSS } from "./theme/globalStyles.tsx";
import { RootState } from "./store/store.ts";
import NamePrompt from "./components/NamePrompt/index.tsx";
import LoadingScreen from "./components/LoadingScreen";

export const ConnectedThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const themeMode = useSelector((state: RootState) => state.alphabet.theme);
  const fontSizeLevel = useSelector((state: RootState) => state.alphabet.fontSizeLevel);
  const baseTheme = themeMode === "dark" ? darkTheme : lightTheme;

  const currentTheme = {
    ...baseTheme,
    fontSize: baseTheme.fontSizes[fontSizeLevel],
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalCSS />
      {children}
    </ThemeProvider>
  );
};

export const NameRequiredRoute = ({ children }: { children: React.ReactNode }) => {
  const userName = useSelector((state: RootState) => state.alphabet.userName);
  const [showPrompt, setShowPrompt] = useState(!userName);

  if (!userName && showPrompt) {
    return <NamePrompt onComplete={() => setShowPrompt(false)} />;
  }

  return <>{children}</>;
};

export const LoadingState = () => <LoadingScreen />;
