import React from "react";
import styled from "styled-components";

const Founder = () => {
  return (
    <Container>
      <div className="content">
        <p className="para">
          <span>Projectia</span> is a great online platform for communities to
          boost connection and communication. All that is needed for the growth
          and health of your community can be found in one place for free or few
          dollars.
        </p>
        <p>Byiringiro saad</p>
        <p className="position">Founder, CEO of Mines</p>
      </div>
      <div className="image">
        <img src="/images/three.png" alt="ceo" />
      </div>
    </Container>
  );
};

const Container = styled.div`
  height: 500px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 1200px) {
    width: 1200px;
  }

  @media only screen and (max-width: 1200px) {
    width: 90%;
  }

  .content {
    width: 43%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin: 0 20px;

    p.para {
      font-size: 1.5em;
      font-weight: 600;
      margin: 0 0 10px 0;

      span {
        color: var(--bright);
      }
    }

    p.position {
      font-weight: 600;
      margin: 10px 0 0 0;
    }
  }

  .image {
    width: 35%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 80%;
    }
  }
`;

export default Founder;
