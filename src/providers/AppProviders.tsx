import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../theme/theme";
import { GlobalCSS } from "../theme/globalStyles";
import { RootState } from "../store/store";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/config";
import { setUser } from "../store/slice/AlphabetSlice";
import LoadingScreen from "../components/LoadingScreen";

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

export const LoadingState = () => <LoadingScreen />;
