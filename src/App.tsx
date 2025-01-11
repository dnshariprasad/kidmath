import { HashRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import MathChallenge from "./pages/MathChallenge";
import AlphabetChallenge from "./pages/AlphabetChallenge";
import SightWordsChallenge from "./pages/SightWordsChallenge";
import { Navbar } from "./KidStyles";
import Layout from "./LayoutContainer";
import Welcome from "./pages/Welcome";

const App: React.FC = () => {
  return (
    <HashRouter>
      <Navbar className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <div className="navbar-nav ml-auto d-flex align-items-center">
            <Link to="/" className="navbar-brand d-flex align-items-center">
              kiddoo
            </Link>
          </div>
        </div>
      </Navbar>

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
