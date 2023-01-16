import styled from "styled-components";
import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

//icons
import { RiHome6Fill } from "react-icons/ri";
import { HiUserGroup } from "react-icons/hi";
import {
  BsFillChatFill,
  BsBellFill,
  BsFillCaretDownFill,
} from "react-icons/bs";

const Nav = () => {
  //configs
  const location = useLocation();
  const navigate = useNavigate();

  //local data
  const [active, setActive] = React.useState("");
  const [authenticated, setAuthenticated] = React.useState(true);

  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);

  const goHome = () => {
    navigate("/");
  };

  const goTo = (path) => {
    navigate(path);
  };

  return (
    <Container>
      {authenticated ? (
        <div className="content">
          <div className="logo" onClick={goHome}>
            <img src="/min_logo.svg" alt="logo" />
          </div>
          <div className="nav">
            <Link to="/home" className={active === "/home" ? "active" : ""}>
              <RiHome6Fill className="one icon" />
            </Link>
            <Link
              to="/messages"
              className={active === "/messages" ? "active" : ""}
            >
              <BsFillChatFill className="two icon" />
            </Link>
            <Link
              to="/members"
              className={active === "/members" ? "active" : ""}
            >
              <HiUserGroup className="three icon" />
            </Link>
          </div>
          <div className="buttons">
            <div
              className="notification"
              onClick={() => goTo("/notifications")}
            >
              <BsBellFill className="icon" />
            </div>
            <div className="profile">
              <div className="image"></div>
              <p className="name">Byiringiro</p>
              <BsFillCaretDownFill className="icon" />
            </div>
          </div>
        </div>
      ) : (
        <div className="content">
          <div className="logo" onClick={goHome}>
            <img src="/min_logo.svg" alt="logo" />
          </div>
          <div className="nav">
            <Link to="/" className={active === "/" ? "active" : ""}>
              Home
            </Link>
            <Link
              to="/contact"
              className={active === "/contact" ? "active" : ""}
            >
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
      )}
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

      .icon {
        color: var(--dark);
      }

      .one {
        font-size: 2em;
      }

      .two {
        font-size: 1.7em;
      }

      .three {
        font-size: 2em;
      }
    }
  }

  .buttons {
    width: 20%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;

    .notification {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin: 0 10px 0 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--gray);
      cursor: pointer;

      .icon {
        font-size: 1.4em;
      }
    }

    .profile {
      width: 150px;
      height: 40px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      padding: 0 7px;
      border-radius: 50px;
      background: var(--gray);
      cursor: pointer;

      .image {
        width: 30px;
        height: 30px;
        margin: 0 7px 0 0;
        border-radius: 50%;
        background: var(--dark);
      }

      .icon {
        margin: 0 0 0 15px;
      }
    }

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
