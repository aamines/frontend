/* eslint-disable react-hooks/exhaustive-deps */

import moment from "moment";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

//icons
import { IoMdArrowRoundBack } from "react-icons/io";

//features
import axios from "../../features/axios";

//actions
import { setAccount } from "../../store/reducers/persist";

const Settings = () => {
  //config
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //redux data
  const account = useSelector((state) => state.persist.account);

  //local data
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState("profile");

  const goBack = () => {
    navigate(`/client/${account?.id}/profile`);
  };

  useEffect(() => {
    if (location.pathname.includes("profile")) {
      setActive("profile");
    } else if (location.pathname.includes("community")) {
      setActive("community");
    } else if (location.pathname.includes("notification")) {
      setActive("notification");
    } else if (location.pathname.includes("security")) {
      setActive("security");
    }
  }, [location]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`/account/${account?.id}`)
      .then((res) => {
        dispatch(setAccount(res.data.data));
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <Container>
      <div className="center">
        <div className="top" onClick={goBack}>
          <IoMdArrowRoundBack className="icon" />
          <p>Back</p>
        </div>
        <div className="header">
          <div className="image"></div>
          <div className="about">
            <div className="name">
              <p>{account?.community?.name}</p>
            </div>
            <div className="more">
              <div className="row">
                <p className="first">Members</p>
                <p>{account?.community?.accounts?.length}</p>
              </div>
              <div className="row">
                <p className="first">Date joined</p>
                <p>{moment(account?.createdAt).format("Do MMM YYYY")}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="sidebar">
            <Link
              className={active === "profile" ? "active" : ""}
              to={`/client/${account?.id}/settings/profile`}
            >
              My profile
            </Link>
            <Link
              className={active === "community" ? "active" : ""}
              to={`/client/${account?.id}/settings/community`}
            >
              Community
            </Link>
            <Link
              className={active === "notification" ? "active" : ""}
              to={`/client/${account?.id}/settings/notification`}
            >
              Notifications
            </Link>
            <Link
              className={active === "security" ? "active" : ""}
              to={`/client/${account?.id}/settings/security`}
            >
              Password and security
            </Link>
            <Line active={active} />
          </div>
          <div className="content">{!loading && <Outlet />}</div>
        </div>
      </div>
    </Container>
  );
};

const Line = styled.div`
  width: 3px;
  left: 0;
  transition: all 0.3s ease-in-out;
  height: 30px;
  position: absolute;
  background: var(--bright);
  top: ${(props) =>
    props.active === "profile"
      ? "8px"
      : props.active === "community"
      ? "59px"
      : props.active === "notification"
      ? "110px"
      : "158px"};
`;

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  .center {
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media only screen and (min-width: 1200px) {
      width: 1200px;
    }

    @media only screen and (max-width: 1200px) {
      width: 90%;
    }

    .top {
      width: 100px;
      height: 40px;
      margin: 20px 0;
      display: flex;
      color: var(--white);
      border-radius: 5px;
      flex-direction: row;
      align-items: center;
      justify-content: space-evenly;
      background: var(--dark);
      cursor: pointer;

      .icon {
        font-size: 1.5em;
      }
    }

    .header {
      width: 100%;
      height: 150px;
      margin: 0 0 20px 0;
      display: flex;
      flex-direction: row;
      align-items: center;

      .image {
        width: 20%;
        height: 100%;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--dark);
        margin: 0 15px 0 0;
      }

      .about {
        width: 75%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        .name {
          width: 100%;
          height: 50px;
          display: flex;
          flex-direction: row;
          align-items: center;
          border-bottom: 1px solid var(--grayish);

          p {
            font-size: 2em;
            font-weight: 700;
            color: var(--white);
          }
        }

        .more {
          width: 100%;
          height: 100px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;

          .row {
            width: 100%;
            height: 35px;
            display: flex;
            flex-direction: row;

            p {
              color: var(--gray);
            }

            p.first {
              width: 100px;
            }
          }
        }
      }
    }

    .container {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: row;

      .sidebar {
        width: 200px;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: 0 80px 0 0;
        position: relative;

        a {
          width: 100%;
          height: 50px;
          display: flex;
          margin: 0 0 0 15px;
          align-items: center;
          text-decoration: none;
          color: var(--gray);
          transition: all 0.3s ease-in-out;
        }

        a.active {
          color: var(--white);
        }
      }

      .content {
        width: 100%;
        height: auto;
        margin: 0 0 50px 0;
        border-radius: 5px;
        background: var(--dark);
        transition: all 0.3s ease-in-out;
      }
    }
  }
`;

export default Settings;
