import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Two = () => {
  //redux
  const variants = useSelector((state) => state.variants);

  return (
    <Container>
      <motion.div
        className="all"
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <div className="content">
          <div className="header">
            <p>Terms and conditions</p>
          </div>
          <div className="terms"></div>
        </div>
        <div className="button">
          <Link to="/community/new/three">Agree</Link>
        </div>
      </motion.div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;

  .all {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    .content {
      width: 100%;
      height: 400px !important;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      border-radius: 5px;
      background: var(--grayish);
      padding: 10px 20px;

      .header {
        width: 100%;
        height: 50px;
        display: flex;
        flex-direction: row;
        align-items: center;
      }
    }

    .button {
      width: 100%;
      height: 40px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 20px 0;

      a {
        width: 150px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        color: var(--dark);
        border-radius: 5px;
        background: var(--bright);
        align-self: flex-end;
      }
    }
  }
`;

export default Two;
