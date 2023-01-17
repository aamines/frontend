//packages
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//files
import Home from "./pages/home";
import Main from "./pages/main";
import Login from "./pages/login";
import Nav from "./components/nav";
import Signup from "./pages/signup";
import Contact from "./pages/contact";
import Profile from "./pages/profile/profile";
import CreateCommunity from "./pages/community/create";

//globals
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        {/* indexes */}
        <Route path="/" exact element={<Main />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/signup" exact element={<Signup />} />
        {/* Community */}
        <Route path="/community/new" exact element={<CreateCommunity />} />
        {/* Posting */}
        <Route path="/profile" exact element={<Profile />} />
        <Route path="/home" exact element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
