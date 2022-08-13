import React from "react";
import styled from "styled-components";
import Para from "../components/para";

const Width = () => {
  return (
    <Container>
      <Para>
        OOOPS<span>!</span>
      </Para>
      <p>Device width currently not supported.</p>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default Width;
