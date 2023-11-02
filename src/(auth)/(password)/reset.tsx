import { useState } from "react";
import { Link } from "react-router-dom";

// icons
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  return (
    <div className="flex flex-col h-[100vh] w-[100vw] bg-background items-center justify-center">
      <div className="flex flex-col items-center">
        <h2 className="font-bold text-3xl text-dark mb-2">Reset password!</h2>
        <p>Create new password for your account.</p>
      </div>
      <form className="flex flex-col mt-14 w-1/4">
        <div className="flex h-12 w-full overflow-hidden rounded-md mb-6 relative items-center">
          <input
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            className="w-full h-full outline-none pl-4"
          />
          {showPassword ? (
            <BsFillEyeFill
              onClick={handleShowPassword}
              className="absolute right-4 text-lg cursor-pointer text-dark"
            />
          ) : (
            <BsFillEyeSlashFill
              onClick={handleShowPassword}
              className="absolute right-4 text-lg cursor-pointer text-dark"
            />
          )}
        </div>
        <div className="flex h-12 w-full overflow-hidden rounded-md mb-6 relative items-center">
          <input
            placeholder="Confirm Password"
            type={showConfirmPassword ? "text" : "password"}
            className="w-full h-full outline-none pl-4"
          />
          {showConfirmPassword ? (
            <BsFillEyeFill
              onClick={handleShowConfirmPassword}
              className="absolute right-4 text-lg cursor-pointer text-dark"
            />
          ) : (
            <BsFillEyeSlashFill
              onClick={handleShowConfirmPassword}
              className="absolute right-4 text-lg cursor-pointer text-dark"
            />
          )}
        </div>
        <div className="flex h-12 w-full overflow-hidden rounded-md mb-6">
          <button className="w-full h-full outline-none bg-bright text-white">
            Continue
          </button>
        </div>
      </form>
      <div className="flex mt-14">
        <p className="text-dark">Feeling lost?</p>
        <Link to={"/"} className="ml-2 text-bright">
          Get Back
        </Link>
      </div>
    </div>
  );
};

export default ResetPassword;
