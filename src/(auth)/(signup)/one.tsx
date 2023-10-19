import { useState } from "react";
import { Link } from "react-router-dom";

// icons
import { FcGoogle } from "react-icons/fc";
import { FaAngleDown } from "react-icons/fa";
import { BsFillEyeSlashFill, BsFillEyeFill } from "react-icons/bs";

const Signup = () => {
  const [showGenders, setShowGenders] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showCountries, setShowCountries] = useState(false);
  const [selectedGender, setSelectedGender] = useState("Gender");
  const [selectedCountry, setSelectedCountry] = useState("Country");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleShowCountries = () => {
    setShowCountries(!showCountries);
  };

  const handleSelectCountry = (country: string) => {
    setSelectedCountry(country);
    setShowCountries(false);
  };

  const handleShowGenders = () => {
    setShowGenders(!showGenders);
  };

  const handleSelectGender = (gender: string) => {
    setSelectedGender(gender);
    setShowGenders(false);
  };

  return (
    <div className="flex flex-col h-[100vh] w-[100vw] bg-background items-center justify-center">
      <div className="flex flex-col items-center">
        <h2 className="font-bold text-3xl text-dark mb-2">Welcome here!</h2>
        <p>Create an account and start having fun!</p>
      </div>
      <form className="flex mt-14 w-1/2">
        <div className="flex flex-col w-1/2 mr-10">
          <div className="flex h-12 w-full overflow-hidden rounded-md mb-6">
            <input
              type="text"
              placeholder="Names"
              className="w-full h-full outline-none pl-4"
            />
          </div>
          <div className="flex w-full relative">
            <div
              onClick={handleShowCountries}
              className="flex w-full h-12 mb-6 bg-white rounded-md justify-between items-center px-5"
            >
              <p
                className={
                  selectedCountry === "Country" ? "text-gray" : "text-dark"
                }
              >
                {selectedCountry}
              </p>
              <FaAngleDown className="text-lg" />
            </div>
            {showCountries && (
              <ul className="z-10 absolute top-12 bg-white rounded-lg shadow w-full px-4 py-4 dark:bg-gray-700">
                <li
                  className="py-2 cursor-pointer"
                  onClick={() => handleSelectCountry("Saad")}
                >
                  <p>Saad</p>
                </li>
                <li
                  className="py-2 cursor-pointer"
                  onClick={() => handleSelectCountry("Byiringiro")}
                >
                  <p>Byiringiro</p>
                </li>
              </ul>
            )}
          </div>
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
          <div className="flex h-12 w-full overflow-hidden rounded-md mb-6 border-2 border-dark items-center justify-center cursor-pointer">
            <FcGoogle className="text-2xl" />
            <p className="ml-2 text-dark">Sign in with Google</p>
          </div>
        </div>
        <div className="flex flex-col w-1/2">
          <div className="flex h-12 w-full overflow-hidden rounded-md mb-6">
            <input
              type="text"
              placeholder="Email"
              className="w-full h-full outline-none pl-4"
            />
          </div>
          <div className="flex w-full relative">
            <div
              onClick={handleShowGenders}
              className="flex w-full h-12 mb-6 bg-white rounded-md justify-between items-center px-5"
            >
              <p
                className={
                  selectedGender === "Gender" ? "text-gray" : "text-dark"
                }
              >
                {selectedGender}
              </p>
              <FaAngleDown className="text-lg" />
            </div>
            {showGenders && (
              <ul className="z-10 absolute top-12 bg-white rounded-lg shadow w-full px-4 py-4 dark:bg-gray-700">
                <li
                  className="py-2 cursor-pointer"
                  onClick={() => handleSelectGender("Male")}
                >
                  <p>Male</p>
                </li>
                <li
                  className="py-2 cursor-pointer"
                  onClick={() => handleSelectGender("Female")}
                >
                  <p>Female</p>
                </li>
                <li
                  className="py-2 cursor-pointer"
                  onClick={() => handleSelectGender("Other")}
                >
                  <p>Other</p>
                </li>
              </ul>
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
              Signup
            </button>
          </div>
        </div>
      </form>
      <div className="flex mt-14">
        <p className="text-dark">Already have an account?</p>
        <Link to={"/"} className="ml-2 text-bright">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Signup;
