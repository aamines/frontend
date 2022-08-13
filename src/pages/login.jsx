import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { FcGoogle } from "react-icons/fc";

import Para from "../components/para";

const Login = () => {
  return (
    <Container>
      <div className="left">
        <div className="title">
          <Para>
            You're welcome<span>!</span>
          </Para>
          <p>Join your professional network</p>
        </div>
        <form action="#">
          <div className="row">
            <input
              type="text"
              placeholder="Username / Email"
              className="input"
            />
          </div>
          <div className="row">
            <input type="password" placeholder="Password" className="input" />
          </div>
          <div className="row">
            <div className="remember">
              <input type="checkbox" />
              <p>Remember me</p>
            </div>
            <div className="recover">
              <Link to="/recoverpassword">Recover password!</Link>
            </div>
          </div>
          <div className="row">
            <button type="submit">Login</button>
          </div>
        </form>
        <div className="row google">
          <FcGoogle className="icon" />
          <p>Sign in with Google</p>
        </div>
        <div className="row">
          <p>Don't have an account yet!?</p>
          <Link to="/signup">Sign up</Link>
        </div>
      </div>
      <div className="right"></div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  .left {
    width: 50%;
    height: 100%;
    padding: 70px 0 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .title {
      width: 100%;
      height: 100px;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 20px;
    }

    form {
      width: 380px;
      height: auto;
      display: flex;
      flex-direction: column;
      align-items: center;

      .row {
        width: 100%;
        height: 50px;
        margin: 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        .input {
          width: 100%;
          height: 80%;
          background: var(--gray);
          border: none;
          border-radius: 5px;
          padding: 0 10px;

          ::placeholder {
            color: var(--dark_gray);
          }
        }

        .remember {
          height: 100%;
          display: flex;
          flex-direction: row;
          align-items: center;

          input {
            margin: 0 5px 0 0;
          }
        }

        .recover {
          height: 100%;
          display: flex;
          flex-direction: row;
          align-items: center;

          a {
            color: var(--dark);
            text-decoration: underline;
          }
        }

        button {
          width: 100%;
          height: 80%;
          background: var(--bright);
          border: none;
          border-radius: 5px;
          color: var(--white);
        }
      }
    }

    .row {
      width: 380px;
      height: 40px;
      margin: 15px 0;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      a {
        margin: 0 0 0 5px;
        color: var(--bright);
        text-decoration: none;
      }
    }

    .google {
      border: 2px solid var(--dark_gray);
      border-radius: 5px;
      cursor: pointer;

      .icon {
        font-size: 1.8em;
        margin: 0 5px;
      }
    }
  }

  .right {
    width: 50%;
    height: 100%;
    background: var(--dark);
  }
`;

export default Login;
