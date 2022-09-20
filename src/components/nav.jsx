import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
  return (
    <Container>
      <div className="logo">
        <img src="/min_logo.svg" alt="logo" />
      </div>
      <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/explore">Explore</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="buttons">
        <Link to="/login">Login</Link>
        <Link to="/signup" className="signup">
          Signup
        </Link>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  padding: 0 20px;
  flex-direction: row;
  align-items: center;
  background: var(--white);
  justify-content: space-between;

  .logo {
    width: 20%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    img {
      width: 30px;
    }
  }

  .nav {
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    a {
      margin: 0 30px;
      text-decoration: none;
      color: var(--dark);
    }
  }

  .buttons {
    width: 20%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;

    a {
      margin: 0 0 0 30px;
      text-decoration: none;
      color: var(--dark);
    }

    .signup {
      padding: 6px 30px;
      background: var(--bright);
      border-radius: 20px;
    }
  }
`;

export default Nav;
