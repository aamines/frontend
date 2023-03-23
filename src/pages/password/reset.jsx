import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const [loading, setLoading] = React.useState(false);

  const handleSubmision = (data) => {
    setLoading(true);
    navigate("/login");
  };

  return (
    <Container>
      <div className="content">
        <div className="header">
          <p className="head">Reset password!</p>
          <p className="para">
            Enter the codes we have sent on your email to get signed in
          </p>
        </div>
        <form action="#" onSubmit={handleSubmit(handleSubmision)}>
          <input
            type="password"
            placeholder="New password"
            {...register("new", {
              required: true,
            })}
          />
          <input
            type="password"
            placeholder="Confirm password"
            {...register("confirm", {
              required: true,
            })}
          />
          <button type="submit">
            {loading ? <img src="/loader.svg" alt="loader" /> : "Let's go"}
          </button>
        </form>
        <div className="login">
          <p>
            Feeling lost? <Link to="/login">Get back</Link>
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
        margin: 0 0 10px 0;
        color: var(--white);
      }

      p {
        color: var(--bright);
        text-align: center;
      }
    }

    form {
      width: 50%;
      height: auto;
      margin: 0 0 80px 0;
      display: flex;
      flex-direction: column;

      input {
        width: 100%;
        height: 50px;
        padding: 0 15px;
        border: none;
        border-radius: 5px;
        outline: none;
        background: var(--grayish);
        color: var(--white);
        margin: 0 0 30px 0;
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
        color: var(--dark);

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
        color: var(--white);

        a {
          color: var(--bright);
          text-decoration: none;
        }
      }
    }
  }
`;

export default ResetPassword;
