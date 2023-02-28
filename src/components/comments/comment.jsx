import React from "react";
import styled from "styled-components";

//icons
import { MdModeComment } from "react-icons/md";

const Comment = ({ content, pic }) => {
  return (
    <Container>
      <div className="comment">
        <div className="image"></div>
        <div className="content">{content}</div>
      </div>
      <div className="down">
        <div className="left">
          <div className="reactions">
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <p className="f-low">356</p>
          </div>
          <div className="stats">
            <MdModeComment className="icon" />
            <p className="f-low">100</p>
          </div>
        </div>
        <p className="replies">Load replies</p>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  margin: 0 0 20px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  .comment {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .image {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: var(--dark);
    }

    .content {
      width: 89%;
      margin: 0 0 0 10px;
      display: 100%;
      border-radius: 5px;
      padding: 15px 20px;
      background: var(--gray);
    }
  }

  .down {
    width: 89%;
    height: 50px;
    display: flex;
    padding: 0 10px 0 15px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    color: var(--dark);

    .left {
      width: auto;
      height: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;

      .reactions {
        width: auto;
        height: 50%;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0 10px 0 0;
        border-right: 1px solid var(--grayish);

        ul {
          width: auto;
          height: 100%;
          display: flex;
          flex-direction: row;
          align-items: center;

          li {
            list-style: none;
            width: 25px;
            height: 25px;
            border-radius: 50%;
            background: var(--dark);
            margin: 0 0 0 -10px;
          }
        }

        p {
          margin: 0 0 0 5px;
        }
      }

      .stats {
        width: auto;
        height: 50%;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0 0 0 10px;
        margin: 0 0 0 5px;
        border-left: 1px solid var(--grayish);

        .icon {
          font-size: 1.4em;
          margin: 0 5px 0 0;
        }
      }
    }

    p.replies {
      cursor: pointer;
    }
  }
`;

export default Comment;
