import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import MathChallenge from "./pages/MathChallenge";
import EnglishChallenge from "./pages/EnglishChallenge";
const Navbar = () => {
  return (
    <nav style={{ padding: "10px", backgroundColor: "#3498db" }}>
      <ul style={{ listStyleType: "none", display: "flex", gap: "20px" }}>
        {/* <li>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            kidmath
          </Link>
        </li> */}
        <li>
          <Link to="/math" style={{ color: "white", textDecoration: "none" }}>
            Math
          </Link>
        </li>
        <li>
          <Link to="/eng" style={{ color: "white", textDecoration: "none" }}>
            Eng
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
          <Route path="/math" element={<MathChallenge />} />
          <Route path="/eng" element={<EnglishChallenge />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
