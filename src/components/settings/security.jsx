import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useSelector } from "react-redux";

const SecuritySettings = () => {
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
        <div className="description">
          <p className="title">Password and security</p>
          <p className="desc">Change password and other security features</p>
        </div>
        <div className="password">
          <p className="title">Change password</p>
          <input type="text" placeholder="Current passoword" />
          <input type="text" placeholder="New password" />
          <input type="text" placeholder="Confirm password" />
        </div>
        <div className="security">
          <p className="title">Two-step authentication</p>
          <div className="way">
            <div className="para">
              <p className="title">Authentication app</p>
              <p className="sub">Google auth app</p>
            </div>
            <div className="button">Setup</div>
          </div>
          <div className="way">
            <div className="para">
              <p className="title">Another email</p>
              <p className="sub">Email to send verification link</p>
            </div>
            <div className="button">Setup</div>
          </div>
          <div className="way">
            <div className="para">
              <p className="title">SMS Recovery</p>
              <p className="sub">Your phone number</p>
            </div>
            <div className="button">Setup</div>
          </div>
        </div>
      </motion.div>
    </Container>
  );
};

const Container = styled.div`
  .all {
    width: 100%;
    height: auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .description {
      width: 100%;
      height: auto;
      display: flex;
      padding: 0 0 10px 0;
      margin: 0 0 20px 0;
      border-bottom: 1px solid var(--gray);
      flex-direction: column;
      align-items: flex-start;

      p.title {
        font-size: 1.5em;
        font-weight: 600;
        color: var(--white);
      }

      p.desc {
        color: var(--gray);
      }
    }

    .password {
      width: 100%;
      height: auto;
      display: flex;
      margin: 0 0 25px 0;
      flex-direction: column;

      p.title {
        font-size: 1.1em;
        margin: 0 0 20px 0;
        color: var(--white);
      }

      input {
        width: 100%;
        height: 60px;
        margin: 0 0 10px 0;
        border-radius: 5px;
        border: none;
        color: var(--white);
        outline: none;
        padding: 0 15px;
        background: var(--background);
      }
    }

    .security {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;

      p.title {
        font-size: 1.1em;
        margin: 0 0 20px 0;
        color: var(--white);
      }

      .way {
        width: 100%;
        height: auto;
        display: flex;
        padding: 20px;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin: 0 0 20px 0;
        background: var(--background);

        p.title {
          font-size: 1em;
          margin: 0 0 10px 0;
        }

        p.sub {
          color: var(--gray);
        }

        .button {
          cursor: pointer;
          padding: 10px 25px;
          border-radius: 5px;
          color: var(--white);
          background: var(--grayish);
        }
      }
    }
  }
`;

export default SecuritySettings;
