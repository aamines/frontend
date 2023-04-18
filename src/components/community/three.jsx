import styled from "styled-components";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const Three = () => {
  //local data
  const [loading, setLoading] = useState(false);
  const data = useSelector((state) => state.community.create);

  const handleSubmit = () => {
    setLoading(true);
  };

  return (
    <Container>
      <p>
        The soul should always stand ajar, ready to <br /> welcome the ecstatic
        experience.
      </p>
      <div className="button">
        {loading ? (
          <img src="/loader.svg" alt="loader" />
        ) : (
          <Link to="/home">Enjoy</Link>
        )}
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
    color: var(--white);
  }

  .button {
    width: 150px;
    height: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 20px 0;
    border-radius: 5px;
    background: var(--bright);

    a {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      color: var(--dark);
    }

    img {
      width: 35%;
    }
  }
`;

export default Three;
