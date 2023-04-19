/* eslint-disable react-hooks/exhaustive-deps */

import styled from "styled-components";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//icons
import { IoMdAdd } from "react-icons/io";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

//components
import Item from "./item";

//features
import axios from "../../features/axios";

//actions
import { addMemories } from "../../store/reducers/memory";

const Memories = () => {
  //config
  const dispatch = useDispatch();

  //redux data
  const token = useSelector((state) => state.persist.token);
  const memories = useSelector((state) => state.memory.memories);
  const community = useSelector((state) => state.persist.community);

  const onNext = () => {};

  const onPrevious = () => {};

  useEffect(() => {
    axios
      .get(`/memory/${community}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        dispatch(addMemories(res.data.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container>
      <div className="status">
        <div className="one">
          <IoMdAdd className="icon" />
        </div>
        <p>You</p>
      </div>
      <div className="statuses">
        {memories?.length > 0 && (
          <>
            <div className="scroll" onClick={onNext}>
              <BiChevronLeft className="icon" />
            </div>
            <ul>
              {memories.map((status, index) => (
                <Item key={index} data={status} />
              ))}
            </ul>
            <div className="scroll" onClick={onPrevious}>
              <BiChevronRight className="icon" />
            </div>
          </>
        )}
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

export default Memories;
