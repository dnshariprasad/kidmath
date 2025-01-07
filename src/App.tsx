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
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <h2>kidoo</h2>
          </Link>
          <Link to="/alphabet" className="nav-link d-inline-block">
            Alphabet
          </Link>
          <Link to="/sight_words" className="nav-link d-inline-block">
            Sight Words
          </Link>
          <Link to="/counting" className="nav-link d-inline-block">
            Counting
          </Link>
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
