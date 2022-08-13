import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Para from "../para";

const Devices = () => {
  return (
    <Container id="devices">
      <div className="title">
        <p className="small bright">Devices</p>
        <Para>
          Available devices<span>.</span>
        </Para>
        <p className="small">Use projectia on below devices.</p>
      </div>
      <div className="devices">
        <motion.div
          className="device small mobile"
          whileHover={{ scale: 1.025 }}
        >
          <div className="top">
            <div className="image">
              <img src="/images/Phone.png" alt="phone" />
            </div>
            <div className="para">
              <p className="progress">0%</p>
              <p className="version">Mobile version</p>
            </div>
          </div>
          <div className="platform">
            <p>Android , IOS</p>
          </div>
        </motion.div>
        <motion.div
          className="device big desktop"
          whileHover={{ scale: 1.025 }}
        >
          <div className="image">
            <img src="/images/Comp.png" alt="Computer" />
          </div>
          <div className="para">
            <p className="progress">0%</p>
            <p className="version">Desktop version</p>
          </div>
          <div className="platform">
            <p>Windows , MacOS</p>
          </div>
        </motion.div>
        <motion.div className="device small web" whileHover={{ scale: 1.025 }}>
          <div className="top">
            <div className="image">
              <img src="/images/Web.png" className="web" alt="Website" />
            </div>
            <div className="para">
              <p className="progress">15%</p>
              <p className="version">Web version</p>
            </div>
          </div>
          <div className="platform">
            <p>All Platforms</p>
          </div>
        </motion.div>
      </div>
      <Link to="/waitlist" className="waitlist">
        Join the Waitlist
      </Link>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 70px 0 0 0;

  .title {
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p.small {
      font-size: 1em;
      line-height: 30px;
      color: var(--dark);
    }

    p.bright {
      color: var(--bright) !important;
    }
  }

  .devices {
    width: 100%;
    height: 55%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: var(--white);

    .device {
      background: var(--dark);
      margin: 0 10px;
      border-radius: 5px;
    }

    .small {
      width: 20%;
      height: 70%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .top {
        width: 80%;
        height: 70%;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: center;

        .image {
          width: 50%;
          height: 80%;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          position: relative;

          img {
            width: 75%;
            position: absolute;
            top: 20px;
          }

          img.web {
            width: 70%;
            align-self: flex-start;
            justify-self: flex-start;
          }
        }

        .para {
          width: 50%;
          height: 80%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;

          p.progress {
            font-size: 25px;
            line-height: 40px;
          }
        }
      }
    }

    .big {
      width: 25%;
      height: 80%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .image {
        width: 80%;
        height: 40%;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;

        img {
          width: 60%;
        }
      }

      .para {
        width: 80%;
        height: 30%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        p.progress {
          font-size: 25px;
          line-height: 40px;
        }
      }
    }
  }

  .waitlist {
    text-decoration: none;
    color: var(--dark);

    :hover {
      color: var(--bright);
    }
  }

  @media only screen and (max-width: 600px) {
    .title {
      width: 100%;
      text-align: center;
    }

    .devices {
      width: 100%;
      height: 85%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;

      .small {
        width: 90%;
        height: 30%;

        .top {
          .image {
            img {
              width: 50%;
            }
          }
        }
      }

      .big {
        width: 90%;
        height: 30%;

        .image {
          img {
            width: 50%;
          }
        }
      }
    }

    .waitlist {
      line-height: 40px;
    }
  }

  @media only screen and (min-width: 600px) and (max-width: 768px) {
    .devices {
      .small {
        width: 25%;
      }

      .big {
        width: 30%;
      }
    }
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    .devices {
      .small {
        width: 25%;
      }

      .big {
        width: 30%;
      }
    }
  }

  @media only screen and (min-width: 993px) and (max-width: 1200px) {
    .devices {
      .small {
        width: 25%;
      }

      .big {
        width: 30%;
      }
    }
  }
`;

export default Devices;
