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
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
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
        color: var(--dark);
        font-size: 1.1em;
        text-align: start;
      }
    }
  }
`;

export default Stats;
