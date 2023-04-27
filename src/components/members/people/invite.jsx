import styled from "styled-components";
import React, { useState } from "react";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";

//icons
import { GrFormAdd } from "react-icons/gr";
import { IoMdClose } from "react-icons/io";
import { RiUser3Fill } from "react-icons/ri";

//features
import validateEmail from "../../../features/email";

//actions
import { addMember, removeMember } from "../../../store/reducers/members";

const Invite = ({ close }) => {
  //config
  const dispatch = useDispatch();

  //redux data
  const members = useSelector((state) => state.members);

  //local data
  const [add, setAdd] = useState(false);
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("admin");

  const handleEmail = (e) => {
    setEmail(e.target.value);

    if (validateEmail(e.target.value)) {
      setAdd(true);
    } else {
      setAdd(false);
    }
  };

  const handleRole = (e) => {
    setRole(e.target.value);
  };

  const handleAdd = () => {
    dispatch(addMember({ email: email, role: role }));
    setEmail("");
    setRole("admin");
  };

  const handleRemove = (email) => {
    dispatch(removeMember(email));
  };

  return createPortal(
    <Container>
      <div className="content">
        <div className="top">
          <p className="title">Invite new members</p>
        </div>
        <div className="members">
          {members.map((member, index) => (
            <div className="member" key={index}>
              <div className="email">
                <div className="icon">
                  <RiUser3Fill className="ico" />
                </div>
                <input type="text" value={member?.email} />
              </div>
              <div className="role">
                <select defaultValue={member?.role}>
                  <option value="admin">Admin</option>
                  <option value="manager">Manager</option>
                  <option value="employee">Employee</option>
                </select>
              </div>
              <div
                className="delete"
                onClick={() => handleRemove(member?.email)}
              >
                <IoMdClose className="white" />
              </div>
            </div>
          ))}
          <div className="member">
            <div className="email">
              <div className="icon">
                <RiUser3Fill className="ico" />
              </div>
              <input type="text" value={email} onChange={handleEmail} />
            </div>
            <div className="role">
              <select defaultValue={role} onChange={handleRole}>
                <option value="admin">Admin</option>
                <option value="manager">Manager</option>
                <option value="employee">Employee</option>
              </select>
            </div>
          </div>
        </div>
        <div className="buttons">
          <Add add={add} onClick={handleAdd}>
            <GrFormAdd className="icon" />
            <p>Add</p>
          </Add>
          <div className="right">
            <div className="cancel">
              <p>Cancel</p>
            </div>
            <div className="invite">
              <p>Invite</p>
            </div>
          </div>
        </div>
      </div>
      <div className="background" onClick={() => close()}></div>
    </Container>,
    document.querySelector("#portal")
  );
};

const Add = styled.div`
  width: 80px;
  height: 100%;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: ${(props) => (props.add ? "var(--bright)" : "var(--grayish)")};
  cursor: pointer;

  .icon {
    font-size: 1.4em;
    margin: 0 5px 0 0;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 1000;

  .content {
    width: 700px;
    min-height: 500px;
    z-index: 10000;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 20px;
    border-radius: 10px;
    background: var(--dark);
    position: relative;

    .top {
      width: 100%;
      height: 50px;
      margin: 0 0 20px 0;
      display: flex;
      flex-direction: row;
      align-items: center;
      border-bottom: 1px solid var(--grayish);

      p {
        font-size: 1.3em;
        color: var(--white);
      }
    }

    .members {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
      align-items: center;

      .member {
        width: 100%;
        height: 50px;
        margin: 0 0 15px 0;
        display: flex;
        flex-direction: row;
        align-items: center;

        .email {
          width: 60%;
          height: 100%;
          padding: 0 10px;
          display: flex;
          margin: 0 10px 0 0;
          border-radius: 5px;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          background: var(--background);

          .icon {
            width: 30px;
            height: 30px;
            display: flex;
            overflow: hidden;
            border-radius: 50%;
            align-items: flex-end;
            justify-content: center;
            background: var(--grayish);

            .ico {
              margin: 0 0 -2px 0;
              font-size: 1.7em;
              color: var(--bright);
            }
          }

          input {
            width: calc(100% - 50px);
            height: 100%;
            border: none;
            outline: none;
            background: transparent;
            color: var(--white);
          }
        }

        .role {
          width: 25%;
          height: 100%;
          margin: 0 10px 0 0;

          select {
            width: 100%;
            height: 100%;
            border: none;
            outline: none;
            padding: 0 10px;
            border-radius: 5px;
            color: var(--white);
            background: var(--background);
          }
        }

        .delete {
          width: 10%;
          height: 100%;
          display: flex;
          cursor: pointer;
          border-radius: 5px;
          align-items: center;
          justify-content: center;
          background: var(--background);

          .white {
            font-size: 1.5em;
            color: var(--white);
          }
        }
      }
    }

    .buttons {
      width: 100%;
      height: 50px;
      padding: 0 20px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      position: absolute;
      bottom: 20px;

      .right {
        width: auto;
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;

        > div {
          width: 80px;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 5px;
          cursor: pointer;
        }

        .cancel {
          background: var(--background);
          color: var(--white);
        }

        .invite {
          margin: 0 0 0 20px;
          color: var(--dark);
          background: var(--bright);
        }
      }
    }
  }

  .background {
    width: 100%;
    height: 100%;
    opacity: 0.7;
    position: absolute;
    top: 0;
    background: var(--background);
  }
`;

export default Invite;
