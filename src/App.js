import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Bank from "./components/Bank";
import Profile from "./components/Profile";
import ErrorPage from "./components/ErrorPage";
import { useSelector } from "react-redux";
function App() {
  const account = useSelector((state) => state.account);
  const { name, age } = useSelector((state) => state.form);
  
  return (
    <>
      <h1>{name} has {account} dollars and {age} years</h1>
      <Router>
        <ul>
          <li><Link to="/"> Home </Link></li>
          <li><Link to="/bank"> Bank </Link></li>
          <li><Link to="/profile/23"> Profile </Link></li>
        </ul>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bank" element={<Bank />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
