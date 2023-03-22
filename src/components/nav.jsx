import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

//icons
import { FaUserAlt } from "react-icons/fa";
import { RiHome6Fill } from "react-icons/ri";
import { HiUserGroup } from "react-icons/hi";
import { BiLogOutCircle } from "react-icons/bi";
import {
  BsFillChatFill,
  BsBellFill,
  BsFillCaretDownFill,
  BsFillCaretUpFill,
} from "react-icons/bs";

const Nav = () => {
  //configs
  const location = useLocation();
  const navigate = useNavigate();

  //local data
  const [active, setActive] = useState("");
  const [down, setDown] = useState(false);
  const [authenticated, setAuthenticated] = useState(true);

  useEffect(() => {
    setDown(false);
    setActive(location.pathname);
  }, [location.pathname]);

  //Functions
  const goHome = () => {
    navigate("/");
  };

  const goTo = (path) => {
    navigate(path);
  };

  const handleDown = () => {
    setDown(!down);
  };

  useEffect(() => {
    const token = localStorage.getItem("projectia_auth_token");
    if (token) {
      setAuthenticated(true);
    } else {
      navigate("/login");
      setAuthenticated(false);
    }
  }, [navigate]);

  return (
    <Container>
      {authenticated ? (
        <div className="content">
          <div className="logo" onClick={goHome}>
            <img src="/min_logo.svg" alt="logo" />
            <input type="text" placeholder="Search here..." />
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
            <div className="profile" onClick={handleDown}>
              <div className="image"></div>
              <p className="name">Byiringiro</p>
              {down ? (
                <BsFillCaretUpFill className="icon" />
              ) : (
                <BsFillCaretDownFill className="icon" />
              )}
            </div>
            {down && (
              <div className="down">
                <div className="row" onClick={() => goTo("/profile")}>
                  <FaUserAlt className="icon" />
                  <p>Profile</p>
                </div>
                <div className="row">
                  <BiLogOutCircle className="icon" />
                  <p>Logout</p>
                </div>
                <div className="big">
                  <p className="header">Communities</p>
                  <ul className="communities">
                    <li>
                      <p className="no">No Communities</p>
                    </li>
                    <li
                      className="community"
                      onClick={() => goTo("/community/new")}
                    >
                      <button>Create Community</button>
                    </li>
                  </ul>
                </div>
              </div>
            )}
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
  background: var(--dark);

  @media only screen and (min-width: 1200px) {
    .content {
      width: 1200px;
      display: flex;
      /* padding: 0 50px; */
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      position: relative;
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
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;

    img {
      width: 30px;
    }

    input {
      width: calc(100% - 40px);
      height: 35px;
      border: none;
      background: var(--grayish);
      border-radius: 50px;
      margin: 0 0 0 10px;
      padding: 3px 10px 0 15px;
      outline: none;
      color: var(--white);
    }
  }

  .active {
    color: var(--bright) !important;
  }

  .nav {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    a {
      margin: 0 30px;
      text-decoration: none;
      color: var(--white);

      .icon {
        color: var(--white);
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
    width: 25%;
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
      background: var(--grayish);
      cursor: pointer;

      .icon {
        font-size: 1.4em;
        color: var(--white);
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
      background: var(--grayish);
      cursor: pointer;

      p {
        color: var(--white);
      }

      .image {
        width: 30px;
        height: 30px;
        margin: 0 7px 0 0;
        border-radius: 50%;
        background: var(--dark);
      }

      .icon {
        margin: 0 0 0 15px;
        color: var(--white);
      }
    }

    .down {
      width: 210px;
      height: 250px;
      background: var(--grayish);
      z-index: 1000;
      position: absolute;
      bottom: -265px;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      right: -5px;
      padding: 10px;
      box-shadow: rgba(0, 0, 0, 0.432) 0px 1px 4px;

      .row {
        width: 100%;
        height: 40px;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0 10px;
        cursor: pointer;
        border-radius: 5px;

        p {
          color: var(--white);
        }

        .icon {
          font-size: 1.1em;
          margin: 0 10px 0 0;
          color: var(--white);
        }

        :hover {
          background: var(--dark);
        }
      }

      .big {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        padding: 0 10px;

        p.header {
          line-height: 50px;
          color: var(--white);
        }

        ul {
          width: 100%;

          li {
            height: 40px;
            width: 100%;
            list-style: none;
            margin: 0 0 0 10px;

            .no {
              width: 100%;
              color: var(--gray);
            }

            button {
              width: 95%;
              height: 30px;
              border: none;
              background: var(--bright);
              cursor: pointer;
              border-radius: 5px;
              color: var(--white);
            }
          }
        }
      }
    }

    a {
      margin: 0 0 0 30px;
      text-decoration: none;
      color: var(--white);
    }

    .signup {
      padding: 6px 30px;
      background: var(--bright);
      border-radius: 20px;
    }
  }
`;

export default Nav;
