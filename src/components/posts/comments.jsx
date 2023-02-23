import React from "react";
import styled from "styled-components";
import './comments.css'

//icons
import { BsEmojiHeartEyesFill } from "react-icons/bs";
import { BiUpvote } from "react-icons/bi";
import { MdModeComment } from "react-icons/md";
import { BsHandThumbsUpFill } from "react-icons/bs";

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

      {/* comments */}

      <div className="comments">
        <img src="/images/user.jpg" alt="user" className="commenterImg"/>
        <div className="commentContent">Happy for the team behind the product, we have been really waiting 
        for this and we can all agree that it doesn’t dissapoint, Good luck along the way😊😊!</div>
      </div>
      <div className="commentReactions">
      <div className="reactions">
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <p className="f-low">356</p>
        </div>
        <div className="commentstats">
          <MdModeComment className="icon" />
          <p className="f-low">100</p>
        </div>

        <p className="f-left">Load replies</p>
      </div>

      <div className="comments">
        <img src="/images/user.jpg" alt="user" className="commenterImg"/>
        <div className="commentContent">Happy for the team behind the product, we have been really waiting 
        for this and we can all agree that it doesn’t dissapoint, Good luck along the way😊😊!</div>
      </div>
      <div className="commentReactions">
      <div className="reactions">
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <p className="f-low">356</p>
        </div>
        <div className="commentstats">
          <MdModeComment className="icon" />
          <p className="f-low">100</p>
        </div>

        <p className="f-left">Load replies</p>
        
      </div>
      <div className="comments">
        <img src="/images/user.jpg" alt="user" className="commenterImg"/>
        <div className="commentContent">Happy for the team behind the product, we have been really waiting 
        for this and we can all agree that it doesn’t dissapoint, Good luck along the way😊😊!</div>
      </div>
      <div className="commentReactions">
      <div className="reactions">
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <p className="f-low">356</p>
        </div>
        <div className="commentstats">
          <MdModeComment className="icon" />
          <p className="f-low">100</p>
        </div>

        <p className="f-left">Load replies</p>

        <br/>
        
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
