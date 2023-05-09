import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

//icons
import { HiUserGroup } from "react-icons/hi";

const Welcome = () => {
  //config
  const navigate = useNavigate();

  //redux data
  const variants = useSelector((state) => state.variants.page);

  const goToCreate = () => {
    navigate("/community/new");
  };

  const goToJoin = () => {
    navigate("/community/join");
  };

  return (
    <Container>
      <motion.div
        className="container"
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <div className="welcome">
          <img src="/min_logo.svg" alt="logo" />
          <p className="title">Welcome to Projectia</p>
        </div>
        <div className="options">
          <div className="one" onClick={goToCreate}>
            <HiUserGroup className="icon" />
            <p className="title">Create a community</p>
            <p className="para">
              Create. Connect. Collaborate. Make your organization's story come
              alive!
            </p>
          </div>
          <div className="one" onClick={goToJoin}>
            <HiUserGroup className="icon" />
            <p className="title">Join a community</p>
            <p className="para">
              Join. Connect. Collaborate. Make great things happen, together!
            </p>
          </div>
        </div>
      </motion.div>
    </Container>
  );
};

const Container = styled.div`
  height: calc(100vh - 70px);
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;

  .container {
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 100px 0;

    @media only screen and (min-width: 1200px) {
      width: 1200px;
    }

    @media only screen and (max-width: 1200px) {
      width: 90%;
    }

    .welcome {
      width: 60%;
      height: auto;
      display: flex;
      flex-direction: column;
      align-items: center;

      img {
        width: 60px;
        margin: 0 0 20px 0;
      }

      p.title {
        font-size: 1.4em;
        font-weight: 700;
        margin: 0 0 20px 0;
        color: var(--white);
      }
    }

    .options {
      width: 100%;
      height: auto;
      display: flex;
      margin: 50px 0;
      flex-direction: row;
      justify-content: center;

      .one {
        width: 350px;
        height: 220px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 15px;
        margin: 0 20px;
        border-radius: 10px;
        cursor: pointer;
        border: 1px solid var(--grayish);

        :hover {
          filter: brightness(80%);
        }

        .icon {
          font-size: 4.5em;
          margin: 0 0 10px 0;
          color: var(--gray);
        }

        p.title {
          font-size: 1.2em;
          font-weight: 700;
          color: var(--bright);
        }

        p.para {
          margin: 10px 0;
          text-align: center;
          color: var(--gray);
        }
      }
    }
  }
`;

export default Welcome;
