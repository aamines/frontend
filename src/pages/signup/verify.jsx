import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

//features
import axios from "../../features/axios";

const Verify = () => {
  const { register, handleSubmit } = useForm();

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
        <form action="#" onSubmit={handleSubmit(handleSubmision)}>
          <input
            type="text"
            placeholder="Codes"
            {...register("codes", {
              minLength: 6,
              maxLength: 6,
              required: true,
            })}
          />
          <button type="submit">
            {loading ? <img src="/loader.svg" alt="loader" /> : "Let's go"}
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
      margin: 80px;
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
      width: 70%;
      height: auto;
      margin: 0 0 80px 0;
      display: flex;
      flex-direction: column;
      align-items: center;

      input {
        width: 70%;
        height: 50px;
        padding: 0 15px;
        border: none;
        border-radius: 5px;
        outline: none;
        background: var(--gray);
        margin: 0 0 25px 0;
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

        img {
          width: 12%;
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
        color: var(--dark);

        a {
          color: var(--bright);
          text-decoration: none;
        }
      }
    }
  }
`;

export default Verify;
