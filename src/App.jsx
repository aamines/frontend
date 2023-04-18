//packages
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages
import Home from "./pages/home";
import Main from "./pages/main";
import Login from "./pages/login";
import Stories from "./pages/stories";
import Contact from "./pages/contact";
import Verify from "./pages/signup/verify";
import Signup from "./pages/signup/signup";
import Profile from "./pages/profile/profile";
import ResetPassword from "./pages/password/reset";
import ForgotPassword from "./pages/password/forgot";
import CreateCommunity from "./pages/community/create";

//components
import Nav from "./components/nav";
import Two from "./components/community/two";
import One from "./components/community/one";
import Story from "./components/stories/view";
import Three from "./components/community/three";
import CreateText from "./components/stories/createtext";
import CreateMedia from "./components/stories/createmedia";

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
        <Route path="/verify" exact element={<Verify />} />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/contact" exact element={<Contact />} />
        {/* Password */}
        <Route path="/password/reset" exact element={<ResetPassword />} />
        <Route path="/password/forgot" exact element={<ForgotPassword />} />
        {/* Community */}
        <Route path="/community/new/" exact element={<CreateCommunity />}>
          <Route index exact element={<One />} />
          <Route path="two" exact element={<Two />} />
          <Route path="three" exact element={<Three />} />
        </Route>
        <Route path="/profile" exact element={<Profile />} />

        {/* Client */}

        {/* Posting */}
        <Route path="/client/:id/home" exact element={<Home />} />
        <Route path="/client/:id/profile" exact element={<Profile />} />
        {/* Stories */}
        <Route path="/stories/client/:id" exact element={<Stories />}>
          <Route index exact element={<Story />} />
          <Route path="create-text" exact element={<CreateText />} />
          <Route path="create-media" exact element={<CreateMedia />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
