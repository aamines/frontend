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
          Post
        </Link>
        <Link activeClass="current" smooth spy to="share">
          Share
        </Link>
        <Link activeClass="current" smooth spy to="chat">
          Chat
        </Link>
        <Link activeClass="current" smooth spy to="communicate">
          Communicate
        </Link>
        <Link activeClass="current" smooth spy to="community">
          Community
        </Link>
      </div>
      <div className="container">
        <div className="row" id="post">
          <div className="content">
            <p className="header">
              Post your <span>achievements</span> in your community.
            </p>
            <div className="down">
              <img src="/icons/line.svg" alt="line" />
              <div className="para">
                <p className="bold">
                  Create a post: an achivement, a project or an update and share
                  with your community.
                </p>
                <p>
                  Get different feedbacks and insights from people within your
                  community.
                </p>
              </div>
            </div>
          </div>
          <div className="visual"></div>
        </div>
        <div className="row" id="share">
          <div className="visual"></div>
          <div className="content">
            <p className="header">
              Share your <span>moments</span> in your community.
            </p>
            <div className="down">
              <img src="/icons/line.svg" alt="line" />
              <div className="para">
                <p className="bold">
                  Share your moments with people from within your community and
                  let them know what’s going on.
                </p>
                <p>
                  Show people from your community something you are about to
                  achieve or a project about to launch.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row" id="chat">
          <div className="content">
            <p className="header">
              <span>Chat</span> with your community mates.
            </p>
            <div className="down">
              <img src="/icons/line.svg" alt="line" />
              <div className="para">
                <p className="bold">
                  Communicate with your community mates, share ideas and
                  information.
                </p>
                <p>
                  Message or call your comminuty mates to talk and share ideas
                  with your community.
                </p>
              </div>
            </div>
          </div>
          <div className="visual"></div>
        </div>
        <div className="row" id="communicate">
          <div className="visual"></div>
          <div className="content">
            <p className="header">
              <span>Communicate</span> with your community mates.
            </p>
            <div className="down">
              <img src="/icons/line.svg" alt="line" />
              <div className="para">
                <p className="bold">
                  Send a notice or a communique to everyone in your commounity.
                </p>
                <p>
                  Give announcements and reminders to people within your
                  community.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row" id="community">
          <div className="content">
            <p className="header">
              Create and manage a <span>community</span>.
            </p>
            <div className="down">
              <img src="/icons/line.svg" alt="line" />
              <div className="para">
                <p className="bold">
                  Create and manage a community using a featureful platform.
                </p>
                <p>
                  Projectia gives you a bunch of features to help you improve
                  and manage your community life.
                </p>
              </div>
            </div>
          </div>
          <div className="visual"></div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;

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
    background: var(--background);

    a {
      text-decoration: none;
      color: var(--dark);
    }

    .current {
      color: var(--bright);
    }
  }

  .container {
    width: 90%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 0 100px 0;
    border-radius: 10px;
    border-radius: 0 0 10px 10px;
    background: linear-gradient(
      90deg,
      rgba(5, 17, 30, 1) 0%,
      rgba(8, 28, 50, 1) 35%
    );

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
      }
    }
  }
`;

export default About;
