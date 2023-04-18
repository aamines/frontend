import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

//features
import axios from "../../features/axios";
import { useSelector } from "react-redux";

const Profile = () => {
  //config
  const navigate = useNavigate();

  //local data
  const [user, setUser] = useState({});
  const [account, setAccount] = useState({});

  //redux data
  const accountId = useSelector((state) => state.persist.account);

  const goToProfile = () => {
    navigate(`/client/${accountId}/profile`);
  };

  useEffect(() => {
    axios
      .get(`/account/${accountId}`)
      .then((res) => {
        setAccount(res.data.data);
        setUser(res.data.data.user);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [accountId]);

  return (
    <Container>
      <div className="box">
        <div className="banner"></div>
        <div className="about">
          <div className="div">
            <p className="up">{account?.skills || 0}</p>
            <p className="down">Skills</p>
          </div>
          <div className="person">
            <div className="picture"></div>
            <div className="name">
              <p className="up">{user?.names}</p>
              <p className="down"></p>
            </div>
          </div>
          <div className="div">
            <p className="up">{account?.posts || 0}</p>
            <p className="down">Posts</p>
          </div>
        </div>
        <div className="para">
          <p>{account?.about || "No description"}</p>
        </div>
        <div className="button">
          <p onClick={goToProfile}>My Profile</p>
        </div>
      </div>
      <div className="skills">
        <div className="header">
          <p>Skills</p>
        </div>
        <ul>
          <li>
            <button>Add</button>
          </li>
        </ul>
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

  .box {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
    overflow: hidden;
    background: var(--dark);

    .banner {
      width: 100%;
      height: 130px;
      background: var(--grayish);
    }

    .about {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;

      .person {
        width: 40%;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: center;

        .name {
          p.up {
            color: var(--white);
          }

          p.down {
            color: var(--gray);
          }
        }

        .picture {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: var(--gray);
          margin: -60px 0 15px 0;
        }
      }

      .div {
        width: 25%;
        height: 80px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        p.up {
          color: var(--white);
        }

        p.down {
          color: var(--gray);
        }
      }
    }

    .para {
      width: 85%;
      height: auto;
      display: flex;
      padding: 20px 5px;
      align-items: center;
      justify-content: center;
      border-bottom: 2px solid var(--gray);

      p {
        text-align: center;
        color: var(--white);
      }
    }

    .button {
      width: 100%;
      height: 70px;
      display: flex;
      align-items: center;
      justify-content: center;

      p {
        width: 80%;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        background: var(--bright);
        text-decoration: none;
        color: var(--dark);
        cursor: pointer;
      }
    }
  }

  .skills {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 10px;

    .header {
      width: 100%;
      height: 60px;
      display: flex;
      align-items: center;

      p {
        color: var(--white);
        font-size: 1.1em;
      }
    }

    ul {
      width: 100%;
      height: auto;
      display: flex;
      flex-wrap: wrap;

      li {
        list-style: none;

        button {
          cursor: pointer;
          width: 100px;
          height: 35px;
          border-radius: 50px;
          border: none;
          color: var(--white);
          background: var(--grayish);
        }
      }
    }
  }
`;

export default Profile;
