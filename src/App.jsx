//packages
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//files
import Main from "./pages/main";
import Nav from "./components/nav";
import Contact from "./pages/contact";

//globals
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="/contact" exact element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
