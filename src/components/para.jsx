import React from "react";
import styled from "styled-components";

const Para = (props) => {
  return (
    <Container>
      <img src="/min_logo.svg" alt="logo" />
      <p>{props.children}</p>
    </Container>
  );
};

const Container = styled.div`
  width: auto;
  height: auto;
  position: relative;

  img {
    width: 40px;
    position: absolute;
    z-index: -1;
    top: -3px;
    left: -10px;
    transform: rotate(-45deg);
  }

  p {
    font-size: 30px;
    font-weight: 700;
    line-height: 45px;
    color: var(--dark);
    margin: 0 !important;

    span {
      color: var(--bright);
    }
  }

  @media only screen and (max-width: 600px) {
    img {
      display: none;
    }
  }
`;

export default Para;
