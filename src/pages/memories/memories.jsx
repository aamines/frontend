import styled from "styled-components";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

//components
import Item from "../../components/memories/item";
import Memory from "../../components/memories/view";

//icons
import { IoMdAdd } from "react-icons/io";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const Memories = () => {
  //config
  const navigate = useNavigate();

  //redux data
  const account = useSelector((state) => state.persist.account);
  const memories = useSelector((state) => state.memories.memories);

  //local data
  const [activeAccount, setActiveAccount] = useState(0);
  const [activeMemory, setactiveMemory] = useState(0);
  const ownMemories = memories?.filter((acc) => acc?.id === account);

  const onNext = () => {
    if (activeMemory < memories[activeAccount]?.Memory?.length - 1) {
      setactiveMemory(activeMemory + 1);
    } else {
      if (activeAccount < memories.length - 1) {
        setActiveAccount(activeAccount + 1);
        setactiveMemory(0);
      }
    }
  };

  const onPrevious = () => {
    if (activeMemory > 0) {
      setactiveMemory(activeMemory - 1);
    } else {
      if (activeAccount > 0) {
        setActiveAccount(activeAccount - 1);
        setactiveMemory(memories[activeAccount - 1]?.Memory?.length - 1 || 0);
      }
    }
  };

  const goToCreate = () => {
    navigate(`/client/${account}/create/text`);
  };

  return (
    <Container>
      <div className="view">
        <div className="scroll" onClick={onPrevious}>
          <BiChevronLeft className="icon" />
        </div>
        <div className="image">
          <Memory
            memory={memories[activeAccount]?.Memory}
            active={activeMemory}
            next={onNext}
          />
        </div>
        <div className="scroll" onClick={onNext}>
          <BiChevronRight className="icon" />
        </div>
      </div>
      <div className="memories">
        <div className="status" onClick={goToCreate}>
          {ownMemories ? (
            <Item
              data={memories?.filter((memory) => memory?.id === account)[0]}
            />
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
          {memories?.length > 0 && (
            <>
              <ul>
                {memories
                  .filter((memory) => memory?.id !== account)
                  .map((status, index) => (
                    <Item key={index} data={status} />
                  ))}
              </ul>
            </>
          )}
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

  .view {
    height: calc(100vh - 300px);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    margin: 50px 0 0 0;
    padding: 0 20px;

    @media only screen and (min-width: 1200px) {
      width: 1200px;
    }

    @media only screen and (max-width: 1200px) {
      width: 90%;
    }

    .image {
      width: 85%;
      height: 100%;
      overflow: hidden;
      border-radius: 10px;
      background: var(--grayish);
    }

    .scroll {
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      cursor: pointer;
      background: var(--grayish);

      .icon {
        font-size: 1.7em;
        color: var(--white);
      }
    }
  }

  .memories {
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 100px;
    margin: 50px 0 0 0;

    @media only screen and (min-width: 1200px) {
      width: 1200px;
    }

    @media only screen and (max-width: 1200px) {
      width: 90%;
    }

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
  }
`;

export default Memories;
