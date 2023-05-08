/* eslint-disable react-hooks/exhaustive-deps */

import { motion } from "framer-motion";
import styled from "styled-components";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

//components
import Add from "../components/posts/add";
import Stats from "../components/home/stats";
import Profile from "../components/home/profile";
import Posts from "../components/posts/container";
import Memories from "../components/memories/container";

const Home = () => {
  //config
  const navigate = useNavigate();

  //redux data
  const variants = useSelector((state) => state.variants);
  const tokenVerified = useSelector((state) => state.persist.tokenVerified);
  const authenticated = useSelector((state) => state.persist.authenticated);

  useEffect(() => {
    if (!tokenVerified || !authenticated) {
      navigate("/login");
    }
  }, []);

  return (
    <Container>
      <motion.div
        className="container"
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <div className="profile">
          <Profile />
        </div>
        <div className="content">
          <Memories />
          <Add />
          <Posts />
        </div>
        <div className="stats">
          <Stats />
        </div>
      </motion.div>
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
