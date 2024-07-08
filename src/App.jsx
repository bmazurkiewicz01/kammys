import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/oferta-przeprowadzki-transport" element={<About />} />
        <Route path="/przeprowadzki" element={<About />} />
        <Route path="/kontakt" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
