import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

//components
import Footer from "../components/footer";

const Login = () => {
  return (
    <Container>
      <div className="content">
        <div className="div">
          <div className="header">
            <p className="head">Welcome back!</p>
            <p className="para">
              You know what's great about coming back? You are always assured of
              a pleasant welcome!
            </p>
          </div>
          <div className="icons">
            <div className="row">
              <img src="/icons/linkedin.png" alt="linkedin" />
              <p>Login with Linkedin</p>
            </div>
            <div className="row">
              <img src="/icons/google.png" alt="google" />
              <p>Login with Google</p>
            </div>
            <div className="row">
              <img src="/icons/facebook.png" alt="facebook" />
              <p>Login with Facebook</p>
            </div>
          </div>
          <div className="or">
            <p>
              Already have an account!? <Link to="#">Login here</Link>{" "}
            </p>
          </div>
        </div>
        <div className="image">
          <img src="/images/one.png" alt="one" className="one" />
        </div>
        <div className="image">
          <img src="/images/two.png" alt="two" className="two" />
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: 1200px) {
    .content {
      width: 1200px;
    }
  }

  @media only screen and (max-width: 1200px) {
    .content {
      width: 90%;
    }
  }

  .content {
    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;

    .div {
      width: 60%;
      height: 90%;
      z-index: 10;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      padding: 20px 0 10px 0;
      border-radius: 10px;
      box-shadow: 0px -5px 90px rgba(0, 0, 0, 0.1);
      background: var(--white);

      .header {
        width: 100%;
        height: 25%;
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
        }
      }

      .icons {
        width: 50%;
        height: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

        .row {
          width: 100%;
          height: 25%;
          display: flex;
          cursor: pointer;
          flex-direction: row;
          align-items: center;
          border-radius: 5px;
          justify-content: space-between;
          padding: 0 25%;
          background: var(--gray);
        }
      }

      .or {
        width: 100%;
        height: 20%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
      }
    }

    .image {
      width: 30%;

      .one {
        position: absolute;
        top: 10%;
        left: 7%;
      }

      .two {
        position: absolute;
        top: 10%;
        right: 5%;
      }
    }
  }
`;

export default Login;
