//packages
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages
import Home from "./pages/home";
import Main from "./pages/main";
import Login from "./pages/login";
import Contact from "./pages/contact";
import Verify from "./pages/signup/verify";
import Signup from "./pages/signup/signup";
import Profile from "./pages/profile/profile";
import Memories from "./pages/memories/memories";
import ResetPassword from "./pages/password/reset";
import CreateMemory from "./pages/memories/create";
import ForgotPassword from "./pages/password/forgot";
import CreateCommunity from "./pages/community/create";

//components
import Nav from "./components/nav";
import Two from "./components/community/two";
import One from "./components/community/one";
import Three from "./components/community/three";
import CreateText from "./components/memories/createtext";
import CreateMedia from "./components/memories/createmedia";

//globals
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//features
import axios from "./features/axios";

//actions
import {
  removeToken,
  removeAccount,
  setHasAccount,
  removeCommunity,
  setAuthenticated,
  setTokenVerified,
} from "./store/reducers/persist";

function App() {
  //config
  const dispatch = useDispatch();

  //redux data
  const token = useSelector((state) => state.persist.token);

  useEffect(() => {
    if (token?.length > 0) {
      axios
        .post("/auth/verify-token", {
          token: `${token}`,
        })
        .then(() => {
          dispatch(setHasAccount(true));
          dispatch(setTokenVerified(true));
          dispatch(setAuthenticated(true));
        })
        .catch(() => {
          dispatch(removeToken());
          dispatch(removeAccount());
          dispatch(removeCommunity());
          dispatch(setHasAccount(false));
          dispatch(setAuthenticated(false));
          dispatch(setTokenVerified(false));
        });
    }
  }, [token, dispatch]);

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
        <Route path="/client/:account/home" exact element={<Home />} />
        <Route path="/client/:account/profile" exact element={<Profile />} />
        {/* Memories */}
        <Route path="/client/:account/create" exact element={<CreateMemory />}>
          <Route path="text" exact element={<CreateText />} />
          <Route path="media" exact element={<CreateMedia />} />
        </Route>
        <Route
          path="/client/:account/memories/:memory"
          exact
          element={<Memories />}
        />
      </Routes>
    </Router>
  );
}

export default App;
