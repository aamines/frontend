import { Routes, Route } from "react-router-dom";

// pages
import Login from "./(auth)/login";
import Signup from "./(auth)/(signup)/one";
import Welcome from "./(auth)/(signup)/three";
import Verification from "./(auth)/(signup)/two";
import CheckEmail from "./(auth)/(password)/check";
import ResetPassword from "./(auth)/(password)/reset";
import ForgotPassword from "./(auth)/(password)/email";
import PasswordReseted from "./(auth)/(password)/success";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signup/welcome" element={<Welcome />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/forgot-password/email" element={<CheckEmail />} />
      <Route path="/signup/verification" element={<Verification />} />
      <Route path="/reset-password/success" element={<PasswordReseted />} />
    </Routes>
  );
};

export default App;
