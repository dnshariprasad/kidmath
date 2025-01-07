import { HashRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import MathChallenge from "./pages/MathChallenge";
import AlphabetChallenge from "./pages/AlphabetChallenge";
import SightWordsChallenge from "./pages/SightWordsChallenge";
import { Navbar } from "./KidStyles";

const App: React.FC = () => {
  return (
    <HashRouter>
      <Navbar className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link to="/" className="navbar-brand d-flex align-items-center">
            kidoo
          </Link>
          <div className="navbar-nav ml-auto d-flex align-items-center">
            <Link to="/alphabet" className="nav-link">
              Alphabets
            </Link>
            <Link to="/sight_words" className="nav-link">
              Sight Words
            </Link>
            <Link to="/counting" className="nav-link">
              Counting
            </Link>
          </div>
        </div>
      </Navbar>
      <Routes>
        <Route path="/" element={<MathChallenge />} />
        <Route path="/counting" element={<MathChallenge />} />
        <Route path="/sight_words" element={<SightWordsChallenge />} />
        <Route path="/alphabet" element={<AlphabetChallenge />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
