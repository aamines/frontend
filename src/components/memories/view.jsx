/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */

import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";

const Memory = ({ memory, active, next }) => {
  //local data
  const [percent, setPercent] = useState(0);
  const [count, setCount] = useState(memory?.length);
  const width = 400 / count;

  const handleProgress = () => {
    clearInterval();
    setInterval(() => {
      setPercent((prev) => {
        if (prev < 100) {
          return prev + 1;
        } else {
          return prev;
        }
      });
    }, 150);
  };

  useEffect(() => {
    setPercent(0);
    handleProgress();
  }, [active]);

  useEffect(() => {
    if (percent === 100) {
      next();
    }
  }, [percent]);

  return (
    <Container width={width}>
      <div className="top">
        {[...Array(count)].map((one, index) => (
          <progress
            key={index}
            max={100}
            value={index === active ? percent : 0}
          />
        ))}
      </div>
      <div className="memory">
        {memory[active]?.type === "text" && (
          <Text background={memory[active]?.color}>
            <p>{memory[active]?.content}</p>
          </Text>
        )}
      </div>
    </Container>
  );
};

const Text = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #${(props) => props.background};

  p {
    font-size: 1.5em;
    font-weight: 600;
    color: var(--white);
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  .top {
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: absolute;

    progress {
      height: 5px;
      margin: 0 5px;
      transition: all 0.5s ease-in-out;
      width: ${(props) => props.width}px;

      ::-webkit-progress-bar {
        background: var(--gray);
      }

      ::-webkit-progress-value {
        background: var(--white);
      }
    }
  }

  .memory {
    width: 100%;
    height: 100%;
  }
`;

export default Memory;
