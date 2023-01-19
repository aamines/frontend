import React from "react";
import styled from "styled-components";

//icons
import { TbEqual } from "react-icons/tb";
import { CgTrophy } from "react-icons/cg";

const Add = () => {
  return (
    <Container>
      <div className="header">
        <p>Share something...</p>
      </div>
      <div className="body">
        <div className="left">
          <div className="one">
            <CgTrophy className="icon" />
            <p>Achievement</p>
          </div>
          <div className="one">
            <TbEqual className="big" />
            <p>Milestone</p>
          </div>
        </div>
        <div className="right">
          <p>Post</p>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  padding: 0px 15px;
  flex-direction: column;
  border-radius: 5px;
  margin: 25px 0;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  .header {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
  }

  .body {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;

    .left {
      width: auto;
      height: auto;
      display: flex;

      .one {
        height: 30px;
        display: flex;
        align-items: center;
        background: var(--gray);
        padding: 5px 20px;
        margin: 0 10px 15px 0;
        border-radius: 5px;

        .icon {
          font-size: 1.4em;
          margin: 0 5px 0 0;
        }

        .big {
          font-size: 1.6em;
          margin: 0 5px 0 0;
        }
      }
    }

    .right {
      width: 100px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 5px;
      background: var(--bright);
    }
  }
`;

export default Add;
