//packages
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//files
import Main from "./pages/main";
import Nav from "./components/nav";
import Contact from "./pages/contact";
import Explore from "./pages/explore";

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
        <Route path="/explore" exact element={<Explore />} />
      </Routes>
    </Router>
  );
}

export default App;
