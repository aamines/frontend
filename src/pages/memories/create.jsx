import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

//icons
import { IoMdAdd } from "react-icons/io";

//components
import Item from "../../components/memories/item";

const CreateMemory = () => {
  //config
  const navigate = useNavigate();

  //redux data
  const account = useSelector((state) => state.persist.account);
  const memories = useSelector((state) => state.memory.memories);

  return (
    <Container>
      <div className="create">
        <div className="header">
          <Link to={`/client/${account}/create/text`}>Text</Link>
          <Link to={`/client/${account}/create/media`}>Media</Link>
        </div>
      </div>
      <div className="memories">
        <div className="status">
          <div className="one">
            <IoMdAdd className="icon" />
          </div>
          <p>You</p>
        </div>
        <div className="statuses">
          {memories?.length > 0 && (
            <>
              <ul>
                {memories.map((status, index) => (
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

  .create {
    height: 550px;
    display: flex;
    flex-direction: column;
    align-items: center;
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
      border-bottom: 1px solid var(--grayish);

      a {
        width: 50%;
        height: 50%;
        text-align: center;
        text-decoration: none;
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

export default CreateMemory;
