import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <Container>
      <div className="box">
        <div className="banner"></div>
        <div className="about">
          <div className="div">
            <p className="up">12</p>
            <p className="down">Skills</p>
          </div>
          <div className="person">
            <div className="picture"></div>
            <div className="name">
              <p className="up">Byiringiro saad</p>
              <p className="down">@_byiringiro_</p>
            </div>
          </div>
          <div className="div">
            <p className="up">34</p>
            <p className="down">Posts</p>
          </div>
        </div>
        <div className="para">
          <p>Hello, i’m a software engineer. Crazy about VR and AR.</p>
        </div>
        <div className="button">
          <Link to="/profile">My Profile</Link>
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
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

    .banner {
      width: 100%;
      height: 130px;
      background: var(--gray);
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

        .picture {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: var(--dark);
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
      }
    }

    .para {
      width: 85%;
      height: auto;
      display: flex;
      padding: 20px 5px;
      align-items: center;
      justify-content: center;
      border-bottom: 4px solid var(--gray);

      p {
        text-align: center;
      }
    }

    .button {
      width: 100%;
      height: 70px;
      display: flex;
      align-items: center;
      justify-content: center;

      a {
        width: 80%;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        background: var(--gray);
        text-decoration: none;
        color: var(--dark);
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
        color: var(--dark);
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
          height: 30px;
          border-radius: 50px;
          border: none;
          background: var(--gray);
        }
      }
    }
  }
`;

export default Profile;