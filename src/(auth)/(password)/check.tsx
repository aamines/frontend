import { Link } from "react-router-dom";

const CheckEmail = () => {
  return (
    <div className="flex flex-col h-[100vh] w-[100vw] bg-background items-center justify-center">
      <div className="flex flex-col items-center">
        <h2 className="font-bold text-3xl text-dark mb-2">Check your email!</h2>
        <p>We have sent a change password link to you email inbox!</p>
      </div>
      <div className="flex h-12 w-1/4 overflow-hidden rounded-md mt-12">
        <Link
          to={"/"}
          className="flex w-full h-full outline-none bg-bright text-white items-center justify-center"
        >
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default CheckEmail;
