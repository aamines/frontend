import React from "react";
import styled from "styled-components";

const Clients = () => {
  return (
    <Container>
      <div className="header">
        <p className="head">Projectia is for</p>
        <p>Who projectia is for</p>
      </div>
      <div className="content">
        <div className="box">
          <p>Schools</p>
        </div>
        <div className="box">
          <p>Companies</p>
        </div>
        <div className="box">
          <p>Organizations</p>
        </div>
        <div className="box">
          <p>Compuses</p>
        </div>
        <div className="box">
          <p>Communities</p>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  height: 450px;

  @media only screen and (min-width: 1200px) {
    width: 1200px;
  }

  @media only screen and (max-width: 1200px) {
    width: 90%;
  }

  .header {
    width: 100%;
    height: 25%;
    display: flex;
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
    }
  }

  .content {
    width: 100%;
    height: 75%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    .box {
      width: 30%;
      text-align: center;
      border-radius: 50px;
      padding: 30px 50px;
      margin: 0 15px;
      background: var(--grayish);

      p {
        font-weight: 700;
        color: var(--white);
      }
    }
  }
`;

export default Clients;
