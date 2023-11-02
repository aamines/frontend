import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className="flex flex-col h-[100vh] w-[100vw] bg-background items-center justify-center">
      <div className="flex flex-col items-center">
        <h2 className="font-bold text-3xl text-dark mb-2">Forgot password!</h2>
        <p>Please enter the email address associated with your account</p>
      </div>
      <form className="flex flex-col mt-14 w-1/4">
        <div className="flex h-12 w-full overflow-hidden rounded-md mb-6">
          <input
            type="text"
            placeholder="Email"
            className="w-full h-full outline-none pl-4"
          />
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

export default ForgotPassword;
