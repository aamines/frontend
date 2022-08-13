//packages
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

//files
import User from "./user";
import Para from "../para";
import Particles from "./particles";
import CursorProvider from "./cursorProvider";

//icons
import { AiOutlineArrowDown } from "react-icons/ai";

const Home = () => {
  return (
    <Container id="home">
      <div className="left">
        <div className="content">
          <Para>
            Join your professional <br /> network<span>.</span>
          </Para>
          <p>
            Showcase your skills and achievements in your <br /> professional
            network.
          </p>
          <Link to="/waitlist" className="button">
            Join the Waitlist
          </Link>
        </div>
        <User
          bottom="40"
          right="7"
          title="Mines Group"
          skills="3"
          projects="10"
          what="Members"
          image="/images/one.jpg"
          className="edited"
        />
        <User
          bottom="20"
          left="5"
          title="Mines Group"
          skills="4"
          projects="7"
          what="Members"
          image="/images/two.jpg"
          className="editedtoo"
        />
        <motion.a
          className="down"
          href="#devices"
          animate={{ y: 5, transition: { yoyo: Infinity } }}
        >
          <AiOutlineArrowDown />
        </motion.a>
      </div>
      <div className="right">
        <CursorProvider>
          <div className="center">
            <div className="one"></div>
            <div className="two"></div>
            <div className="three"></div>
          </div>
          <User
            top="13"
            right="10"
            title="Software Engineer"
            skills="7"
            projects="10"
            what="Skills"
            image="/images/three.jpg"
          />
          <User
            bottom="10"
            left="10"
            title="Frontend Developer"
            skills="4"
            projects="7"
            what="Skills"
            image="/images/four.jpg"
          />
        </CursorProvider>
        <Particles />
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
  /* margin: 70px 0 0 0; */

  .left {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    padding: 120px 0 0 40px;
    position: relative;

    .content {
      > p {
        margin: 3% 0 5% 0;
        color: var(--dark);
      }
    }

    .button {
      padding: 5px 25px;
      margin: 10px 0 0 0;
      font-size: 1em;
      background: var(--bright);
      border: none;
      border-radius: 4px;
      cursor: pointer;
      text-decoration: none;
      color: var(--dark);
    }

    .down {
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      border: 2px solid var(--dark);
      position: absolute;
      bottom: 30px;
      right: 45%;
      font-size: 1.5em;
      cursor: pointer;
      color: var(--dark);
      text-decoration: none;
    }
  }

  .right {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--dark);
    position: relative;
    overflow: hidden;
    cursor: none;

    .center {
      width: auto;
      height: auto;
      position: relative;

      .one {
        width: 110px;
        height: 250px;
        border-radius: 102px;
        background: var(--bright);
        box-shadow: 0px 0px 40px 10px var(--bright);
      }

      .two {
        width: 50px;
        height: 110px;
        border-radius: 102px;
        background: rgba(255, 255, 255, 0.6);
        backdrop-filter: blur(47px);
        position: absolute;
        left: -25px;
        bottom: 70px;
      }

      .three {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        backdrop-filter: blur(47px);
        position: absolute;
        right: -15px;
        bottom: -5px;
      }
    }
  }

  @media only screen and (max-width: 600px) {
    .left {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0 10px;

      .edited {
        top: 20% !important;
      }

      .editedtoo {
        bottom: 15%;
      }

      .content {
        width: 100%;
        text-align: center;
      }

      p {
        text-align: center;
      }

      .down {
        bottom: 10px;
      }
    }

    .right {
      display: none;
    }
  }

  @media only screen and (min-width: 600px) and (max-width: 768px) {
    .left {
      width: 100%;
    }

    .right {
      display: none;
    }
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    .edited {
      display: none;
    }

    .editedtoo {
      bottom: 30%;
    }
  }
`;

export default Home;
