import React from "react";
import styled from "styled-components";
import { BsListNested } from "react-icons/bs";

const User = ({
  top,
  bottom,
  left,
  right,
  skills,
  projects,
  title,
  what,
  image,
  className,
}) => {
  return (
    <Container
      top={top}
      bottom={bottom}
      left={left}
      right={right}
      className={className}
    >
      <div className="image">
        <img src={image} alt="profile" loading="lazy" />
      </div>
      <div className="about">
        <div className="title">
          <p>{title}</p>
        </div>
        <div className="info">
          <div>
            <BsListNested />
            <p>
              {skills} {what}
            </p>
          </div>
          <div>
            <BsListNested />
            <p>{projects} projects</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 230px;
  height: 50px;
  border-radius: 50px;
  background: var(--white);
  box-shadow: 0px 0px 46px 2px rgba(113, 113, 113, 0.3);
  position: absolute;
  top: ${(props) => props.top}%;
  bottom: ${(props) => props.bottom}%;
  right: ${(props) => props.right}%;
  left: ${(props) => props.left}%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0 6px;

  .image {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border-radius: 50%;

    img {
      width: 150%;
      /* object-fit: cover; */
    }
  }

  .about {
    width: 80%;
    height: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: space-around; */
    justify-content: center;

    .title {
      width: 100%;
      height: auto;
      padding: 0 0 0 10px;

      p {
        line-height: 20px;
        font-weight: 600;
        font-size: 10px;
      }
    }

    .info {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      padding: 0 0 0 5px;

      div {
        display: flex;
        flex-direction: row;
        align-items: center;

        p {
          margin: 0 5px;
          font-size: 10px;
        }
      }
    }
  }
`;

export default User;
