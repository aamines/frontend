import React from "react";
import styled from "styled-components";

const Stats = () => {
  return (
    <Container>
      <div className="rank"></div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Stats;
