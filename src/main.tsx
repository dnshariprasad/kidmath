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

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <Navbar />
      <Routes>
        {/* Parent route with the Layout */}
        <Route path="/" element={<Dashboard />}>
          <Route index element={<Welcome />} />
          <Route path="counting" element={<MathChallenge />} />
          <Route path="sight_words" element={<SightWordsChallenge />} />
          <Route path="alphabet" element={<AlphabetChallenge />} />
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>
);
