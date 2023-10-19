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
      <div className="flex mt-14">
        <img src="/welcome.png" />
      </div>
      <div className="flex mt-14">
        <p className="text-dark">Feeling lost?</p>
        <Link to={"/signup"} className="ml-2 text-bright">
          Get Back
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
