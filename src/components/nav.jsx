import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
  const [scrolled, setScrolled] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    window.onscroll = function () {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  });

  const goHome = () => {
    navigate("/");
  };

  return (
    <Container>
      <div className={scrolled ? "shadow container" : "container"}>
        <div className="left">
          <div className="logo" onClick={goHome}>
            <img src="/max_logo.svg" alt="logo" />
          </div>
          <div className="nav">
            <a href="/#home">Home</a>
            <a href="/#devices">Devices</a>
            <a href="/#contact">Contact</a>
          </div>
        </div>
        <div
          className="right"
          style={scrolled ? { cursor: "initial" } : { cursor: "none" }}
        >
          <Link
            to="/waitlist"
            // style={scrolled ? { cursor: "pointer" } : { cursor: "none" }}
          >
            Join
          </Link>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  .shadow {
    box-shadow: 0px 0px 30px -4px rgba(100, 100, 100, 0.15);
    background: var(--background);
  }
  .container {
    width: 100%;
    height: 70px;
    padding: 0 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    z-index: 10;

    .left {
      width: 40%;
      height: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      .logo {
        width: auto;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;

        img {
          width: 130px;
        }
      }

      .nav {
        width: 65%;
        height: 100%;
        margin: 0 0 0 20px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;

        a {
          text-decoration: none;
          color: var(--dark);
          font-weight: 600;
        }
      }
    }

    .right {
      width: 50%;
      height: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
      cursor: none;

      a {
        padding: 6px 40px;
        border-radius: 3px;
        text-decoration: none;
        font-weight: 600;
        background: var(--bright);
        color: var(--white);
      }
    }
  }

  @media only screen and (max-width: 600px) {
    .container {
      padding: 0 10px;

      .left {
        .nav {
          display: none;
        }
      }
    }
  }

  @media only screen and (min-width: 600px) and (max-width: 768px) {
    .container {
      .left {
        width: 78%;
      }

      .right {
        width: 20%;
      }
    }
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    .container {
      .left {
        width: 50%;
      }

      .right {
        width: 40%;
      }
    }
  }
`;

export default Nav;
