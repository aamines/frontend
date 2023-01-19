import React from "react";
import styled from "styled-components";
import Post from "./post";

const Posts = () => {
  return (
    <Container>
      <Post />
      <Post />
      <Post />
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

export default Posts;
