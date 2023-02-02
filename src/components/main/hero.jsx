import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <Container>
      <div className="container">
        <div className="image">
          <img src="/images/One.gif" alt="one" className="one" />
        </div>
        <div className="content">
          <div className="header">
            <p>Let's keep your</p>
            <div className="down">
              <p>Organization</p>
              <div className="words">
                <span>managed.</span>
                <span>connected.</span>
                <span>on-vision.</span>
              </div>
            </div>
          </div>
          <p className="para">
            Management and communication, let’s keep your organization inline
            and on-vision focused.
          </p>
          <Link to="/login">Join now</Link>
        </div>
        <div className="image">
          <img src="/images/Two.gif" alt="two" className="two" />
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 750px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .container {
    height: 100%;
    padding: 150px 60px;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
  }

  @media only screen and (min-width: 1200px) {
    .container {
      width: 1200px;
    }
  }

  @media only screen and (max-width: 1200px) {
    .container {
      width: 90%;
    }
  }

  .image {
    width: 30%;
    position: absolute;

    .one {
      position: absolute;
      left: -110%;
      top: -100px;
    }

    .two {
      position: absolute;
      right: -110%;
      top: -80px;
    }
  }

  .content {
    width: 50%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 100;

    p {
      color: var(--dark);
      text-align: center;
      margin: 0 0 20px 0;
    }

    .header {
      width: auto;
      height: auto;

      p {
        font-size: 3em;
        font-weight: 800;
        line-height: 35px;
      }

      .down {
        width: auto;
        height: auto;
        display: flex;

        .words {
          width: auto;
          height: 50px;
          overflow: hidden;

          span {
            font-size: 3em;
            font-weight: 800;
            line-height: 35px;
            margin: 0 0 20px 7px;
            animation: spin 6s infinite;

            @keyframes spin {
              0% {
                transform: translateY(70px);
              }
              15% {
                transform: translateY(0);
              }
              30% {
                transform: translateY(0);
              }
              45% {
                transform: translateY(-70px);
              }
              60% {
                transform: translateY(-70px);
              }
              75% {
                transform: translateY(-140px);
              }
              90% {
                transform: translateY(-140px);
              }
              100% {
                transform: translateY(-210px);
              }
            }
          }
        }
      }

      span {
        display: block;
        height: 100%;
        color: var(--bright);
      }
    }

    .para {
      letter-spacing: 0.5px;
    }

    a {
      padding: 7px 40px;
      background: var(--bright);
      border-radius: 40px;
      text-decoration: none;
      color: var(--dark);
    }
  }
`;

export default Hero;
