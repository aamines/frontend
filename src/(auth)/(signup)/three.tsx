import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="flex flex-col h-[100vh] w-[100vw] bg-background items-center justify-center">
      <div className="flex flex-col items-center">
        <h2 className="font-bold text-3xl text-dark mb-2">
          Welcome to Projectia!
        </h2>
        <p>Welcome to your professional community!</p>
      </div>
      <div className="flex items-center justify-center">
        <img src="/welcome.png" className="w-1/4" />
      </div>
      <Link
        to={"/home"}
        className="flex mt-14 w-1/6 h-12 bg-bright items-center justify-center rounded-md text-white"
      >
        Let's Go
      </Link>
    </div>
  );
};

export default Welcome;
