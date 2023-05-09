/* eslint-disable react-hooks/exhaustive-deps */

import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";

//icons
import { RiHome6Fill } from "react-icons/ri";
import { HiUserGroup } from "react-icons/hi";
import {
  BsBellFill,
  BsFillChatFill,
  BsFillCaretUpFill,
  BsFillCaretDownFill,
} from "react-icons/bs";

//actions
import {
  removeToken,
  setHasAccount,
  removeAccount,
  removeCommunity,
  setAuthenticated,
  setTokenVerified,
} from "../../store/reducers/persist";
import Down from "./down";
import Notifications from "./notifications";

const Nav = () => {
  //configs
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //local data
  const [down, setDown] = useState(false);
  const [active, setActive] = useState("");
  const [render, setRender] = useState(false);
  const [notifications, setNotifications] = useState(true);

  // redux data
  const account = useSelector((state) => state.persist.account);
  const hasAccount = useSelector((state) => state.persist.hasAccount);
  const authenticated = useSelector((state) => state.persist.authenticated);

  useEffect(() => {
    setDown(false);
    setActive(location.pathname);
  }, [location.pathname]);

  //Functions
  const goTo = (path) => {
    navigate(`/client/${account.id}/${path}`);
  };

  const goToNotifications = () => {
    setNotifications(!notifications);
  };

  const goToProfile = () => {
    if (hasAccount) {
      goTo("profile");
    } else {
      navigate("/profile");
    }
  };

  const goToCreate = () => {
    navigate("/community/new");
  };

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
    dispatch(removeAccount());
    dispatch(removeCommunity());
    dispatch(setHasAccount(false));
    dispatch(setAuthenticated(false));
    dispatch(setTokenVerified(false));
    navigate("/login");
  };

  const handleDown = () => {
    setDown(!down);
  };

  useEffect(() => {
    setRender(!render);
  }, [navigate]);

  return (
    <Container>
      {authenticated ? (
        <div className="content">
          {notifications && <Notifications />}
          <div className="logo">
            <img src="/min_logo.svg" onClick={goHome} alt="logo" />
            {hasAccount && <input type="text" placeholder="Search here..." />}
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
                onClick={() => goTo("all/members")}
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
            {hasAccount && (
              <div className="profile" onClick={handleDown}>
                <div className="image">
                  {account?.media_profile?.media_url ? (
                    <img
                      src={account?.media_profile?.media_url}
                      alt="profile"
                    />
                  ) : (
                    <p>{account?.names?.charAt(0)}</p>
                  )}
                </div>
                <p className="name">{account?.names?.split(" ")[0]}</p>
                {down ? (
                  <BsFillCaretUpFill className="icon" />
                ) : (
                  <BsFillCaretDownFill className="icon" />
                )}
              </div>
            )}
            {down && (
              <Down
                goToProfile={goToProfile}
                Logout={Logout}
                goToCreate={goToCreate}
              />
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

    div,
    a {
      margin: 0 30px;
      text-decoration: none;
      color: var(--white);
      cursor: pointer;

      .icon {
        color: var(--white);
        transition: all 0.1s ease-in-out;

        :hover {
          filter: brightness(85%);
        }
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
      transition: all 0.1s ease-in-out;

      .icon {
        font-size: 1.4em;
        color: var(--white);
      }

      :hover {
        filter: brightness(85%);
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
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        margin: 0 7px 0 0;
        border-radius: 50%;
        background: var(--bright);

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        p {
          font-weight: 700;
          color: var(--dark);
        }
      }

      .icon {
        margin: 0 0 0 15px;
        color: var(--white);
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
      color: var(--dark);
    }
  }
`;

export default Nav;
