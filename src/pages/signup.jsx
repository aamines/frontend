import React from "react";
import styled from "styled-components";
import Para from "../components/para";

const Signup = () => {
  return (
    <Container>
      <div className="content">
        <div className="top">
          <Para>
            Create an account<span>!</span>
          </Para>
          <p>Join your professional network</p>
        </div>
        <form action="#" className="form">
          <div className="row">
            <input type="text" className="box" placeholder="Names" />
            <input type="text" className="box" placeholder="Email" />
          </div>
          <div className="row">
            <input
              type="text"
              className="box"
              placeholder="Ex:Software engineer"
            />
            <input type="password" className="box" placeholder="Password" />
          </div>
          <div className="row">
            <button type="button" className="box">
              Sign up with Google
            </button>
            <button type="submit" className="signup box">
              Sign up
            </button>
          </div>
        </form>
      </div>
      <div className="footer"></div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .content {
    width: 100%;
    height: 85%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .top {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 0 0 50px 0;
    }

    .form {
      width: 50%;
      height: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .row {
        width: 100%;
        height: 60px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        .box {
          width: 46%;
          height: 75%;
        }

        input {
          padding: 0 10px;
          background: var(--gray);
          border: none;
          border-radius: 5px;
          padding: 0 10px;

          ::placeholder {
            color: var(--dark_gray);
          }
        }
      }
    }
  }

  .footer {
    width: 100%;
    height: 15%;
    background: var(--dark);
  }
`;

export default Signup;
