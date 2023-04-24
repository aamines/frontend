/* eslint-disable no-unused-vars */

import styled from "styled-components";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

//features
import axios from "../../features/axios";

const CreateText = () => {
  //config
  const navigate = useNavigate();

  //redux data
  const token = useSelector((state) => state.persist.token);
  const account = useSelector((state) => state.persist.account);

  //local data
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState("3BE28F");
  const [colors, _] = useState([
    "3BE28F",
    "FF347D",
    "CE18D1",
    "4F1DDE",
    "27B0B9",
  ]);

  const handleColor = (color) => {
    setActive(color);
  };

  const handleValue = (e) => {
    setValue(e.target.value);
  };

  const handleSend = () => {
    if (value.length < 1) return;

    if (!loading) {
      setLoading(true);
      axios
        .post(
          "/memory/create",
          {
            type: "text",
            color: active,
            content: value,
            accountId: account?.id,
            communityId: account?.communityId,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          navigate(`/client/${account}/home`);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return (
    <Container>
      <div className="container">
        <Textarea background={active}>
          <textarea
            value={value}
            onChange={handleValue}
            placeholder="Type something..."
          />
        </Textarea>
        <div className="button" onClick={handleSend}>
          {loading ? <img src="/loader.svg" alt="loader" /> : <p>Send</p>}
        </div>
      </div>
      <div className="colors">
        {colors.map((color, index) => (
          <Color
            main={color}
            key={index}
            active={active === color}
            onClick={() => handleColor(color)}
          ></Color>
        ))}
      </div>
    </Container>
  );
};

const Color = styled.div`
  width: ${(props) => (props.active ? "30px" : "25px")};
  height: ${(props) => (props.active ? "30px" : "25px")};
  margin: 10px 0;
  border-radius: 50%;
  cursor: pointer;
  background: #${(props) => props.main};
  border: ${(props) => (props.active ? "3px solid var(--white)" : "none")};
  transition: all 0.3s ease-in-out;
`;

const Textarea = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #${(props) => props.background};

  textarea {
    width: 100%;
    max-height: 100%;
    min-height: 200px;
    border: none;
    outline: none;
    background: transparent;
    color: var(--white);
    padding: 40px 30px;
    font-size: 1.1em;
    resize: none;
    overflow: visible;
    text-align: center;
    box-sizing: border-box;

    ::placeholder {
      color: var(--white);
    }
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;

  .container {
    width: 60%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    .button {
      width: 140px;
      height: 50px;
      display: flex;
      border-radius: 5px;
      align-items: center;
      justify-content: center;
      margin: 15px 0 0 0;
      cursor: pointer;
      background: var(--grayish);
      transition: all 0.3s ease;

      img {
        width: 30%;
      }

      p {
        color: var(--white);
        transition: all 0.3s ease;
      }

      :hover {
        background: var(--bright);

        p {
          color: var(--dark);
        }
      }
    }
  }

  .colors {
    position: absolute;
    width: 50px;
    height: auto;
    right: 10%;
    top: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export default CreateText;
