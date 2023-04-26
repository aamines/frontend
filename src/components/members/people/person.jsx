import React from "react";
import styled from "styled-components";

//icons
import { BiDotsHorizontalRounded } from "react-icons/bi";

const Person = ({ person }) => {
  return (
    <Container>
      <div className="well">
        <select defaultValue={person?.role?.role}>
          <option value="admin">Admin</option>
          <option value="manager">manager</option>
          <option value="employee">Employee</option>
        </select>
        <div className="bars">
          <BiDotsHorizontalRounded className="icon" />
        </div>
      </div>
      <div className="profile">
        <div className="image"></div>
        <div className="about">
          <p className="name">{person?.names}</p>
          <p className="handler">@_byiringiro_</p>
        </div>
      </div>
      <div className="more">
        <div className="rank">
          <p>Rank</p>
        </div>
        <div className="over">
          <p className="desc">
            {!person?.about || person?.about?.length === 0
              ? "No description"
              : person?.about}
          </p>
          <div className="details">
            <div className="one">
              <p className="true">12</p>
              <p className="false">Skills</p>
            </div>
            <div className="one">
              <p className="true">12</p>
              <p className="false">Posts</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 350px;
  height: auto;
  display: flex;
  padding: 10px;
  border-radius: 5px;
  flex-direction: column;
  background: var(--dark);

  .well {
    width: 100%;
    height: 50px;
    display: flex;
    padding: 0 10px;
    border-radius: 5px;
    flex-direction: row;
    align-items: center;
    background: var(--background);
    justify-content: space-between;

    select {
      width: 120px;
      height: 35px;
      padding: 0 5px;
      border: none;
      outline: none;
      border-radius: 3px;
      color: var(--white);
      background: var(--dark);
    }

    .bars {
      width: auto;
      height: auto;
      display: flex;
      padding: 10px;
      cursor: pointer;
      border-radius: 5px;
      align-items: center;

      :hover {
        background: var(--dark);
      }

      .icon {
        font-size: 1.6em;
        color: var(--white);
      }
    }
  }

  .profile {
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: row;
    align-items: center;

    .image {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      margin: 0 20px 0 15px;
      background: var(--bright);
    }

    .about {
      width: auto;
      height: 60%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;

      p.name {
        color: var(--white);
      }

      p.handler {
        color: var(--gray);
      }
    }
  }

  .more {
    width: 100%;
    height: auto;
    display: flex;

    .rank {
      width: 100px;
      height: 80px;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 10px 0;
      background: var(--background);

      p {
        color: var(--gray);
      }
    }

    .over {
      width: auto;
      height: 80px;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      margin: 0 0 0 10px;

      p.desc {
        color: var(--white);
      }

      .details {
        width: auto;
        height: auto;
        display: flex;
        flex-direction: row;
        margin: 10px 0 0 0;

        .one {
          width: auto;
          height: auto;
          display: flex;
          flex-direction: row;
          margin: 0 20px 0 0;

          p.true {
            color: var(--white);
            margin: 0 5px 0 0;
          }

          p.false {
            color: var(--gray);
          }
        }
      }
    }
  }
`;

export default Person;
