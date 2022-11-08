import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Container>
      <div className="left"></div>
      <div className="right">
        <div className="header">
          <p className="head">Welcome here!</p>
          <p className="para">Welcome back to your professional community.</p>
        </div>
        <form action="#">
          <input type="text" placeholder="Username / Email" />
          <input type="text" placeholder="Password" />
          <div className="row">
            <div className="left_">
              <input type="checkbox" name="remember" id="remember" />
              <label htmlFor="remember">Remember Me</label>
            </div>
            <div className="right_">
              <Link to="#">Recover password!</Link>
            </div>
          </div>
          <button type="submit">Login</button>
          <div className="google">
            <img src="/icons/google.png" alt="Google" />
            <p>Sign in with google</p>
          </div>
        </form>
        <p>
          Don't have an account yet? <Link to="#">Sign up</Link>
        </p>
      </div>
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
    background: var(--dark);
  }

  .right {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0;
    background: var(--light);

    .header {
      width: 100%;
      height: 100px;
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

    form {
      width: 50%;
      height: auto;
      display: flex;
      flex-direction: column;
      align-items: center;

      input[type="text"] {
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
