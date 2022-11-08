import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";

//features
import app from "../features/firebase";

const Signup = () => {
  const [gloading, setGLoading] = React.useState(false);
  const [floading, setFLoading] = React.useState(false);
  const [lloading, setLLoading] = React.useState(false);

  //google signup
  const handleGoogle = async () => {
    setGLoading(true);
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth(app);
    const { user } = await signInWithPopup(auth, googleProvider).then((res) => {
      setGLoading(false);
      return res;
    });

    console.log(user);
  };

  //facebook signup
  const handleFacebook = async () => {
    setFLoading(true);
    setTimeout(() => {
      setFLoading(false);
    }, 2000);
  };

  //linkedin signup
  const handleLinkedin = () => {
    setLLoading(true);
    setTimeout(() => {
      setLLoading(false);
    }, 2000);
  };

  //doNothing
  const doNothing = () => {};

  return (
    <Container>
      <div className="content">
        <div className="div">
          <div className="header">
            <p className="head">Welcome here!</p>
            <p className="para">
              The flags are flying. The balloons are ready for release. It's a
              great day one we've been planning and waiting for.
            </p>
          </div>
          <div className="icons">
            <div
              className="row opacity"
              onClick={lloading ? doNothing : handleLinkedin}
            >
              {lloading ? (
                <img src="/loader.svg" alt="loader" className="loader" />
              ) : (
                <>
                  <img src="/icons/linkedin.png" alt="linkedin" />
                  <p>Signup with Linkedin</p>
                </>
              )}
            </div>
            <div className="row" onClick={gloading ? doNothing : handleGoogle}>
              {gloading ? (
                <img src="/loader.svg" alt="loader" className="loader" />
              ) : (
                <>
                  <img src="/icons/google.png" alt="google" />
                  <p>Signup with Google</p>
                </>
              )}
            </div>
            <div
              className="row opacity"
              onClick={floading ? doNothing : handleFacebook}
            >
              {floading ? (
                <img src="/loader.svg" alt="loader" className="loader" />
              ) : (
                <>
                  <img src="/icons/facebook.png" alt="facebook" />
                  <p>Signup with Facebook</p>
                </>
              )}
            </div>
          </div>
          <div className="or">
            <p>
              Already have an account!? <Link to="#">Login here</Link>
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
          text-align: center;
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
          justify-content: center;
          background: var(--gray);

          p {
            margin: 0 10px;
          }

          .loader {
            justify-self: center;
            width: 30%;
          }
        }

        .opacity {
          opacity: 0.5;
        }
      }

      .or {
        width: 100%;
        height: 20%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        p {
          a {
            color: var(--bright);
            text-decoration: none;
          }
        }
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
        right: 3%;
      }
    }
  }
`;

export default Signup;
