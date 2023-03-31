import styled from "styled-components";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

//features
import axios from "../../features/axios";
import app from "../../features/firebase";
import { useSelector } from "react-redux";

const Signup = () => {
  //configs
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //local data
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const countries = useSelector((state) => state.countries);

  //handle google signup
  const handleGoogle = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);

    //popup
    signInWithPopup(auth, provider).then((result) => {
      console.log(result);
    });
  };

  const handleSubmision = (data) => {
    setLoading(true);
    axios
      .post("/auth/register", {
        names: data.names,
        email: data.email,
        country: data.country,
        password: data.password,
      })
      .then((res) => {
        setLoading(false);
        localStorage.setItem("projectia_auth_token", res.data.token);
        navigate("/profile");
      })
      .catch((error) => {
        setLoading(false);
        if (error.response.data.message.length < 100) {
          setError(error.response.data.message);
          return;
        } else {
          setError("Something went wrong");
          return;
        }
      });
  };

  return (
    <Container>
      <div className="content">
        <div className="header">
          <p className="head">Welcome here!</p>
          <p className="para">Create an account and start having fun.</p>
        </div>
        <div className="error_message">
          <p>{error}</p>
        </div>
        <form action="#" onSubmit={handleSubmit(handleSubmision)}>
          <div className="box">
            <p className="error">
              {errors.names?.type === "required" && "Names are required"}
              {errors.names?.type === "minLength" && "Names are too short"}
              {errors.names?.type === "maxLength" && "Names are too long"}
            </p>
            <input
              type="text"
              placeholder="Names"
              className={errors.names ? "has_error" : ""}
              {...register("names", {
                minLength: 5,
                maxLength: 50,
                required: true,
              })}
            />
          </div>
          <div className="box">
            <p className="error">
              {errors.email?.type === "required" && "Email is required"}
              {errors.email?.type === "minLength" && "Email is too short"}
              {errors.email?.type === "maxLength" && "Email is too long"}
            </p>
            <input
              type="text"
              placeholder="Email"
              className={errors.email ? "has_error" : ""}
              {...register("email", {
                required: true,
                minLength: 10,
                maxLength: 60,
              })}
            />
          </div>
          <div className="box">
            <p className="error">
              {errors.country?.type === "required" && "Country is required"}
              {errors.country?.type === "minLength" && "Country is too short"}
              {errors.country?.type === "maxLength" && "Country is too long"}
            </p>
            <select
              name="country"
              id="country"
              className={errors.country ? "has_error" : ""}
              placeholder="Country"
              {...register("country", {
                required: true,
                minLength: 2,
                maxLength: 40,
              })}
            >
              {countries.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
          <div className="box">
            <p className="error">
              {errors.password?.type === "required" && "Password is required"}
              {errors.password?.type === "minLength" && "Password is too short"}
              {errors.password?.type === "maxLength" && "Password is too long"}
            </p>
            <input
              type="password"
              placeholder="Password"
              className={errors.password ? "has_error" : ""}
              {...register("password", {
                required: true,
                minLength: 8,
                maxLength: 15,
              })}
            />
          </div>
          <div className="row" onClick={handleGoogle}>
            <img src="/icons/google.png" alt="Google" />
            <p>Sign in with Google</p>
          </div>
          <button type="submit">
            {loading ? <img src="/loader.svg" alt="loader" /> : "Sign up"}
          </button>
        </form>
        <div className="login">
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  height: calc(100vh - 70px);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .content {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media only screen and (min-width: 1200px) {
      width: 1200px;
    }

    @media only screen and (max-width: 1200px) {
      width: 90%;
    }

    .header {
      width: 100%;
      height: auto;
      display: flex;
      padding: 0 40px;
      margin: 20px;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      p.head {
        font-size: 2rem;
        font-weight: 800;
        color: var(--white);
      }

      p {
        color: var(--bright);
        text-align: center;
      }
    }

    .error_message {
      width: 100%;
      height: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 30px;

      p {
        color: var(--red);
      }
    }

    form {
      width: 70%;
      height: auto;
      margin: 0 0 80px 0;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 50px;

      .box {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;

        p.error {
          color: var(--red);
          margin: 0 0 5px 0;
        }
      }

      .has_error {
        border: 1px solid var(--red);
      }

      input {
        width: 100%;
        height: 50px;
        padding: 0 15px;
        border: none;
        border-radius: 5px;
        outline: none;
        background: var(--grayish);
        color: var(--white);
        margin: 0 0 15px 0;
      }

      select {
        width: 100%;
        height: 50px;
        padding: 0 15px;
        margin: 0 0 15px 0;
        border: none;
        border-radius: 5px;
        outline: none;
        background: var(--grayish);
        color: var(--white);
      }

      button {
        width: 100%;
        height: 50px;
        padding: 0 15px;
        margin: 0 0 15px 0;
        border: none;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        outline: none;
        background: var(--bright);

        img {
          width: 12%;
        }
      }

      .row {
        width: 100%;
        height: 50px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        border-radius: 5px;
        border: 1px solid var(--white);

        p {
          color: var(--white);
        }

        img {
          width: 25px;
          margin: 0 5px 0 0;
        }
      }
    }

    .login {
      width: 100%;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;

      p {
        color: var(--white);

        a {
          color: var(--bright);
          text-decoration: none;
        }
      }
    }
  }
`;

export default Signup;
