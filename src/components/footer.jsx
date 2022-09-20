import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { BsLinkedin, BsTwitter } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <Container>
      <p className="logo">Projectia</p>
      <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/explore">Explore</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>
      <div className="links">
        <div className="link">
          <BsLinkedin className="icon" />
        </div>
        <div className="link">
          <BsTwitter className="icon" />
        </div>
        <div className="link">
          <RiInstagramFill className="icon" />
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 300px;
  background: #e6f7ee;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .logo {
    font-size: 2rem;
    font-weight: 800;
    text-transform: uppercase;
    color: var(--bright);
  }

  .nav {
    width: 100%;
    height: 40%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    a {
      margin: 0 20px;
      text-decoration: none;
      color: var(--dark);
    }
  }

  .links {
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    .link {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 20px;
      border: 1px solid var(--dark);

      .icon {
        font-size: 1em;
        color: var(--dark);
      }
    }
  }
`;

export default Footer;
