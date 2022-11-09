import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

//features
import app from "../features/firebase";

const Signup = () => {
  const [gloading, GLoading] = React.useState(false);
  const [loading, Loading] = React.useState(false);

  //handle google signup
  const handleGoogle = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);

    //popup
    signInWithPopup(auth, provider).then((result) => {
      console.log(result);
    });
  };

  return (
    <Container>
      <div className="content">
        <div className="header">
          <p className="head">Welcome here!</p>
          <p className="para">Create an account and start having fun.</p>
        </div>
        <form action="#">
          <input type="text" placeholder="Names" />
          <input type="text" placeholder="Email" />
          <select name="country" id="country" placeholder="Country">
            <option value="Rwanda">Rwanda</option>
          </select>
          <input type="password" placeholder="Password" />
          <div className="row" onClick={handleGoogle}>
            <img src="/icons/google.png" alt="Google" />
            <p>Sign in with Google</p>
          </div>
          <button type="submit">Sign up</button>
        </form>
      </div>
      <div className="login">
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
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
  justify-content: space-between;

  .content {
    height: auto;
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
      height: 100px;
      display: flex;
      padding: 0 40px;
      margin: 50px;
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
      height: 220px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 50px;

      input {
        width: 100%;
        height: 70%;
        padding: 0 15px;
        border: none;
        border-radius: 5px;
        outline: none;
        background: var(--gray);
      }

      select {
        width: 100%;
        height: 70%;
        padding: 0 15px;
        border: none;
        border-radius: 5px;
        outline: none;
        background: var(--gray);
      }

      button {
        width: 100%;
        height: 70%;
        padding: 0 15px;
        border: none;
        border-radius: 5px;
        outline: none;
        background: var(--bright);
      }

      .row {
        width: 100%;
        height: 70%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        border-radius: 5px;
        background: var(--gray);

        img {
          width: 25px;
          margin: 0 5px 0 0;
        }
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
`;

export default Signup;
