import React from "react";
import styled from "styled-components";

//icons
import { BsEmojiHeartEyesFill } from "react-icons/bs";

//components
import Comment from "./comment";

const Comments = () => {
  return (
    <Container>
      <div className="search">
        <div className="user">
          <img src="/images/user.jpg" alt="user" />
        </div>
        <div className="input">
          <input type="text" placeholder="Type something...." />
          <BsEmojiHeartEyesFill className="icon" />
        </div>
      </div>
      <div className="comments">
        <Comment content="Happy for the team behind the product, we have been really waiting for this and we can all agree that it doesn’t dissapoint, Good luck along the way😊😊!" />
        <Comment content="Conglatulations for the progress!" />
      </div>
      <p className="more">Show all comments</p>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  .search {
    width: 100%;
    height: 50px;
    margin: 20px 0;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;

    .user {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      overflow: hidden;
    }

    .input {
      width: calc(100% - 60px);
      height: 50px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid var(--gray);

      input {
        width: 80%;
        height: 100%;
        border: none;
        outline: none;
        background: transparent;
        padding: 0 0 0 10px;
      }

      .icon {
        width: 35px;
        height: 35px;
        padding: 7px;
        border-radius: 50%;
        cursor: pointer;

        :hover {
          background: var(--gray);
        }
      }
    }
  }

  .comments {
    width: 95%;
    height: auto;
  }

  p.more {
    align-self: flex-start;
    cursor: pointer;
  }
`;

export default Comments;