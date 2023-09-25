import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Blue from "./Blue";
import Home from "./Home";
import Red from "./Red";
import Purple from "./Purple";

function App(color) {
  return (
    <>
      <div id="container">
        <h1>=ROUTE=</h1>
        <div id="navbar">
          <Link to="/">Home</Link>
          <Link to="/blue">Blue</Link>
          <Link to="/red">Red</Link>
          <Link to="/purple">Purple</Link>
        </div>
        <div id="main-section">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blue" element={<Blue />} />
            <Route path="/red" element={<Red />} />
            <Route path="/purple" element={<Purple />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
