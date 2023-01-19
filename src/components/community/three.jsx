import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Three = () => {
  return (
    <Container>
      <p>
        The soul should always stand ajar, ready to <br /> welcome the ecstatic
        experience.
      </p>
      <div className="button">
        <Link to="/home">Enjoy</Link>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    text-align: center;
    font-size: 1.3em;
  }

  .button {
    width: auto;
    height: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 20px 0;

    a {
      width: 150px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      color: var(--dark);
      border-radius: 5px;
      background: var(--bright);
    }
  }
`;

export default Three;
