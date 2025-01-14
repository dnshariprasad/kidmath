import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./dashboard/dashboard/index.tsx";
import AlphabetChallenge from "./pages/AlphabetChallenge.tsx";
import MathChallenge from "./pages/MathChallenge.tsx";
import SightWordsChallenge from "./pages/SightWordsChallenge.tsx";
import Welcome from "./pages/Welcome.tsx";
import Navbar from "./dashboard/nav/index.tsx";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme.ts";
import SpellingChallenge from "./pages/SpellingChallenge.tsx";
import MissingLettersChallenge from "./pages/MissingLettersChallenge.tsx";
import GreaterLessEqualGame from "./pages/GreaterLessEqualGame.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <HashRouter>
        <Navbar />
        <Routes>
          {/* Parent route with the Layout */}
          <Route path="/" element={<Dashboard />}>
            <Route index element={<Welcome />} />
            <Route path="counting" element={<MathChallenge />} />
            <Route path="sight_words" element={<SightWordsChallenge />} />
            <Route path="alphabet" element={<AlphabetChallenge />} />
            <Route path="spelling" element={<SpellingChallenge />} />
            <Route path="comparison" element={<GreaterLessEqualGame />} />
            <Route
              path="missing_letters"
              element={<MissingLettersChallenge />}
            />
          </Route>
        </Routes>
      </HashRouter>
    </ThemeProvider>
  </StrictMode>
);
