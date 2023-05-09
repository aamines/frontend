import React, { useState } from "react";
import styled from "styled-components";

const Notifications = () => {
  const [active, setActive] = useState("inbox");

  const handleActive = (value) => {
    setActive(value);
  };

  return (
    <Container>
      <div className="top">
        <p className="header">Notifications</p>
        <p className="read">Mark all as read</p>
      </div>
      <div className="navigate">
        <Item active={active === "inbox"} onClick={() => handleActive("inbox")}>
          <p className="title">Inbox</p>
          <p className="number">1</p>
        </Item>
        <Item active={active === "group"} onClick={() => handleActive("group")}>
          <p className="title">Group</p>
          <p className="number">0</p>
        </Item>
        <Line active={active} />
      </div>
    </Container>
  );
};

const Line = styled.div`
  width: 110px;
  height: 2px;
  background: var(--bright);
  position: absolute;
  bottom: -1.5px;
  left: -5px;
  transition: all 0.3s ease-in-out;
  left: ${(props) =>
    props.active === "inbox"
      ? "-5px"
      : props.active === "group"
      ? "107px"
      : ""};
`;

const Item = styled.div`
  width: auto;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  margin: 0 20px 0 0;

  p.title {
    color: ${(props) => (props.active ? "var(--bright)" : "var(--gray)")};
  }

  p.number {
    width: 50px;
    margin: 0 0 0 5px;
    height: 30px;
    border-radius: 50px;
    background: ${(props) =>
      props.active ? "var(--bright)" : "var(--grayish)"};
    color: ${(props) => (props.active ? "var(--dark)" : "var(--white)")};
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Container = styled.div`
  width: 500px;
  height: calc(100vh - 200px);
  border-radius: 10px;
  background: var(--dark);
  position: absolute;
  padding: 20px;
  top: 70px;
  right: 0;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

  .top {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    p.header {
      font-size: 1.5em;
      color: var(--white);
    }

    p.read {
      color: var(--gray);
      cursor: pointer;
    }
  }

  .navigate {
    width: 100%;
    height: auto;
    border-bottom: 1px solid var(--grayish);
    padding: 0 5px;
    display: flex;
    position: relative;
    margin: 10px 0;
    align-items: center;
    justify-content: flex-start;
  }
`;

export default Notifications;
