//packages
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//files
import Main from "./pages/main";
import Nav from "./components/nav";

//globals
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" exact element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
