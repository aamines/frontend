import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [active, setActive] = React.useState("");

  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);

  const goHome = () => {
    navigate("/");
  };

  return (
    <Container>
      <div className="content">
        <div className="logo" onClick={goHome}>
          <img src="/min_logo.svg" alt="logo" />
        </div>
        <div className="nav">
          <Link to="/" className={active === "/" ? "active" : ""}>
            Home
          </Link>
          <Link to="/contact" className={active === "/contact" ? "active" : ""}>
            Contact
          </Link>
        </div>
        <div className="buttons">
          <Link to="/login" className={active === "/login" ? "active" : ""}>
            Login
          </Link>
          <Link to="/signup" className="signup">
            Signup
          </Link>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--white);

  @media only screen and (min-width: 1200px) {
    .content {
      width: 1200px;
      display: flex;
      padding: 0 80px;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  }

  @media only screen and (max-width: 1200px) {
    .content {
      width: 90%;
      display: flex;
      padding: 0 80px;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  }

  .logo {
    width: 20%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;

    img {
      width: 30px;
    }
  }

  .active {
    color: var(--bright) !important;
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
