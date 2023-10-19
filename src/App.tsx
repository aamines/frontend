import { Routes, Route } from "react-router-dom";

// pages
import Login from "./(auth)/login";
import Signup from "./(auth)/(signup)/one";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default App;
