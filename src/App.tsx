import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import MathChallenge from "./pages/MathChallenge";
import AlphabetChallenge from "./pages/AlphabetChallenge";
import SightWordsChallenge from "./pages/SightWordsChallenge";
const Navbar = () => {
  return (
    <nav style={{ padding: "10px", backgroundColor: "#3498db" }}>
      <ul style={{ listStyleType: "none", display: "flex", gap: "20px" }}>
        <li>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            kido
          </Link>
        </li>
        <li>
          <Link
            to="/counting"
            style={{ color: "white", textDecoration: "none" }}
          >
            Counting
          </Link>
        </li>
        <li>
          <Link
            to="/sight_words"
            style={{ color: "white", textDecoration: "none" }}
          >
            Sight Words
          </Link>
        </li>
        <li>
          <Link
            to="/alphabet"
            style={{ color: "white", textDecoration: "none" }}
          >
            Alphabet
          </Link>
        </li>
      </ul>
    </nav>
  );
};
function App() {
  return (
    <BrowserRouter>
      <Navbar /> {/* Navbar with Links */}
      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<MathChallenge />} />
          <Route path="/counting" element={<MathChallenge />} />
          <Route path="/sight_words" element={<SightWordsChallenge />} />
          <Route path="/alphabet" element={<AlphabetChallenge />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
