import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <Container>
      <div className="image">
        <img src="/images/one.png" alt="one" className="one" />
      </div>
      <div className="content">
        <p className="header">
          Assemble your professional <span>Community</span>.
        </p>
        <p className="para">
          Create and Manage your community through a rich and feature-ful
          professional platform.
        </p>
        <Link to="/login">Join now</Link>
      </div>
      <div className="image">
        <img src="/images/two.png" alt="two" className="two" />
      </div>
    </Container>
  );
};

const Container = styled.div`
  height: 750px;
  padding: 150px 60px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;

  @media only screen and (min-width: 1200px) {
    width: 1200px;
  }

  @media only screen and (max-width: 1200px) {
    width: 90%;
  }

  .image {
    width: 30%;
    position: absolute;

    .one {
      position: absolute;
      left: -75%;
      top: -100px;
    }

    .two {
      position: absolute;
      right: -75%;
      top: -80px;
    }
  }

  .content {
    width: 50%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      color: var(--dark);
      text-align: center;
      margin: 0 0 20px 0;
    }

    .header {
      font-size: 2.5rem;
      font-weight: 800;
      line-height: 50px;

      span {
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
