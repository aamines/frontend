import React from "react";
import styled from "styled-components";

const Memory = ({ memory }) => {
  if (memory?.type === "text") {
    return (
      <Text background={memory?.color}>
        <p>{memory?.content}</p>
      </Text>
    );
  }
};

const Text = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #${(props) => props.background};

  p {
    font-size: 1.5em;
    font-weight: 600;
    color: var(--white);
  }
`;

export default Memory;
