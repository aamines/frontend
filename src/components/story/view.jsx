import React from "react";
import styled,{css} from 'styled-components'
import data from './data'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import {useNavigate} from 'react-router-dom'

const View = ()=> <SlideShow items={data}/>

const SlideShow = (props)=>{

  const [{ items, activeIndex }, setState] = useState({
    items: props.items,
    activeIndex: 0, 
  });

  const navigate = useNavigate()

  const moveTo = (newIndex,id) => () => {

    // navigate(`/stories/${id}`)

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


    return <>
        <ImageBox>
            <img alt={items[activeIndex].id} src={items[activeIndex].image}/>
            <NavButton position="left">
            <FontAwesomeIcon icon={faAngleLeft} onClick={moveTo(activeIndex -1)}/>
            </NavButton>

            <NavButton position="right">
            <FontAwesomeIcon icon={faAngleRight} onClick={moveTo(activeIndex+1)}/>
            </NavButton>
        </ImageBox>

        <YouStatus>
        <div className="one">
          <IoMdAdd className="icon" />
        </div>
        <p>You</p>
        </YouStatus>

        <ThumbnailList>
        {items.map((item, index) => (
          <div className="pic-cont">
          <Thumbnail className={item.status === "seen" ? "seen":"notseen"} active={activeIndex === index} src={item.image} onClick={moveTo(index, items[activeIndex].id)} />
          
          <figcaption>{item.name}</figcaption>
          </div>
        ))}
      </ThumbnailList>
      </>
}


const YouStatus = styled.div`
  width: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 10px 0 0;
  position: relative;
  top: 10px;
  left: 90px;

  .one {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: var(--gray);
    cursor: pointer;

    .icon {
      font-size: 1.3em;
    }

  p {
    margin: 5px 0 0 0;
  }
`
const ThumbnailList = styled.div`
  display: flex;
  width: 70%;
  height: 20%;
  margin: auto;
  justify-content: space-around;
  align-items: center;
  overflow: scroll;
  position: relative;
  bottom: 60px;

  ::-webkit-scrollbar {
    display: none;
  }
  .pic-cont{
    width: 70px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 10px 0 0;
  }
  .seen{
    border: 3px solid #3BE28F;
  }
  .notseen{
    border: 3px solid #05111E;
  }

`;
const Thumbnail = styled.div`
  cursor: pointer;
  opacity: ${({ active }) => (active ? 1 : 0.6)};
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-position: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;

  :hover {
    opacity: 1;
  }
`;
const ImageBox = styled.div`
  position: relative;
  width: 70%;
  height: 75%;
  margin: auto;

  img {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    max-width: 100%;
    max-height: 100%;
  }
`;

const NavButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 45%;
  padding: 5px;
  border-radius: 50%;
  border: none;
  width:25px;
  height: 25px;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 3px 1px 15px 3px rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ position }) =>
    position === 'left' &&
    css`
      left: 10px;
    `}

  ${({ position }) =>
    position === 'right' &&
    css`
      right: 10px;
    `}
`;

export default View