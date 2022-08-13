//packages
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//files
import Nav from "./components/nav";
import Login from "./pages/login";
import Main from "./pages/main";
import Signup from "./pages/signup";
import Waitlist from "./pages/waitlist";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="/waitlist" exact element={<Waitlist />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/signup" exact element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
