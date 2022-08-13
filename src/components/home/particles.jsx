import React from "react";
import styled from "styled-components";

const Particles = () => {
  return (
    <Container>
      <img src="/images/group_logo.png" alt="logos" />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  overflow: hidden;

  img {
    width: 50%;
  }
`;

export default Particles;
