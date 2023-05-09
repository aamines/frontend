import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useSelector } from "react-redux";

//components
import Person from "./person";

const People = () => {
  //redux data
  const variants = useSelector((state) => state.variants.page);
  const constraints = useSelector((state) => state.variants.items);
  const accounts = useSelector(
    (state) => state.community.data.community.accounts
  );

  //people
  const employees = accounts?.filter((account) => account?.roleId === 3);
  const administrators = accounts?.filter(
    (account) => account?.roleId === 1 || account?.roleId === 2
  );

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
            <p>Administrators</p>
          </div>
          <motion.div
            className="content"
            variants={constraints}
            initial="initial"
            animate="animate"
          >
            {administrators?.map((admin, index) => (
              <Person key={index} person={admin} />
            ))}
            {administrators?.length === 0 && <p className="no">No admins</p>}
          </motion.div>
        </div>
        <div className="section">
          <div className="header">
            <p>Employees</p>
          </div>
          <motion.div
            className="content"
            variants={constraints}
            initial="initial"
            animate="animate"
          >
            {employees?.map((employee, index) => (
              <Person key={index} person={employee} />
            ))}
            {employees?.length === 0 && <p className="no">No employees</p>}
          </motion.div>
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

export default People;
