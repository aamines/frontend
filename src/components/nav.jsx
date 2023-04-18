import jwtDecode from "jwt-decode";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";

//icons
import { FaUserAlt } from "react-icons/fa";
import { RiHome6Fill } from "react-icons/ri";
import { HiUserGroup } from "react-icons/hi";
import { BiLogOutCircle } from "react-icons/bi";
import {
  BsBellFill,
  BsFillChatFill,
  BsFillCaretUpFill,
  BsFillCaretDownFill,
} from "react-icons/bs";

//features
import axios from "../features/axios";

//actions
import { removeToken, addHasAccount } from "../store/reducers/persist";

const Nav = () => {
  //configs
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //local data
  const [user, setUser] = useState({});
  const [down, setDown] = useState(false);
  const [active, setActive] = useState("");
  const [authenticated, setAuthenticated] = useState(true);

  // redux data
  const token = useSelector((state) => state.persist.token);
  const hasAccount = useSelector((state) => state.persist.hasAccount);

  const goTo = (path) => {
    const { id } = jwtDecode(token);
    navigate(`/client/${id}/${path}`);
  };

  const goToNotifications = () => {
    if (hasAccount) {
      goTo("notifications");
    } else {
      navigate("/notifications");
    }
  };

  const goToProfile = () => {
    if (hasAccount) {
      goTo("profile");
    } else {
      navigate("/profile");
    }
  };

  useEffect(() => {
    setDown(false);
    setActive(location.pathname);
  }, [location.pathname]);

  //Functions
  const goHome = () => {
    if (authenticated) {
      if (hasAccount) {
        goTo("home");
      } else {
        navigate("/profile");
      }
    } else {
      navigate("/");
    }
  };

  const Logout = () => {
    dispatch(removeToken());
    dispatch(addHasAccount(false));
    setAuthenticated(false);
    navigate("/login");
  };

  const handleDown = () => {
    setDown(!down);
  };

  useEffect(() => {
    if (token?.length > 0) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  }, [navigate, token]);

  useEffect(() => {
    if (token?.length > 0) {
      const decoded = jwtDecode(token);
      axios
        .get(`/user/${decoded.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setUser(res.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [authenticated, token]);

  useEffect(() => {
    if (token?.length < 1) {
      setAuthenticated(false);
      navigate("/login");
    } else {
      axios
        .post("/auth/verify-token", {
          token: `${token}`,
        })
        .then(() => {
          setAuthenticated(true);
        })
        .catch(() => {
          setAuthenticated(false);
          navigate("/login");
        });
    }
  }, []);

  return (
    <Container>
      {authenticated ? (
        <div className="content">
          <div className="logo">
            <img src="/min_logo.svg" onClick={goHome} alt="logo" />
            <input type="text" placeholder="Search here..." />
          </div>
          {hasAccount && (
            <div className="nav">
              <div
                onClick={() => goTo("home")}
                className={active === "/home" ? "active" : ""}
              >
                <RiHome6Fill className="one icon" />
              </div>
              <div
                onClick={() => goTo("messages")}
                className={active === "/messages" ? "active" : ""}
              >
                <BsFillChatFill className="two icon" />
              </div>
              <div
                onClick={() => goTo("members")}
                className={active === "/members" ? "active" : ""}
              >
                <HiUserGroup className="three icon" />
              </div>
            </div>
          )}
          <div className="buttons">
            <div className="notification" onClick={goToNotifications}>
              <BsBellFill className="icon" />
            </div>
            <div className="profile" onClick={handleDown}>
              <div className="image"></div>
              <p className="name">{user?.names?.split(" ")[0]}</p>
              {down ? (
                <BsFillCaretUpFill className="icon" />
              ) : (
                <BsFillCaretDownFill className="icon" />
              )}
            </div>
            {down && (
              <div className="down">
                <div className="row" onClick={goToProfile}>
                  <FaUserAlt className="icon" />
                  <p>Profile</p>
                </div>
                <div className="row" onClick={Logout}>
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

    div {
      margin: 0 30px;
      text-decoration: none;
      color: var(--white);
      cursor: pointer;

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
              height: 40px;
              border: none;
              background: var(--bright);
              cursor: pointer;
              border-radius: 5px;
              color: var(--dark);
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
