import React from "react";
import styled from "styled-components";

const Stats = () => {
  return (
    <Container>
      <div className="rank">
        <p className="head">Rank</p>
      </div>
      <div className="skills">
        <div className="head">
          <p>Stats</p>
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

  .rank {
    width: 100%;
    height: 150px;
    border-radius: 5px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: var(--grayish);

    p {
      color: var(--white);
    }
  }

  .skills {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 10px;

    .head {
      width: 100%;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: flex-start !important;

      p {
        color: var(--white);
        font-size: 1.1em;
        text-align: start;
      }
    }
  }
`;

export default Stats;
