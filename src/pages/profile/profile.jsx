/* eslint-disable react-hooks/exhaustive-deps */

import styled from "styled-components";
import { useNavigate } from "react-router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//icons
import { MdEdit } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";

//features
import axios from "../../features/axios";

//components
import Groups from "../../components/profile/groups";
import Milestones from "../../components/profile/milestones";
import Achievements from "../../components/profile/achievements";

//actions
import { setAccount } from "../../store/reducers/persist";

const Profile = () => {
  //config
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //local data
  const [loading, setLoading] = useState(false);

  //redux data
  const account = useSelector((state) => state.persist.account);
  const hasAccount = useSelector((state) => state.persist.hasAccount);

  //state data
  const groups = useSelector((state) => state.groups);
  const milestones = useSelector((state) => state.milestones);
  const achievements = useSelector((state) => state.achievements);

  const goToSettings = () => {
    navigate(`/client/${account?.id}/settings/profile`);
  };

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
    <Container
      banner={account?.media_banner?.media_url}
      profile={account?.media_profile?.media_url}
    >
      <div className="container">
        <div className="top">
          <button type="button" onClick={goToSettings}>
            <IoMdSettings className="icon" />
            <p>Settings</p>
          </button>
        </div>
        <div className="content">
          <div className="banner">
            <div className="edit">
              <MdEdit className="icon" />
            </div>
          </div>
          <div className="info">
            <div className="one">
              <div className="profile">
                {!account?.media_profile?.media_url && (
                  <p>{account?.names?.charAt(0)}</p>
                )}
                <div className="edit">
                  <MdEdit className="icon" />
                </div>
              </div>
              <div className="about">
                <div className="names">
                  <p className="name">
                    {loading ? "Loading..." : account?.names}
                  </p>
                  <p className="handle">
                    {loading ? "Loading..." : account?.handler}
                  </p>
                </div>
                <div className="para">
                  <p>
                    {loading
                      ? "Loading..."
                      : hasAccount
                      ? account?.bio?.length > 0
                        ? account?.bio
                        : "No Description"
                      : "No Description"}
                  </p>
                </div>
                <div className="stats">
                  <div className="stat">
                    <img src="/icons/list.svg" alt="list" />
                    <p>
                      {loading
                        ? "Loading..."
                        : hasAccount
                        ? account?.skills?.length || 0 + " Skills"
                        : "No Skills"}
                    </p>
                  </div>
                  <div className="stat">
                    <img src="/icons/list.svg" alt="list" />
                    <p>
                      {loading
                        ? "Loading..."
                        : hasAccount
                        ? account?.posts?.length || 0 + " Posts"
                        : "No Posts"}
                    </p>
                  </div>
                  <div className="stat">
                    <img src="/icons/list.svg" alt="list" />
                    <p>
                      {loading
                        ? "Loading..."
                        : hasAccount
                        ? account?.posts?.length || 0 + " Groups"
                        : "No Groups"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="more">
              <div className="rank">
                <p className="head">Rank</p>
              </div>
              <div className="skills">
                <p className="head">Skills</p>
                <ul className="list">
                  <li>
                    <button>Add</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="milestones">
          <Milestones milestones={milestones} />
        </div>
        <div className="milestones">
          <Achievements achievements={achievements} />
        </div>
        <div className="milestones">
          <Groups groups={groups} />
        </div>
      </div>
    </Container>
  );
};

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
    align-items: center;

    @media only screen and (min-width: 1200px) {
      width: 1200px;
    }

    @media only screen and (max-width: 1200px) {
      width: 90%;
    }

    .top {
      width: 100%;
      height: 100px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;

      button {
        width: 140px;
        height: 40px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        border: none;
        background: var(--grayish);
        border-radius: 5px;
        cursor: pointer;

        p {
          color: var(--white);
        }

        .icon {
          display: flex;
          font-size: 1.2em;
          margin: -2px 10px 0 0;
          align-items: center;
          justify-content: center;
          color: var(--white);
        }
      }
    }

    .content {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
      align-items: center;

      .banner {
        width: 100%;
        height: 250px;
        border-radius: 5px;
        position: relative;
        background: url(${(props) => props.banner});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;

        .edit {
          width: 35px;
          height: 35px;
          position: absolute;
          bottom: 20px;
          right: 20px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--dark);
          cursor: pointer;

          .icon {
            color: var(--white);
          }
        }
      }

      .info {
        width: 95%;
        height: auto;
        position: relative;

        .one {
          width: 100%;
          height: auto;
          display: flex;
          flex-direction: row;

          .profile {
            width: 170px;
            height: 170px;
            margin: -80px 0 0 0;
            z-index: 100;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background: ${(props) =>
              props.profile ? `url(${props.profile})` : "var(--bright)"};
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            position: relative;

            p {
              font-size: 5.5em;
            }

            .edit {
              width: 35px;
              height: 35px;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              background: var(--grayish);
              cursor: pointer;
              position: absolute;
              bottom: -1px;
              right: 20px;

              .icon {
                color: var(--white);
              }
            }
          }

          .about {
            width: auto;
            height: auto;
            display: flex;
            margin: 0 0 0 20px;
            flex-direction: column;

            .names {
              width: 100%;
              height: auto;
              display: flex;
              margin: 15px 0 15px 0;

              p {
                color: var(--white);
              }

              p.handle {
                margin: 0 0 0 15px;
                color: var(--gray);
              }
            }

            .para {
              width: 100%;
              height: auto;
              margin: 0 0 15px 0;

              p {
                color: var(--gray);
              }
            }

            .stats {
              width: 100%;
              height: auto;
              display: flex;

              .stat {
                width: auto;
                height: auto;
                display: flex;
                align-items: center;
                margin: 0 40px 0 0;

                p {
                  color: var(--white);
                }

                img {
                  width: 15px;
                  margin: 0 5px 0 0;
                }
              }
            }
          }
        }

        .more {
          width: 100%;
          height: auto;
          display: flex;
          margin: 30px 0 10px 0;
          flex-direction: row;

          .rank {
            width: 170px;
            padding: 20px;
            height: 130px;
            border-radius: 5px;
            display: flex;
            flex-direction: column;
            align-items: center;
            background: var(--grayish);

            p.head {
              font-size: 1.1em;
              color: var(--white);
            }
          }

          .skills {
            width: auto;
            height: auto;
            display: flex;
            margin: 0 0 0 25px;
            flex-direction: column;

            p.head {
              font-size: 1.1em;
              color: var(--white);
            }

            .list {
              width: 100%;
              height: auto;
              display: flex;
              flex-direction: row;
              flex-wrap: wrap;
              margin: 10px 0 0 0;

              li {
                width: auto;
                height: auto;
                display: flex;
                margin: 0 10px 0 0;

                button {
                  width: 100px;
                  height: 35px;
                  background: var(--grayish);
                  color: var(--white);
                  border: none;
                  border-radius: 50px;
                  cursor: pointer;
                }
              }
            }
          }
        }
      }
    }

    .milestones {
      width: 95%;
      height: auto;
      display: flex;
      flex-direction: column;
    }
  }
`;

export default Profile;
