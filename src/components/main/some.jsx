import React from "react";
import styled from "styled-components";

const Some = () => {
  return (
    <Container>
      <div className="header">
        <p className="head">With Projectia</p>
        <p>What you can do</p>
      </div>
      <div className="content">
        <div className="box">
          <p className="header">Boost connection and communication.</p>
          <p className="para">
            With feature-ful chat system, host online meetings, sharing moments
            and posts plus more community experience and features.{" "}
          </p>
          <div className="image"></div>
        </div>
        <div className="box">
          <p className="header">Get statistics on your community.</p>
          <p className="para">
            Assess the health and growth of your online community with our deep
            integrations and deep analytics.
          </p>
          <div className="image"></div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 90%;
  height: 125%;
  background: var(--white);
  position: absolute;
  top: -200px;
  border-radius: 10px;

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
      color: var(--dark);
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

    .box {
      width: 32%;
      height: 90%;
      background: var(--hero);
      padding: 30px 20px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;
      margin: 0 40px;
      border-radius: 10px;

      p.header {
        font-size: 2em;
        font-weight: 700;
      }

      .image {
        width: 100%;
        height: 55%;
        border-radius: 10px;
        background: var(--dark);
      }
    }
  }
`;

export default Some;
