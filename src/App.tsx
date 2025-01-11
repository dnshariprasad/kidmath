import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MathChallenge from "./pages/MathChallenge";
import AlphabetChallenge from "./pages/AlphabetChallenge";
import SightWordsChallenge from "./pages/SightWordsChallenge";
import Layout from "./LayoutContainer";
import Welcome from "./pages/Welcome";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        {/* Parent route with the Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Welcome />} />
          <Route path="counting" element={<MathChallenge />} />
          <Route path="sight_words" element={<SightWordsChallenge />} />
          <Route path="alphabet" element={<AlphabetChallenge />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
