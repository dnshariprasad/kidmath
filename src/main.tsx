import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./dashboard/dashboard/index.tsx";
import AlphabetPage from "./pages/english/AlphabetPage.tsx";
import SightWordsChallenge from "./pages/english/SightWordsChallenge.tsx";
import Welcome from "./pages/Welcome.tsx";
import Navbar from "./dashboard/nav/index.tsx";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme.ts";
import SpellingChallenge from "./pages/english/SpellingChallenge.tsx";
import CrosswordSudoku from "./pages/english/SudokuGame.tsx";
import AlphabetHindiChallenge from "./pages/hindi/AlphabetHindiChallenge.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import MissingLettersChallenge from "./pages/english/MissingLettersChallenge.tsx";
import GreaterLessEqualGame from "./pages/math/GreaterLessEqualGame.tsx";
import MathChallenge from "./pages/math/MathChallenge.tsx";
import NumberSorter from "./pages/math/NumberSorter.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <HashRouter>
          <Navbar />
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
              <Route
                path="missing_letters"
                element={<MissingLettersChallenge />}
              />
              <Route path="sorting_numbers" element={<NumberSorter />} />
              <Route
                path="missing_numbers"
                element={<MissingLettersChallenge />}
              />
              <Route
                path="alphabet_hindi"
                element={<AlphabetHindiChallenge />}
              />
            </Route>
          </Routes>
        </HashRouter>
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
