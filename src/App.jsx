//packages
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages
import Home from "./pages/home";
import Main from "./pages/main";
import Login from "./pages/login";
import Nav from "./components/nav";
import Contact from "./pages/contact";
import Verify from "./pages/signup/verify";
import Signup from "./pages/signup/signup";
import Profile from "./pages/profile/profile";
import CreateCommunity from "./pages/community/create";

//components
import One from "./components/community/one";
import Two from "./components/community/two";
import Three from "./components/community/three";

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
        <Route path="/login" exact element={<Login />} />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/verify" exact element={<Verify />} />
        <Route path="/contact" exact element={<Contact />} />
        {/* Community */}
        <Route path="/community/new/" exact element={<CreateCommunity />}>
          <Route index exact element={<One />} />
          <Route path="two" exact element={<Two />} />
          <Route path="three" exact element={<Three />} />
        </Route>
        {/* Posting */}
        <Route path="/home" exact element={<Home />} />
        <Route path="/profile" exact element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
