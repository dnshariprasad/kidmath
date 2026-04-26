import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";

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
const AlphabetTeluguChallenge = lazy(
  () => import("./pages/telugu/AlphabetTeluguChallenge/index.tsx"),
);
const WeeksPage = lazy(() => import("./pages/english/WeeksPage/index.tsx"));
const MonthsPage = lazy(() => import("./pages/english/MonthsPage/index.tsx"));
const WeeksTeluguPage = lazy(() => import("./pages/telugu/WeeksTeluguPage/index.tsx"));
const WeeksHindiPage = lazy(() => import("./pages/hindi/WeeksHindiPage/index.tsx"));
const ShapesPage = lazy(() => import("./pages/math/ShapesPage/index.tsx"));
const NumbersEnglishPage = lazy(() => import("./pages/english/NumbersEnglishPage/index.tsx"));
const NumbersHindiPage = lazy(() => import("./pages/hindi/NumbersHindiPage/index.tsx"));
const NumbersTeluguPage = lazy(() => import("./pages/telugu/NumbersTeluguPage/index.tsx"));
const MonthsTeluguPage = lazy(() => import("./pages/telugu/MonthsTeluguPage/index.tsx"));
const MonthsHindiPage = lazy(() => import("./pages/hindi/MonthsHindiPage/index.tsx"));
const PlaceValuesPage = lazy(() => import("./pages/math/PlaceValuesPage/index.tsx"));
const BodyPartsPage = lazy(() => import("./pages/science/BodyPartsPage/index.tsx"));
const SenseOrgansPage = lazy(() => import("./pages/science/SenseOrgansPage/index.tsx"));
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
                    path="alphabet_telugu"
                    element={
                      <NameRequiredRoute>
                        <AlphabetTeluguChallenge />
                      </NameRequiredRoute>
                    }
                  />
                  <Route
                    path="weeks_english"
                    element={
                      <NameRequiredRoute>
                        <WeeksPage />
                      </NameRequiredRoute>
                    }
                  />
                  <Route
                    path="months_english"
                    element={
                      <NameRequiredRoute>
                        <MonthsPage />
                      </NameRequiredRoute>
                    }
                  />
                  <Route
                    path="weeks_telugu"
                    element={
                      <NameRequiredRoute>
                        <WeeksTeluguPage />
                      </NameRequiredRoute>
                    }
                  />
                  <Route
                    path="weeks_hindi"
                    element={
                      <NameRequiredRoute>
                        <WeeksHindiPage />
                      </NameRequiredRoute>
                    }
                  />
                  <Route
                    path="shapes"
                    element={
                      <NameRequiredRoute>
                        <ShapesPage />
                      </NameRequiredRoute>
                    }
                  />
                  <Route
                    path="place_values"
                    element={
                      <NameRequiredRoute>
                        <PlaceValuesPage />
                      </NameRequiredRoute>
                    }
                  />
                  <Route
                    path="numbers_english_spelling"
                    element={
                      <NameRequiredRoute>
                        <NumbersEnglishPage />
                      </NameRequiredRoute>
                    }
                  />
                  <Route
                    path="numbers_hindi"
                    element={
                      <NameRequiredRoute>
                        <NumbersHindiPage />
                      </NameRequiredRoute>
                    }
                  />
                  <Route
                    path="numbers_telugu"
                    element={
                      <NameRequiredRoute>
                        <NumbersTeluguPage />
                      </NameRequiredRoute>
                    }
                  />
                  <Route
                    path="months_telugu"
                    element={
                      <NameRequiredRoute>
                        <MonthsTeluguPage />
                      </NameRequiredRoute>
                    }
                  />
                  <Route
                    path="months_hindi"
                    element={
                      <NameRequiredRoute>
                        <MonthsHindiPage />
                      </NameRequiredRoute>
                    }
                  />
                  <Route
                    path="body_parts"
                    element={
                      <NameRequiredRoute>
                        <BodyPartsPage />
                      </NameRequiredRoute>
                    }
                  />
                  <Route
                    path="sense_organs"
                    element={
                      <NameRequiredRoute>
                        <SenseOrgansPage />
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
