import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

//features
import axios from "../../features/axios";

const Verify = () => {
  //configs

  const [loading, setLoading] = React.useState(false);

  const handleSubmision = (data) => {
    setLoading(true);
    axios.post("/auth/verify-email", {}).then((res) => {});
  };

  return (
    <Container>
      <div className="content">
        <div className="header">
          <p className="head">Verify your email!</p>
          <p className="para">
            Please enter the verification code we sent to your email.
          </p>
        </div>
        <div className="content">
          <img src="/images/Hero/Verify.png" alt="verify" />
          <button type="button" onClick={handleSubmision}>
            {loading ? <img src="/loader.svg" alt="loader" /> : "Let's go"}
          </button>
        </div>
        <div className="login">
          <p>
            Feeling lost? <Link to="/login">Logout</Link>
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
      margin: 80px;
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

    .content {
      width: 60%;
      height: auto;
      display: flex;
      flex-direction: column;
      align-items: center;

      img {
        width: 500px;
      }
    }

    button {
      width: 70%;
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
      color: var(--white);

      img {
        width: 12%;
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

export default Verify;
