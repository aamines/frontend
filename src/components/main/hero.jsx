import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <Container>
      <div className="image">
        <img src="/images/one.png" alt="one" />
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
        <img src="/images/two.png" alt="two" />
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(
    90deg,
    rgba(5, 17, 30, 1) 0%,
    rgba(8, 28, 50, 1) 35%
  );
  padding: 100px 20px 0 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  .image {
    width: 25%;
  }

  .content {
    width: 41%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      color: var(--white);
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
