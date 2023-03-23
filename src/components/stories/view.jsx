import { useState } from "react";
import styled, { css } from "styled-components";

//icons
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useSelector } from "react-redux";

const Story = () => {
  //local data
  const [activeIndex, setActiveIndex] = useState(0);
  const items = useSelector((state) => state.stories);

  const moveTo = (newIndex) => () => {
    if (newIndex === -1) {
      setActiveIndex(items.length - 1);
      return;
    }

    if (newIndex === items.length) {
      setActiveIndex(0);
      return;
    }

    setActiveIndex(newIndex);
  };

  const goTo = (path) => {
    console.log(path);
  };

  return (
    <>
      <NavButton position="left">
        <AiOutlineLeft onClick={moveTo(activeIndex - 1)} />
      </NavButton>
      <ImageBox onClick={() => goTo(items[activeIndex]?.id)}>
        <img alt={items[activeIndex]?.id} src={items[activeIndex].image} />
      </ImageBox>
      <NavButton position="right">
        <AiOutlineRight onClick={moveTo(activeIndex + 1)} />
      </NavButton>
    </>
  );
};

const ImageBox = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  border-radius: 20px;
  overflow: hidden;

  img {
    position: relative;
    margin: auto;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const NavButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 45%;
  padding: 5px;
  border-radius: 50%;
  border: none;
  width: 40px;
  height: 40px;
  background: var(--grayish);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;

  ${({ position }) =>
    position === "left" &&
    css`
      left: -100px;
      font-size: 1.5em;
      font-weight: bold;
      color: var(--white);
    `}

  ${({ position }) =>
    position === "right" &&
    css`
      right: -100px;
      font-size: 1.5em;
      font-weight: bold;
      color: var(--white);
    `}
`;

export default Story;
