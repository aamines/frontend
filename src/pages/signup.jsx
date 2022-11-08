import React from "react";
import styled from "styled-components";

const Signup = () => {
  return (
    <Container>
      <div className="content">
        <div className="header">
          <p className="head">Welcome here!</p>
          <p className="para">Create an account and start having fun.</p>
        </div>
        <form action="#"></form>
      </div>
    </Container>
  );
};

const Container = styled.div`
  height: calc(100vh - 70px);
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  .content {
    height: 100%;
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
  }
`;

export default Signup;
