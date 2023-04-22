import React from "react";
import styled from "styled-components";

//icons
import { BiEditAlt } from "react-icons/bi";

const ProfileSettings = () => {
  return (
    <Container>
      <div className="description">
        <p className="title">My Profile</p>
        <p className="desc">Personal information</p>
      </div>
      <div className="form">
        <div className="row">
          <p>Names</p>
          <div className="input">
            <input type="text" value="Byiringiro saad" />
            <div className="border">
              <BiEditAlt className="icon" />
            </div>
          </div>
        </div>
        <div className="row">
          <p>Email</p>
          <div className="input">
            <input type="text" value="byiringirosaad@gmail.com" />
            <div className="border">
              <BiEditAlt className="icon" />
            </div>
          </div>
        </div>
        <div className="row">
          <p>Location</p>
          <div className="input">
            <input type="text" value="Rwanda" />
            <div className="border">
              <BiEditAlt className="icon" />
            </div>
          </div>
        </div>
        <div className="row">
          <p>About</p>
          <div className="textarea">
            <textarea value="Byiringiro saad" />
            <div className="border">
              <BiEditAlt className="icon" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .description {
    width: 100%;
    height: auto;
    display: flex;
    padding: 0 0 10px 0;
    margin: 0 0 20px 0;
    border-bottom: 1px solid var(--gray);
    flex-direction: column;
    align-items: flex-start;

    p.title {
      font-size: 1.5em;
      font-weight: 600;
      color: var(--white);
    }

    p.desc {
      color: var(--gray);
    }
  }

  .form {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .row {
      width: 100%;
      height: auto;
      margin: 0 0 25px 0;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      p {
        margin: 0 0 10px 0;
        color: var(--gray);
      }

      .input {
        width: 100%;
        height: 60px;
        padding: 0 10px;
        border-radius: 5px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        background: var(--background);

        input {
          width: 80%;
          height: 100%;
          border: none;
          outline: none;
          color: var(--white);
          padding: 0 0 0 5px;
          background: transparent;
        }

        .border {
          width: 40px;
          height: 40px;
          display: flex;
          cursor: pointer;
          border-radius: 5px;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--gray);

          .icon {
            font-size: 1.2em;
            color: var(--white);
          }
        }
      }

      .textarea {
        width: 100%;
        height: 150px;
        padding: 15px 10px;
        border-radius: 5px;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
        background: var(--background);

        textarea {
          width: 80%;
          height: 100%;
          padding: 0 0 0 5px;
          border: none;
          outline: none;
          resize: none;
          color: var(--white);
          background: transparent;
        }

        .border {
          width: 40px;
          height: 40px;
          display: flex;
          cursor: pointer;
          border-radius: 5px;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--gray);

          .icon {
            font-size: 1.2em;
            color: var(--white);
          }
        }
      }
    }
  }
`;

export default ProfileSettings;
