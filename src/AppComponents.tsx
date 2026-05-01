import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme/theme.ts";
import { GlobalCSS } from "./theme/globalStyles.tsx";
import { RootState } from "./store/store.ts";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/config";
import { setUser } from "./store/slice/AlphabetSlice";
import NamePrompt from "./components/NamePrompt/index.tsx";
import LoadingScreen from "./components/LoadingScreen";
import { Navigate } from "react-router-dom";

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

export const AuthStateListener = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch();
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          setUser({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
          }),
        );
      } else {
        dispatch(setUser(null));
      }
      setInitializing(false);
    });

    return unsubscribe;
  }, [dispatch]);

  if (initializing) return <LoadingScreen />;

  return <>{children}</>;
};

export const NameRequiredRoute = ({ children }: { children: React.ReactNode }) => {
  const user = useSelector((state: RootState) => state.alphabet.user);
  const userName = useSelector((state: RootState) => state.alphabet.userName);
  const [showPrompt, setShowPrompt] = useState(!userName);

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (!userName && showPrompt) {
    return <NamePrompt onComplete={() => setShowPrompt(false)} />;
  }

  return <>{children}</>;
};

export const LoadingState = () => <LoadingScreen />;
