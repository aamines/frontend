import React, { useState } from "react";
import styled from "styled-components";

//icons
import { BiUpvote } from "react-icons/bi";
import { MdModeComment } from "react-icons/md";
import { BsHandThumbsUpFill } from "react-icons/bs";

//components
import Comments from "./comments";

const Post = () => {
  const [showComments, setShowComments] = useState(false);

  const handleShowComments = () => {
    setShowComments(!showComments);
  };

  return (
    <Container>
      <div className="top">
        <div className="pro">
          <img src="/images/user.jpg" alt="user" />
          <div className="active"></div>
        </div>
        <div className="about">
          <p className="gray">3 hours ago</p>
          <p className="name">Byiringiro saad</p>
        </div>
      </div>
      <div className="body">
        <div className="para">
          <p>
            Happy to share that we are finally launching Projectia at @Mines, We
            have been working on the project for over 2 years now, and what i
            can say is that it had been a very creative and glorious journey, It
            was not easy but for God’s sake we are able to showcase the fruits
            of our labour to the whole world, hope you enjoy the projduct as
            much!
          </p>
        </div>
        <div className="media">
          <img src="/images/first.jpg" alt="first" loading="lazy" />
          <img src="/images/second.jpg" alt="second" loading="lazy" />
        </div>
      </div>
      <div className="infos">
        <div className="reactions">
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <p>356 Reactions</p>
        </div>
        <div className="commentstats">
          <MdModeComment className="icon" />
          <p>100 Comments</p>
        </div>
      </div>
      <div className="options">
        <div className="one">
          <BsHandThumbsUpFill className="icon up" />
          <p>React</p>
        </div>
        <div className="one" onClick={handleShowComments}>
          <MdModeComment className="icon" />
          <p>Comment</p>
        </div>
        <div className="one">
          <BiUpvote className="icon" />
          <p>React</p>
        </div>
      </div>
      <Comments />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  border: 1.5px solid var(--gray);
  padding: 10px 15px;
  margin: 0 0 30px 0;

  .top {
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    .pro {
      width: auto;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      position: relative;

      img {
        width: 60px;
        height: 60px;
        object-fit: cover;
        border-radius: 50%;
      }

      .active {
        width: 10px;
        height: 10px;
        z-index: 10;
        border-radius: 50%;
        background: var(--bright);
        position: absolute;
        bottom: 2px;
        right: 10%;
      }
    }

    .about {
      width: auto;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 0 0 0 10px;

      p {
        margin: 3px 0;
      }

      .gray {
        color: var(--grayish);
      }
    }
  }

  .body {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    .para {
      width: 100%;
      height: auto;
      margin: 20px 0;

      p {
        color: var(--dark);
      }
    }

    .media {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: wrap;

      img {
        width: 49%;
      }
    }
  }

  .infos {
    width: 100%;
    height: 50px;
    margin: 20px 0 10px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    .reactions {
      width: auto;
      height: 30px;
      display: flex;
      padding: 0 0 0 10px;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      border-right: 2px solid var(--gray);
      margin: 0 10px 0 0;

      p {
        margin: 0 20px 0 10px;
      }

      ul {
        width: auto;
        height: auto;
        display: flex;
        margin: 0 0 0 10px;

        li {
          list-style: none;
          width: 25px;
          height: 25px;
          border-radius: 50%;
          background: var(--dark);
          margin: 0 0 0 -10px;
        }
      }
    }

    .commentstats {
      width: auto;
      height: 30px;
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 0 20px 0 20px;
      border-left: 2px solid var(--gray);

      .icon {
        font-size: 1.4em;
        margin: 0 10px 0 0;
      }
    }
  }

  .options {
    width: 100%;
    height: 70px;
    display: flex;
    padding: 10px 0 0 0;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid var(--gray);

    .one {
      width: 30%;
      height: 70%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      border-radius: 5px;

      .icon {
        font-size: 1.6em;
        margin: 0 10px 0 0;
      }

      .up {
        margin-top: -6px;
      }

      :hover {
        border: 1px solid var(--bright);
      }
    }
  }
`;

export default Post;
