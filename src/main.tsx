import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";

import { HashRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import Navbar from "./components/layout/Navbar/index.tsx";
import ErrorBoundary from "./components/ErrorBoundary.tsx";
import SharedCertificate from "./components/SharedCertificate/index.tsx";
import { ConnectedThemeProvider, LoadingState, AuthStateListener } from "./providers/AppProviders";
import { ProtectedRoute } from "./components/auth/ProtectedRoute";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Lazy load pages
const MainLayout = lazy(() => import("./components/layout/MainLayout/index.tsx"));
const Welcome = lazy(() => import("./pages/Welcome/index.tsx"));
const Login = lazy(() => import("./pages/Login/index.tsx"));
const AlphabetPage = lazy(() => import("./modules/activities/english/AlphabetPage/index.tsx"));
const SightWordsChallenge = lazy(
  () => import("./modules/activities/english/SightWordsChallenge/index.tsx"),
);
const SpellingChallenge = lazy(
  () => import("./modules/activities/english/SpellingChallenge/index.tsx"),
);
const CrosswordSudoku = lazy(() => import("./modules/activities/english/SudokuGame/index.tsx"));
const AlphabetHindiChallenge = lazy(
  () => import("./modules/activities/hindi/AlphabetHindiChallenge/index.tsx"),
);
const AlphabetTeluguChallenge = lazy(
  () => import("./modules/activities/telugu/AlphabetTeluguChallenge/index.tsx"),
);
const WeeksPage = lazy(() => import("./modules/activities/english/WeeksPage/index.tsx"));
const MonthsPage = lazy(() => import("./modules/activities/english/MonthsPage/index.tsx"));
const WeeksTeluguPage = lazy(() => import("./modules/activities/telugu/WeeksTeluguPage/index.tsx"));
const WeeksHindiPage = lazy(() => import("./modules/activities/hindi/WeeksHindiPage/index.tsx"));
const ShapesPage = lazy(() => import("./modules/activities/math/ShapesPage/index.tsx"));
const NumbersEnglishPage = lazy(
  () => import("./modules/activities/english/NumbersEnglishPage/index.tsx"),
);
const NumbersHindiPage = lazy(
  () => import("./modules/activities/hindi/NumbersHindiPage/index.tsx"),
);
const NumbersTeluguPage = lazy(
  () => import("./modules/activities/telugu/NumbersTeluguPage/index.tsx"),
);
const MonthsTeluguPage = lazy(
  () => import("./modules/activities/telugu/MonthsTeluguPage/index.tsx"),
);
const MonthsHindiPage = lazy(() => import("./modules/activities/hindi/MonthsHindiPage/index.tsx"));
const PlaceValuesPage = lazy(() => import("./modules/activities/math/PlaceValuesPage/index.tsx"));
const BodyPartsPage = lazy(() => import("./modules/activities/science/BodyPartsPage/index.tsx"));
const SenseOrgansPage = lazy(
  () => import("./modules/activities/science/SenseOrgansPage/index.tsx"),
);
const MissingLettersChallenge = lazy(
  () => import("./modules/activities/english/MissingLettersChallenge/index.tsx"),
);
const GreaterLessEqualGame = lazy(
  () => import("./modules/activities/math/GreaterLessEqualGame/index.tsx"),
);
const MathChallenge = lazy(() => import("./modules/activities/math/MathChallenge/index.tsx"));
const NumberSorter = lazy(() => import("./modules/activities/math/NumberSorter/index.tsx"));
const MasterTest = lazy(() => import("./pages/MasterTest/index.tsx"));
const NumbersPage = lazy(() => import("./modules/activities/math/NumbersPage/index.tsx"));
const TestHistory = lazy(() => import("./pages/TestHistory/index.tsx"));

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ConnectedThemeProvider>
        <ErrorBoundary>
          <HashRouter>
            <ScrollToTop />
            <AuthStateListener>
              <Navbar />
              <SharedCertificate />
              <Suspense fallback={<LoadingState />}>
                <Routes>
                  <Route path="/login" element={<Login />} />
                  <Route
                    path="/"
                    element={
                      <ProtectedRoute>
                        <MainLayout />
                      </ProtectedRoute>
                    }
                  >
                    <Route index element={<Welcome />} />
                    <Route
                      path="alphabet"
                      element={
                        <ProtectedRoute>
                          <AlphabetPage />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="counting"
                      element={
                        <ProtectedRoute>
                          <MathChallenge />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="learn_numbers"
                      element={
                        <ProtectedRoute>
                          <NumbersPage />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="sight_words"
                      element={
                        <ProtectedRoute>
                          <SightWordsChallenge />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="spelling"
                      element={
                        <ProtectedRoute>
                          <SpellingChallenge />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="comparison"
                      element={
                        <ProtectedRoute>
                          <GreaterLessEqualGame />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="sudoku"
                      element={
                        <ProtectedRoute>
                          <CrosswordSudoku />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="missing_letters"
                      element={
                        <ProtectedRoute>
                          <MissingLettersChallenge />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="sorting_numbers"
                      element={
                        <ProtectedRoute>
                          <NumberSorter />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="missing_numbers"
                      element={
                        <ProtectedRoute>
                          <MissingLettersChallenge />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="alphabet_hindi"
                      element={
                        <ProtectedRoute>
                          <AlphabetHindiChallenge />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="alphabet_telugu"
                      element={
                        <ProtectedRoute>
                          <AlphabetTeluguChallenge />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="weeks_english"
                      element={
                        <ProtectedRoute>
                          <WeeksPage />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="months_english"
                      element={
                        <ProtectedRoute>
                          <MonthsPage />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="weeks_telugu"
                      element={
                        <ProtectedRoute>
                          <WeeksTeluguPage />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="weeks_hindi"
                      element={
                        <ProtectedRoute>
                          <WeeksHindiPage />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="shapes"
                      element={
                        <ProtectedRoute>
                          <ShapesPage />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="place_values"
                      element={
                        <ProtectedRoute>
                          <PlaceValuesPage />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="numbers_english_spelling"
                      element={
                        <ProtectedRoute>
                          <NumbersEnglishPage />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="numbers_hindi"
                      element={
                        <ProtectedRoute>
                          <NumbersHindiPage />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="numbers_telugu"
                      element={
                        <ProtectedRoute>
                          <NumbersTeluguPage />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="months_telugu"
                      element={
                        <ProtectedRoute>
                          <MonthsTeluguPage />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="months_hindi"
                      element={
                        <ProtectedRoute>
                          <MonthsHindiPage />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="body_parts"
                      element={
                        <ProtectedRoute>
                          <BodyPartsPage />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="sense_organs"
                      element={
                        <ProtectedRoute>
                          <SenseOrgansPage />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="test/:testId"
                      element={
                        <ProtectedRoute>
                          <MasterTest />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="master_test"
                      element={
                        <ProtectedRoute>
                          <MasterTest />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="test_history"
                      element={
                        <ProtectedRoute>
                          <TestHistory />
                        </ProtectedRoute>
                      }
                    />
                  </Route>
                </Routes>
              </Suspense>
            </AuthStateListener>
          </HashRouter>
        </ErrorBoundary>
      </ConnectedThemeProvider>
    </Provider>
  </StrictMode>,
);
