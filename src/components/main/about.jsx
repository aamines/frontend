import styled from "styled-components";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";

const About = () => {
  const [scrolled, setScrolled] = useState();
  const nav = useRef();

  useEffect(() => {
    window.onscroll = function () {
      if (nav.current.getClientRects()[0].top <= 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  });

  return (
    <Container>
      <div className={scrolled ? "shadow nav" : "nav"} ref={nav}>
        <Link activeClass="current" smooth spy to="post">
          Vision
        </Link>
        <Link activeClass="current" smooth spy to="share">
          Communication
        </Link>
        <Link activeClass="current" smooth spy to="chat">
          Data
        </Link>
        <Link activeClass="current" smooth spy to="communicate">
          Integration
        </Link>
        <Link activeClass="current" smooth spy to="community">
          Security
        </Link>
      </div>
      <div className="container">
        <div className="row" id="post">
          <div className="content">
            <p className="header">
              <span>Vision</span> setting and tracking.
            </p>
            <div className="down">
              <img src="/icons/line.svg" alt="line" />
              <div className="para">
                <p className="bold">Create, set and track your vision.</p>
                <p>
                  Monitor progress of your organization according to your
                  vision.
                </p>
              </div>
            </div>
          </div>
          <div className="visual">
            <img src="/images/What/Two.png" alt="two" />
          </div>
        </div>
        <div className="row" id="share">
          <div className="visual">
            <img src="/images/About/One.png" alt="one" />
          </div>
          <div className="content">
            <p className="header">
              <span>Communication</span> and collaboration.
            </p>
            <div className="down">
              <img src="/icons/line.svg" alt="line" />
              <div className="para">
                <p className="bold">
                  Communicate with your community mates, share ideas and
                  information.
                </p>
                <p>
                  Plan and assign tasks for team mates and track their progress
                  in real time.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row" id="chat">
          <div className="content">
            <p className="header">
              <span>Data</span> analysis and visualization.
            </p>
            <div className="down">
              <img src="/icons/line.svg" alt="line" />
              <div className="para">
                <p className="bold">
                  Visualize and understand your progress in various areas.
                </p>
                <p>
                  Get detailed review and analysis of your organization’s
                  progress according to the set vision
                </p>
              </div>
            </div>
          </div>
          <div className="visual">
            <img src="/images/About/Three.jpg" alt="three" />
          </div>
        </div>
        <div className="row" id="communicate">
          <div className="visual">
            <img src="/images/About/Two.png" alt="two" />
          </div>
          <div className="content">
            <p className="header">
              <span>Integration</span> with other tools.
            </p>
            <div className="down">
              <img src="/icons/line.svg" alt="line" />
              <div className="para">
                <p className="bold">Need to connect to third party app!?</p>
                <p>
                  Integrate and use third party apps directly from your
                  organization’s workspace.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row" id="community">
          <div className="content">
            <p className="header">
              <span>Security</span> and data privacy.
            </p>
            <div className="down">
              <img src="/icons/line.svg" alt="line" />
              <div className="para">
                <p className="bold">
                  We care about the security of your data and privacy.
                </p>
                <p>
                  With data privacy being a major concern for many
                  organizations, Our platform is built with security and privacy
                  in mind.
                </p>
              </div>
            </div>
          </div>
          <div className="visual">
            <img src="/images/About/Four.jpg" alt="three" />
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;

  @media only screen and (min-width: 1200px) {
    width: 1200px;
  }

  @media only screen and (max-width: 1200px) {
    width: 90%;
  }

  .shadow {
    box-shadow: 0px 0px 30px -4px rgba(100, 100, 100, 0.15);
  }

  .nav {
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    position: sticky;
    position: -webkit-sticky;
    top: 0px;
    border-radius: 10px 10px 0 0;
    background: var(--dark);

    a {
      text-decoration: none;
      color: var(--white);
      cursor: pointer;
    }

    .current {
      color: var(--bright);
    }
  }

  .container {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 0 100px 0;
    border-radius: 10px;
    border-radius: 0 0 10px 10px;
    background: var(--dark);

    .row {
      width: 85%;
      height: 450px;
      display: flex;
      flex-direction: row;
      align-content: flex-end;
      justify-content: space-between;

      .content {
        width: 40%;
        height: 70%;
        display: flex;
        align-self: flex-end;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-end;

        p.header {
          font-size: 2rem;
          line-height: 40px;
          font-weight: 800;
          margin: 0 0 10px 0;
          color: var(--white);

          span {
            color: var(--bright);
          }
        }

        .down {
          width: 100%;
          height: 70%;
          display: flex;
          margin: 10px 0 0 0;
          flex-direction: row;
          align-items: center;

          .para {
            margin: 0 0 0 10px;
            color: var(--white);

            p {
              margin: 0 0 10px 0;
            }

            .bold {
              font-weight: 800;
            }
          }
        }
      }

      .visual {
        width: 60%;
        height: 100%;
        display: flex;
        align-items: flex-end;
        padding: 0 0 20px 0;

        :nth-child(even) {
          justify-content: center;
        }

        :nth-child(odd) {
          justify-content: flex-start;
        }

        img {
          width: 75%;
          border-radius: 10px;
        }
      }
    }
  }
`;

export default About;
