import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./dashboard/dashboard/index.tsx";
import AlphabetPage from "./pages/english/AlphabetPage/index.tsx";
import SightWordsChallenge from "./pages/english/SightWordsChallenge/index.tsx";
import Welcome from "./pages/Welcome/index.tsx";
import Navbar from "./dashboard/nav/index.tsx";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme/theme.ts";
import SpellingChallenge from "./pages/english/SpellingChallenge/index.tsx";
import CrosswordSudoku from "./pages/english/SudokuGame/index.tsx";
import AlphabetHindiChallenge from "./pages/hindi/AlphabetHindiChallenge/index.tsx";
import { Provider, useSelector } from "react-redux";
import { store, RootState } from "./store/store.ts";
import MissingLettersChallenge from "./pages/english/MissingLettersChallenge/index.tsx";
import GreaterLessEqualGame from "./pages/math/GreaterLessEqualGame/index.tsx";
import MathChallenge from "./pages/math/MathChallenge/index.tsx";
import NumberSorter from "./pages/math/NumberSorter/index.tsx";
import ErrorBoundary from "./components/ErrorBoundary.tsx";

const ConnectedThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const themeMode = useSelector((state: RootState) => state.alphabet.theme);
  const fontSizeLevel = useSelector((state: RootState) => state.alphabet.fontSizeLevel);
  const baseTheme = themeMode === "dark" ? darkTheme : lightTheme;

  // Merge the active font size scale into the theme colors/base
  const currentTheme = {
    ...baseTheme,
    fontSize: baseTheme.fontSizes[fontSizeLevel],
  };

  return <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>;
};

import SharedCertificate from "./components/SharedCertificate/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ConnectedThemeProvider>
        <ErrorBoundary>
          <HashRouter>
            <Navbar />
            <SharedCertificate />
            <Routes>
              {/* Parent route with the Layout */}
              <Route path="/" element={<Dashboard />}>
                <Route index element={<Welcome />} />
                <Route path="alphabet" element={<AlphabetPage />} />
                <Route path="counting" element={<MathChallenge />} />
                <Route path="sight_words" element={<SightWordsChallenge />} />
                <Route path="spelling" element={<SpellingChallenge />} />
                <Route path="comparison" element={<GreaterLessEqualGame />} />
                <Route path="sudoku" element={<CrosswordSudoku />} />
                <Route path="missing_letters" element={<MissingLettersChallenge />} />
                <Route path="sorting_numbers" element={<NumberSorter />} />
                <Route path="missing_numbers" element={<MissingLettersChallenge />} />
                <Route path="alphabet_hindi" element={<AlphabetHindiChallenge />} />
              </Route>
            </Routes>
          </HashRouter>
        </ErrorBoundary>
      </ConnectedThemeProvider>
    </Provider>
  </StrictMode>,
);
