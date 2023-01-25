import React from "react";
import styled from "styled-components";

//icons
import { BsEmojiHeartEyesFill } from "react-icons/bs";

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
        <div className="all">
          <div className="comment">
            <div className="user">
              <img src="/images/user.jpg" alt="user" />
            </div>
            <div className="comment_content"></div>
          </div>
        </div>
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
`;

export default Comments;
