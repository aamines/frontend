import React from "react";
import styled from "styled-components";

//components
import Add from "../components/posts/add";
import Stats from "../components/home/stats";
import Profile from "../components/home/profile";
import Posts from "../components/posts/container";
import Status from "../components/stories/container";

const Home = () => {
  return (
    <Container>
      <div className="container">
        <div className="profile">
          <Profile />
        </div>
        <div className="content">
          <Status />
          <Add />
          <Posts />
        </div>
        <div className="stats">
          <Stats />
        </div>
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

  .up {
    font-weight: 700;
  }

  .down {
    color: var(--grayish);
  }

  .container {
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 25px 0;

    @media only screen and (min-width: 1200px) {
      width: 1200px;
    }

    @media only screen and (max-width: 1200px) {
      width: 90%;
    }

    .profile {
      width: 25%;
      height: auto;
    }

    .content {
      width: 51%;
      height: auto;
    }

    .stats {
      width: 20%;
      height: auto;
    }
  }
`;

export default Home;
