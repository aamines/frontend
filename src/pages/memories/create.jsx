/* eslint-disable react-hooks/exhaustive-deps */

import styled from "styled-components";
import { Link } from "react-router-dom";
import { Outlet, useLocation } from "react-router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//icons
import { IoMdAdd } from "react-icons/io";

//components
import Item from "../../components/memories/item";

//features
import axios from "../../features/axios";

//actions
import { addMemories } from "../../store/reducers/memories";

const CreateMemory = () => {
  //config
  const location = useLocation();
  const dispatch = useDispatch();

  //redux data
  const token = useSelector((state) => state.persist.token);
  const account = useSelector((state) => state.persist.account);
  const memories = useSelector((state) => state.memories.memories);

  //local data
  const [active, setActive] = useState("text");
  const ownMemories = memories?.filter((acc) => acc?.id === account.id);

  useEffect(() => {
    if (location.pathname.includes("media")) {
      setActive("media");
    } else {
      setActive("text");
    }
  }, [location.pathname]);

  useEffect(() => {
    axios
      .get(`/memory/${account?.communityId}`, {
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
      <div className="create">
        <div className="header">
          <Link to={`/client/${account.id}/create/text`}>Text</Link>
          <Link to={`/client/${account.id}/create/media`}>Media</Link>
          <Line active={active} />
        </div>
        <div className="content">
          <Outlet />
        </div>
      </div>
      <div className="memories">
        <div className="status">
          {ownMemories ? (
            <Item
              data={memories?.filter((memory) => memory?.id === account.id)[0]}
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
                  .filter((memory) => memory?.id !== account.id)
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

const Line = styled.div`
  width: 50%;
  height: 2px;
  background: var(--bright);
  position: absolute;
  bottom: -1.5px;
  transition: all 0.3s ease-in-out;
  left: ${(props) => (props.active === "text" ? "0" : "50%")};
`;

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  .create {
    height: calc(100vh - 300px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px;
    margin: 50px 0 0 0;
    background: var(--dark);

    @media only screen and (min-width: 1200px) {
      width: 1200px;
    }

    @media only screen and (max-width: 1200px) {
      width: 90%;
    }

    .header {
      width: 400px;
      height: 50px;
      margin: 20px 0 0 0;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      position: relative;
      border-bottom: 1px solid var(--grayish);

      a {
        width: 50%;
        height: 50%;
        text-align: center;
        text-decoration: none;
        color: var(--white);
      }
    }

    .content {
      width: 100%;
      height: 85%;
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
        transition: all 0.1s ease-in-out;

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

export default CreateMemory;
