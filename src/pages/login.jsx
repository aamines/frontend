import styled from "styled-components";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

//features
import app from "../features/firebase";
import axios from "../features/axios";

const Login = () => {
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

  //handle google login
  const handleGoogle = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);

    //popup
    signInWithPopup(auth, provider).then((result) => {
      console.log(result);
    });
  };

  //handle email login
  const onSubmit = (data) => {
    setLoading(true);
    axios
      .post("/auth/login", {
        email: data.email,
        password: data.password,
      })
      .then((res) => {
        setLoading(false);
        localStorage.setItem("projectia_auth_token", res.data.token);
        navigate("/home");
      })
      .catch((error) => {
        setLoading(false);
        setError(error.response.data.message);
      });
  };

  return (
    <Container>
      <div className="right">
        <div className="header">
          <p className="head">Welcome back!</p>
          <p className="para">Welcome back to your professional community.</p>
        </div>
        <div className="error_message">
          <p>{error}</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
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
          <div className="row">
            <div className="left_">
              <input type="checkbox" name="remember" id="remember" />
              <label htmlFor="remember">Remember Me</label>
            </div>
            <div className="right_">
              <Link to="#">Forgot password?</Link>
            </div>
          </div>
          <button type="submit">
            {loading ? <img src="/loader.svg" alt="loader" /> : "Login"}
          </button>
          <div className="google" onClick={handleGoogle}>
            <img src="/icons/google.png" alt="Google" />
            <p>Sign in with google</p>
          </div>
        </form>
        <p>
          Don't have an account yet? <Link to="/signup">Sign up</Link>
        </p>
      </div>
      <div className="left"></div>
    </Container>
  );
};

const Container = styled.div`
  height: calc(100vh - 70px);
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  .left {
    width: 50%;
    height: 100%;
    background: var(--gray);
  }

  .right {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px 0;
    background: var(--light);

    .header {
      width: 100%;
      height: 100px;
      margin: 0 0 10px 0;
      display: flex;
      padding: 0 40px;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      p.head {
        font-size: 2rem;
        font-weight: 800;
        color: var(--dark);
      }

      p {
        color: var(--dark);
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
      width: 500px;
      height: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 0 50px 0;

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

      input[type="text"],
      input[type="password"] {
        width: 100%;
        height: 45px;
        margin: 8px 0;
        padding: 0 15px;
        border: none;
        border-radius: 5px;
        outline: none;
        background: var(--gray);
      }

      .row {
        width: 100%;
        height: 45px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin: 8px 0;
        padding: 0 5px;

        a {
          color: var(--dark);
          text-decoration: none;
        }

        .left_ {
          width: 50%;
          height: 100%;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;

          input[type="checkbox"] {
            margin: 0 5px 0 0;
          }
        }
      }

      button {
        width: 100%;
        height: 45px;
        margin: 8px 0;
        padding: 0 15px;
        border: none;
        border-radius: 5px;
        outline: none;
        background: var(--bright);
      }

      .google {
        width: 100%;
        height: 45px;
        display: flex;
        margin: 8px 0;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        border: 1px solid var(--dark);
        border-radius: 5px;
        cursor: pointer;

        img {
          margin: 0 10px;
        }
      }
    }

    > p {
      color: var(--dark);

      a {
        color: var(--bright);
        text-decoration: none;
      }
    }
  }
`;

export default Login;
