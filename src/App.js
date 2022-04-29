import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Profile from "./components/Profile";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <>
      <Router>
        <nav>
          <Link to="/"> Home </Link>
          <Link to="/about"> About </Link>
          <Link to="/profile/23"> Profile </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
