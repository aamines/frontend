import React from "react";
import styled from "styled-components";

//icons
import { IoMdAdd } from "react-icons/io";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

//components
import Item from "./item";
import { useSelector } from "react-redux";

const StoriesContainer = () => {
  const statuses = useSelector((state) => state.stories);

  const onNext = () => {};

  const onPrevious = () => {};

  return (
    <Container>
      <div className="status">
        <div className="one">
          <IoMdAdd className="icon" />
        </div>
        <p>You</p>
      </div>
      <div className="statuses">
        <div className="scroll" onClick={onNext}>
          <BiChevronLeft className="icon" />
        </div>
        <ul>
          {statuses.map((status, index) => (
            <Item key={index} data={status} />
          ))}
        </ul>
        <div className="scroll" onClick={onPrevious}>
          <BiChevronRight className="icon" />
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;

  .status {
    width: 70px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 10px 0 0;

    .one {
      width: 70px;
      height: 70px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background: var(--grayish);

      .icon {
        font-size: 2em;
        color: var(--white);
      }
    }

    p {
      margin: 5px 0 0 0;
      color: var(--white);
    }
  }

  .statuses {
    width: 87%;
    height: 100%;
    padding: 0 10px;
    display: flex;
    flex-direction: row;
    align-items: center;

    .scroll {
      width: 35px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      cursor: pointer;
      margin: -15px 0 0 0;
      background: var(--grayish);

      .icon {
        color: var(--white);
      }
    }

    ul {
      width: 100%;
      height: 100%;
      display: flex;
      overflow: scroll;
      flex-direction: row;
      align-items: center;
    }

    ul::-webkit-scrollbar {
      display: none;
    }
  }
`;

export default StoriesContainer;
