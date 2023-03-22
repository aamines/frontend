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
          <p className="head">Boost connection and management.</p>
          <p className="para">
            With feature-ful chat system, host online meetings, sharing moments
            and posts plus more organization experience and features.
          </p>
          <div className="image">
            <img src="/images/What/One.png" alt="one" />
          </div>
        </div>
        <div className="box">
          <p className="head">Keep your organization focused on vision.</p>
          <p className="para">
            Assess the health and growth of your organization according to your
            vision with our deep integrations and analytics.
          </p>
          <div className="image">
            <img src="/images/What/Two.png" alt="two" />
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  height: 125%;
  background: var(--dark);
  position: absolute;
  top: -200px;
  border-radius: 10px;

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
    height: 70%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    .box {
      width: 35%;
      height: 90%;
      background: var(--background);
      padding: 20px 20px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;
      margin: 0 40px;
      border-radius: 10px;

      p.head {
        font-size: 2em;
        font-weight: 700;
        line-height: 35px;
        color: var(--white);
      }

      p.para {
        line-height: 20px;
        color: var(--white);
      }

      .image {
        width: 99%;
        height: 55%;
        overflow: hidden;
        border-radius: 10px;
        background: var(--white);

        img {
          width: 100%;
          object-fit: cover;
        }
      }
    }
  }
`;

export default Some;
