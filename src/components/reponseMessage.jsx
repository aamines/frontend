import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { createPortal } from "react-dom";

import { BsTwitter, BsInstagram } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";

const ResponseMessage = ({ type, title, children, handleFrame }) => {
  const variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        duration: 0.5,
      },
    },
  };

  return createPortal(
    <Container>
      <motion.div
        className={type === "success" ? "content" : "content error"}
        variants={variants}
        initial="hidden"
        animate="visible"
      >
        <div className="header">
          <img
            src={
              type === "success"
                ? "/icons/icon-192x192.png"
                : "/images/error.png"
            }
            style={type === "success" ? { width: "30%" } : {}}
            alt="header"
          />
        </div>
        <div className="title">
          <p>
            {title}
            <span>!</span>
          </p>
        </div>
        <div className="para">
          <p>{children}</p>
        </div>
        <div className="socials">
          <a
            href="https://www.linkedin.com/company/mines-ltd"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin className="icon" />
          </a>
          <a
            href="https://twitter.com/Mines__Group"
            target="_blank"
            rel="noreferrer"
          >
            <BsTwitter className="icon" />
          </a>
          <a
            href="https://www.instagram.com/mines_gr"
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram className="icon" />
          </a>
        </div>
      </motion.div>
      <div className="background" onClick={() => handleFrame()}></div>
    </Container>,
    document.querySelector("#portal")
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;

  .background {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    background: rgba(0, 0, 0, 0.7);
  }

  .content {
    width: 30%;
    height: 35%;
    border-radius: 10px;
    background: var(--white);
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 10000;

    .header {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      position: absolute;
      top: -50px;
      left: 36%;
      background: var(--dark);
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;

      img {
        width: 40%;
      }
    }

    .title {
      width: 100%;
      height: 45%;
      display: flex;
      align-items: flex-end;
      justify-content: center;

      p {
        color: var(--dark);
        font-size: 30px;
        font-weight: 600;

        span {
          color: var(--bright);
        }
      }
    }

    .para {
      width: 100%;
      height: 35%;
      display: flex;
      align-items: center;
      justify-content: center;

      p {
        text-align: center;
      }
    }

    .socials {
      width: 40%;
      height: 15%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;

      .icon {
        font-size: 1.5em;
        color: var(--dark);

        :hover {
          color: var(--bright);
        }
      }
    }
  }

  .content.error {
    border: 2px solid var(--red);
  }

  @media only screen and (min-width: 600px) and (max-width: 768px) {
    .content {
      width: 50%;
      height: 25%;
    }
  }

  @media only screen and (min-width: 769px) and (max-width: 993px) {
    .content {
      width: 50%;
      height: 18%;
    }
  }

  @media only screen and (max-width: 600px) {
    .content {
      width: 90%;
      height: 30%;
    }
  }
`;

export default ResponseMessage;
