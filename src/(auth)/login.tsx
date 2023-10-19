import { Link } from "react-router-dom";

// icons
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div className="flex h-[100vh] w-[100vw] bg-background">
      <div className="flex flex-col h-[100%] w-1/2 items-center justify-center">
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-2xl text-dark mb-2">
            Welcome to <span className="text-bright">Projectia!</span>
          </h2>
          <p>Welcome back to your professional community!</p>
        </div>
        <form className="mt-10 w-1/2">
          <div className="flex h-12 w-full overflow-hidden rounded-md mb-6">
            <input
              type="text"
              placeholder="Email"
              className="w-full h-full outline-none pl-4"
            />
          </div>
          <div className="flex h-12 w-full overflow-hidden rounded-md mb-6">
            <input
              type="password"
              placeholder="Password"
              className="w-full h-full outline-none pl-4"
            />
          </div>
          <div className="flex justify-between mb-6 px-1">
            <div className="flex">
              <input type="checkbox" name="remember" id="remember" />
              <label htmlFor="remember" className="ml-2 text-dark">
                Remember Me
              </label>
            </div>
            <div className="flex">
              <Link to="/forgot-password" className="text-dark">
                Forgot Password?
              </Link>
            </div>
          </div>
          <div className="flex h-12 w-full overflow-hidden rounded-md mb-6">
            <button className="w-full h-full outline-none bg-bright text-white">
              Login
            </button>
          </div>
          <div className="flex h-12 w-full overflow-hidden rounded-md mb-6 border-2 border-dark items-center justify-center cursor-pointer">
            <FcGoogle className="text-2xl" />
            <p className="ml-2 text-dark">Sign in with Google</p>
          </div>
        </form>
        <div className="flex mt-10">
          <p className="text-dark">Don't have account yet?</p>
          <Link to={"/signup"} className="ml-2 text-bright">
            Sign up
          </Link>
        </div>
      </div>
      <div className="flex-col h-[100%] w-1/2 bg-white"></div>
    </div>
  );
};

export default Login;
