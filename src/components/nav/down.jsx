/* eslint-disable react-hooks/exhaustive-deps */

import styled from "styled-components";
import { useSelector } from "react-redux";
import React, { useState, useEffect } from "react";

//icons
import { FaUserAlt } from "react-icons/fa";
import { BiLogOutCircle } from "react-icons/bi";

//features
import axios from "../../features/axios";

const Down = ({ goToProfile, Logout, goToCreate }) => {
  //local data
  const [communities, setCommunities] = useState([]);

  //redux data
  const token = useSelector((state) => state.persist.token);
  const communityId = useSelector((state) => state.persist.community);

  useEffect(() => {
    axios("/user/communities", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        setCommunities(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container>
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
          {communities.length > 0 ? (
            <>
              {communities.map((community) => (
                <Community
                  active={community?.id === communityId}
                  key={community.id}
                >
                  <div className="image">
                    {community?.media?.media_url ? (
                      <img src={community?.media?.media_url} alt="profile" />
                    ) : (
                      <></>
                    )}
                  </div>
                  <p className="name">{community.name}</p>
                </Community>
              ))}
              <p className="more">See all</p>
            </>
          ) : (
            <li>
              <p>No communities</p>
            </li>
          )}
          <button type="button" onClick={goToCreate}>
            Create Community
          </button>
        </ul>
      </div>
    </Container>
  );
};

const Community = styled.li`
  cursor: pointer;
  width: 100%;
  transition: all 0.2s ease-in-out;

  :hover {
    filter: brightness(85%);
  }

  .image {
    width: 30px;
    height: 30px;
    overflow: hidden;
    border-radius: 50%;
    background: var(--gray);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  p.name {
    margin: 0 0 0 10px;
    color: var(--white);
  }
`;

const Container = styled.div`
  width: 210px;
  height: 300px;
  background: var(--grayish);
  z-index: 1000;
  position: absolute;
  bottom: -315px;
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
    padding: 0 5px;
    flex-direction: column;

    p.header {
      line-height: 50px;
      color: var(--white);
    }

    ul {
      width: 100%;
      height: auto;

      p.more {
        width: 100%;
        margin: 10px 0;
        color: var(--gray);
      }

      button {
        width: 100%;
        height: 40px;
        border: none;
        background: var(--bright);
        cursor: pointer;
        border-radius: 5px;
        color: var(--dark);
      }

      li {
        width: 100%;
        height: 40px;
        display: flex;
        flex-direction: row;
        align-items: center;
        list-style: none;
        border-radius: 5px;
        padding: 5px 0 5px 10px;

        .no {
          width: 100%;
          color: var(--gray);
        }
      }
    }
  }
`;

export default Down;
