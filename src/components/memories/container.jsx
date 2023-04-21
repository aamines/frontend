/* eslint-disable react-hooks/exhaustive-deps */

import styled from "styled-components";
import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";

//icons
import { IoMdAdd } from "react-icons/io";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

//components
import Item from "./item";

//features
import axios from "../../features/axios";

//actions
import { addMemories } from "../../store/reducers/memories";

const Memories = () => {
  //config
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //redux data
  const token = useSelector((state) => state.persist.token);
  const account = useSelector((state) => state.persist.account);
  const memories = useSelector((state) => state.memories.memories);
  const community = useSelector((state) => state.persist.community);

  //local data
  const ownMemories = memories.find((acc) => {
    return acc.id === account;
  });

  const onNext = () => {};

  const onPrevious = () => {};

  const goToCreate = () => {
    if (ownMemories) {
      navigate(`/client/${account}/memories/${account}`);
    } else {
      navigate(`/client/${account}/create/text`);
    }
  };

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
      <div className="status" onClick={goToCreate}>
        {ownMemories ? (
          <Item data={memories?.filter((acc) => acc.id === account)[0]} />
        ) : (
          <>
            <div className="one">
              <IoMdAdd className="icon" />
            </div>
            <p>You</p>
          </>
        )}
      </div>
      <div className="statuses">
        {memories?.length > 0 ||
          (memories.length === 1 && memories[0].id !== account && (
            <>
              <div className="scroll" onClick={onNext}>
                <BiChevronLeft className="icon" />
              </div>
              <ul>
                {memories
                  .filter((memory) => memory?.id !== account)
                  .map((acc, index) => (
                    <Item key={index} data={acc} />
                  ))}
              </ul>
              <div className="scroll" onClick={onPrevious}>
                <BiChevronRight className="icon" />
              </div>
            </>
          ))}
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
    cursor: pointer;

    .one {
      width: 70px;
      height: 70px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background: var(--grayish);
      transition: all 0.1s ease;

      .icon {
        font-size: 2em;
        color: var(--white);
      }

      :hover {
        filter: brightness(85%);
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
