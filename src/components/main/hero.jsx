import React from "react";
import styled from "styled-components";

const Hero = () => {
  return (
    <Container>
      <div className="content">
        <p className="header">
          Assemble your professional <span>Community</span>.
        </p>
        <p className="para">
          Create and Manage your community through a rich and feature-ful
          professional platform.
        </p>
        <a href="/login">Join now</a>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 70px);
  background: #e6f7ee;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .content {
    width: 40%;
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
