import data from "../../store/reducers/data";
import { useState } from "react";
import { useNavigate } from "react-router";
import styled, { css } from "styled-components";

//icons
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const View = () => <SlideShow items={data} />;

const SlideShow = (props) => {
  const [{ items, activeIndex }, setState] = useState({
    items: props.items,
    activeIndex: 0,
  });

  const moveTo = (newIndex) => () => {
    if (newIndex === -1) {
      setState((s) => ({ ...s, activeIndex: items.length - 1 }));
      return;
    }
    if (newIndex === items.length) {
      setState((s) => ({ ...s, activeIndex: 0 }));
      return;
    }

    setState((s) => ({ ...s, activeIndex: newIndex }));
  };

  const navigate = useNavigate();
  const goTo = (path) => {
    navigate(path);
  };

  return (
    <>
      <NavButton position="left">
        <AiOutlineLeft onClick={moveTo(activeIndex - 1)}/>
      </NavButton>
      <ImageBox>
        <img alt={items[activeIndex].id} src={items[activeIndex].image} />
      </ImageBox>
      <NavButton position="right">
        <AiOutlineRight onClick={moveTo(activeIndex + 1)}/>
      </NavButton>
    </>
  );
};

const ImageBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  img {
    position: relative;
    margin: auto;
    width: 100%;
    height: 100%;
    border-radius: 5px;
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
  width: 25px;
  height: 25px;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 3px 1px 15px 3px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;

  ${({ position }) =>
    position === "left" &&
    css`
      left: -50px;
      font-size: 2em;
      font-weight: bold;
    `}

  ${({ position }) =>
    position === "right" &&
    css`
      right: -50px;
      font-size: 2em;
      font-weight: bold;
    `}
`;

export default View;
