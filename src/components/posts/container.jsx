import React from "react";
import styled from "styled-components";

const Posts = () => {
  return (
    <Container>
      <div className="top">
        <div className="profile">
          <div className="active"></div>
        </div>
        <div className="about">
          <p className="gray">3 hours ago</p>
          <p className="name">Byiringiro saad</p>
        </div>
      </div>
      <div className="body"></div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  border: 1.5px solid var(--gray);
  padding: 10px;

  .top {
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: row;
    align-items: center;

    .profile {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      position: relative;
      background: var(--gray);

      .active {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: var(--bright);
        position: absolute;
        bottom: 2px;
        right: 10%;
      }
    }

    .about {
      width: auto;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 0 0 0 10px;

      p {
        margin: 3px 0;
      }

      .gray {
        color: var(--grayish);
      }
    }
  }

  .body {
  }
`;

export default Posts;
