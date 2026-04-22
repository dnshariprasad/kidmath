import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import Navbar from "./dashboard/nav/index.tsx";
import ErrorBoundary from "./components/ErrorBoundary.tsx";
import SharedCertificate from "./components/SharedCertificate/index.tsx";
import { ConnectedThemeProvider, NameRequiredRoute, LoadingState } from "./AppComponents";

// Lazy load pages
const Dashboard = lazy(() => import("./dashboard/dashboard/index.tsx"));
const Welcome = lazy(() => import("./pages/Welcome/index.tsx"));
const AlphabetPage = lazy(() => import("./pages/english/AlphabetPage/index.tsx"));
const SightWordsChallenge = lazy(() => import("./pages/english/SightWordsChallenge/index.tsx"));
const SpellingChallenge = lazy(() => import("./pages/english/SpellingChallenge/index.tsx"));
const CrosswordSudoku = lazy(() => import("./pages/english/SudokuGame/index.tsx"));
const AlphabetHindiChallenge = lazy(() => import("./pages/hindi/AlphabetHindiChallenge/index.tsx"));
const MissingLettersChallenge = lazy(
  () => import("./pages/english/MissingLettersChallenge/index.tsx"),
);
const GreaterLessEqualGame = lazy(() => import("./pages/math/GreaterLessEqualGame/index.tsx"));
const MathChallenge = lazy(() => import("./pages/math/MathChallenge/index.tsx"));
const NumberSorter = lazy(() => import("./pages/math/NumberSorter/index.tsx"));
const MasterTest = lazy(() => import("./pages/MasterTest/index.tsx"));
const NumbersPage = lazy(() => import("./pages/math/NumbersPage/index.tsx"));

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ConnectedThemeProvider>
        <ErrorBoundary>
          <HashRouter>
            <Navbar />
            <SharedCertificate />
            <Suspense fallback={<LoadingState />}>
              <Routes>
                <Route path="/" element={<Dashboard />}>
                  <Route index element={<Welcome />} />
                  <Route
                    path="alphabet"
                    element={
                      <NameRequiredRoute>
                        <AlphabetPage />
                      </NameRequiredRoute>
                    }
                  />
                  <Route
                    path="counting"
                    element={
                      <NameRequiredRoute>
                        <MathChallenge />
                      </NameRequiredRoute>
                    }
                  />
                  <Route
                    path="learn_numbers"
                    element={
                      <NameRequiredRoute>
                        <NumbersPage />
                      </NameRequiredRoute>
                    }
                  />
                  <Route
                    path="sight_words"
                    element={
                      <NameRequiredRoute>
                        <SightWordsChallenge />
                      </NameRequiredRoute>
                    }
                  />
                  <Route
                    path="spelling"
                    element={
                      <NameRequiredRoute>
                        <SpellingChallenge />
                      </NameRequiredRoute>
                    }
                  />
                  <Route
                    path="comparison"
                    element={
                      <NameRequiredRoute>
                        <GreaterLessEqualGame />
                      </NameRequiredRoute>
                    }
                  />
                  <Route
                    path="sudoku"
                    element={
                      <NameRequiredRoute>
                        <CrosswordSudoku />
                      </NameRequiredRoute>
                    }
                  />
                  <Route
                    path="missing_letters"
                    element={
                      <NameRequiredRoute>
                        <MissingLettersChallenge />
                      </NameRequiredRoute>
                    }
                  />
                  <Route
                    path="sorting_numbers"
                    element={
                      <NameRequiredRoute>
                        <NumberSorter />
                      </NameRequiredRoute>
                    }
                  />
                  <Route
                    path="missing_numbers"
                    element={
                      <NameRequiredRoute>
                        <MissingLettersChallenge />
                      </NameRequiredRoute>
                    }
                  />
                  <Route
                    path="alphabet_hindi"
                    element={
                      <NameRequiredRoute>
                        <AlphabetHindiChallenge />
                      </NameRequiredRoute>
                    }
                  />
                  <Route
                    path="test/:testId"
                    element={
                      <NameRequiredRoute>
                        <MasterTest />
                      </NameRequiredRoute>
                    }
                  />
                  <Route
                    path="master_test"
                    element={
                      <NameRequiredRoute>
                        <MasterTest />
                      </NameRequiredRoute>
                    }
                  />
                </Route>
              </Routes>
            </Suspense>
          </HashRouter>
        </ErrorBoundary>
      </ConnectedThemeProvider>
    </Provider>
  </StrictMode>,
);
