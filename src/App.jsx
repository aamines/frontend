//packages
import React, { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, useLocation } from "react-router-dom";

//pages
import Home from "./pages/home";
import Main from "./pages/main";
import Login from "./pages/login";
import Members from "./pages/members";
import Contact from "./pages/contact";
import Welcome from "./pages/welcome";
import Verify from "./pages/signup/verify";
import Signup from "./pages/signup/signup";
import Profile from "./pages/profile/profile";
import Settings from "./pages/profile/settings";
import Memories from "./pages/memories/memories";
import ResetPassword from "./pages/password/reset";
import CreateMemory from "./pages/memories/create";
import ForgotPassword from "./pages/password/forgot";
import CreateCommunity from "./pages/community/create";

//components
import Nav from "./components/nav";
import One from "./components/community/one";
import Two from "./components/community/two";
import Three from "./components/community/three";
import Groups from "./components/members/groups";
import People from "./components/members/people";
import CreateText from "./components/memories/createtext";
import CreateMedia from "./components/memories/createmedia";
import ProfileSettings from "./components/settings/profile";
import SecuritySettings from "./components/settings/security";
import CommunitySettings from "./components/settings/community";
import NotificationSettings from "./components/settings/notification";

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
  const location = useLocation();

  //redux data
  const token = useSelector((state) => state.persist.token);

  useEffect(() => {
    if (token?.length > 0) {
      axios
        .post("/auth/verify-token", {
          token: `${token}`,
        })
        .then(() => {
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
    <AnimatePresence>
      <Nav />
      <Routes location={location} key={location.pathname}>
        {/* indexes */}
        <Route path="/" exact element={<Main />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/verify" exact element={<Verify />} />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/welcome" exact element={<Welcome />} />

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
        <Route path="/client/:account/home" exact element={<Home />} />
        <Route path="/client/:account/profile" exact element={<Profile />} />
        <Route path="/client/:account/settings" exact element={<Settings />}>
          <Route path="profile" exact element={<ProfileSettings />} />
          <Route path="security" exact element={<SecuritySettings />} />
          <Route path="community" exact element={<CommunitySettings />} />
          <Route path="notification" exact element={<NotificationSettings />} />
        </Route>
        <Route path="/client/:account/all" exact element={<Members />}>
          <Route path="groups" exact element={<Groups />} />
          <Route path="members" exact element={<People />} />
        </Route>

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
    </AnimatePresence>
  );
}

export default App;
