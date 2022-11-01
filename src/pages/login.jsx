import React from "react";
import styled from "styled-components";

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
            <div className="row"></div>
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
      border-radius: 10px;
      box-shadow: 0px -5px 90px rgba(0, 0, 0, 0.1);
      background: var(--white);
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
