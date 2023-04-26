/* eslint-disable react-hooks/exhaustive-deps */

import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation, useNavigate, useParams } from "react-router";

//icons
import { FaUserPlus } from "react-icons/fa";

//features
import axios from "../features/axios";

//actions
import { setData } from "../store/reducers/community/data";
import Invite from "../components/members/people/invite";

const Members = () => {
  //config
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //redux data
  const token = useSelector((state) => state.persist.token);
  const account = useSelector((state) => state.persist.account);
  const community = useSelector((state) => state.community.data.community);

  //local data
  const [invite, setInvite] = useState(true);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState("members");

  const goToMembers = () => {
    navigate(`/client/${params?.account}/all/members`);
  };

  const goToGroups = () => {
    navigate(`/client/${params?.account}/all/groups`);
  };

  const handleInvite = () => {
    setInvite(!invite);
  };

  useEffect(() => {
    if (location.pathname?.includes("members")) {
      setActive("members");
    } else {
      setActive("groups");
    }
  }, [navigate]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`/community/${account?.communityId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        dispatch(setData(res.data));
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
      {invite && <Invite close={handleInvite} />}
      <div className="container">
        <div className="top">
          <div className="navigation">
            <div
              className={active === "members" ? "item active" : "item"}
              onClick={goToMembers}
            >
              <p>Members</p>
              <div className="num">
                <p>{community?.accounts?.length}</p>
              </div>
            </div>
            <div
              className={active === "groups" ? "item active" : "item"}
              onClick={goToGroups}
            >
              <p>Groups</p>
              <div className="num">
                <p>{community?.groups?.length}</p>
              </div>
            </div>
            <Line active={active} />
          </div>
          <div className="new">
            <FaUserPlus className="icon" />
            <p>Invite members</p>
          </div>
        </div>
        {!loading && <Outlet />}
      </div>
    </Container>
  );
};

const Line = styled.div`
  width: 160px;
  height: 2px;
  background: var(--bright);
  position: absolute;
  bottom: -1px;
  transition: all 0.3s ease-in-out;
  left: ${(props) => (props.active === "members" ? "-18px" : "150px")};
`;

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  .container {
    height: auto;
    display: flex;
    flex-direction: column;
    margin: 25px 0;

    @media only screen and (min-width: 1200px) {
      width: 1200px;
    }

    @media only screen and (max-width: 1200px) {
      width: 90%;
    }

    .top {
      width: 100%;
      height: 60px;
      display: flex;
      flex-direction: row;
      align-items: center;
      margin: 0 0 40px 0;
      justify-content: center;
      border-bottom: 1px solid var(--grayish);
      position: relative;

      .navigation {
        width: auto;
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        position: relative;

        .item {
          width: auto;
          height: 100%;
          margin: 0 50px 0 0;
          display: flex;
          flex-direction: row;
          align-items: center;
          cursor: pointer;

          p {
            color: var(--gray);
            transition: all 0.3s ease-in;
          }

          .num {
            padding: 8px 20px;
            margin: 0 0 0 10px;
            border-radius: 50px;
            background: var(--grayish);
          }
        }

        .active {
          p {
            color: var(--white);
          }
        }
      }

      .new {
        padding: 10px 30px;
        position: absolute;
        right: 15px;
        display: flex;
        flex-direction: row;
        align-items: center;
        background: var(--grayish);
        border-radius: 50px;
        cursor: pointer;
        color: var(--gray);
        transition: all 0.3s ease-in-out;

        :hover {
          color: var(--white);
        }

        .icon {
          font-size: 1.2em;
          margin: 0 10px 0 0;
        }
      }
    }
  }
`;

export default Members;
