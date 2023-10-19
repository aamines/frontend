import { Routes, Route } from "react-router-dom";

// pages
import Login from "./(auth)/login";
import Signup from "./(auth)/(signup)/one";
import Welcome from "./(auth)/(signup)/three";
import Verification from "./(auth)/(signup)/two";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signup/welcome" element={<Welcome />} />
      <Route path="/signup/verification" element={<Verification />} />
    </Routes>
  );
};

export default App;
