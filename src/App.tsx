import { Routes, Route } from "react-router-dom";

// pages
import Login from "./(auth)/login";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
};

export default App;
