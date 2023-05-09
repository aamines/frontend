import React from "react";
import styled from "styled-components";

const Posts = () => {
  return (
    <Container>
      <div className="no">
        <p className="no">No posts yet</p>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  div.no {
    width: 100%;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    background: var(--dark);
  }

  p.no {
    font-size: 1.3em;
    color: var(--gray);
  }
`;

export default Posts;
