/* eslint-disable react-hooks/exhaustive-deps */

import styled from "styled-components";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

//features
import axios from "../../features/axios";

const Verify = () => {
  //configs
  const navigate = useNavigate();

  //local data
  const [loading, setLoading] = React.useState(true);
  const params = new URLSearchParams(window.location.search);

  const go = () => {
    navigate("/home");
  };

  useEffect(() => {
    axios
      .put("/auth/verify-email", {
        email: params.get("email"),
        code: params.get("token"),
      })
      .then((res) => {
        setLoading(false);
      });
  }, []);

  return (
    <Container>
      <div className="content">
        <div className="header">
          <p className="head">
            {loading ? "Verifying..." : "Your email was verified!!"}
          </p>
          <p className="para">
            {loading
              ? "Please wait while we verify your email address"
              : "You are now a verified user on projectia! Welcome aboard"}
          </p>
        </div>
        <div className="content">
          {loading ? (
            <img src="/loader.svg" alt="loader" />
          ) : (
            <img src="/images/Hero/Verify.png" alt="verify" />
          )}
          <button type="button" onClick={go}>
            {loading ? "Wait" : "Let's go!"}
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
