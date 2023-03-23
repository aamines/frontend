import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

//icons
import { MdEdit } from "react-icons/md";

//components
import Milestones from "../../components/profile/milestones";
import Achievements from "../../components/profile/achievements";
import Groups from "../../components/profile/groups";

const Profile = () => {
  const groups = useSelector((state) => state.groups);
  const milestones = useSelector((state) => state.milestones);
  const achievements = useSelector((state) => state.achievements);

  return (
    <Container>
      <div className="container">
        <div className="top">
          <button>
            <MdEdit className="icon" />
            <p>Edit Profile</p>
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
                <div className="edit">
                  <MdEdit className="icon" />
                </div>
              </div>
              <div className="about">
                <div className="names">
                  <p className="name">Byiringiro saad</p>
                  <p className="handle">@_byiringiro_</p>
                </div>
                <div className="para">
                  <p>Hello, I’m a software engineer. Crazy about VR and AR</p>
                </div>
                <div className="stats">
                  <div className="stat">
                    <img src="/icons/list.svg" alt="list" />
                    <p>0 Skills</p>
                  </div>
                  <div className="stat">
                    <img src="/icons/list.svg" alt="list" />
                    <p>0 Posts</p>
                  </div>
                  <div className="stat">
                    <img src="/icons/list.svg" alt="list" />
                    <p>0 Groups</p>
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

        p {
          color: var(--white);
        }

        .icon {
          display: flex;
          margin: -2px 5px 0 5px;
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
        background: var(--grayish);

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
            background: var(--dark);

            .edit {
              width: 35px;
              height: 35px;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              background: var(--white);
              cursor: pointer;

              .icon {
                color: var(--dark);
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
