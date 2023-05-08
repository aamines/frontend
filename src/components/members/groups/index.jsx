import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Groups = () => {
  //redux data
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
        <div className="section">
          <div className="header">
            <p>Groups</p>
          </div>
          <div className="content">
            <p className="no">No groups</p>
          </div>
        </div>
      </motion.div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;

  .all {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;

    .section {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
      margin: 0 0 20px 0;

      .header {
        width: 100%;
        height: 50px;
        display: flex;
        flex-direction: row;
        align-items: center;

        p {
          font-size: 1.3em;
          color: var(--white);
        }
      }

      .content {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        padding: 10px 0 0 0;

        p.no {
          color: var(--gray);
        }
      }
    }
  }
`;

export default Groups;
