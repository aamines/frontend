import styled from "styled-components";
import React, { useState } from "react";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";

//icons
import { GrClose, GrFormAdd } from "react-icons/gr";
import { RiUser3Fill } from "react-icons/ri";

const Invite = ({ close }) => {
  //redux data
  const members = useSelector((state) => state.members);

  //local data
  const [add, setAdd] = useState(true);
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("admin");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleRole = (e) => {
    setRole(e.target.value);
  };

  return createPortal(
    <Container>
      <div className="content">
        <div className="top">
          <p className="title">Invite new members</p>
          <GrClose className="icon" />
        </div>
        <div className="members">
          {members.map((member) => (
            <div className="member">
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
            </div>
          ))}
          {add && (
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
          )}
        </div>
        <div className="buttons">
          <div className="add">
            <GrFormAdd className="icon" />
            <p>Add</p>
          </div>
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
      <div className="background"></div>
    </Container>,
    document.querySelector("#portal")
  );
};

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
    width: 600px;
    height: 500px;
    z-index: 10000;
    border-radius: 10px;
    background: var(--dark);
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
