import React from "react";
import styled from "styled-components";

const Groups = ({ groups }) => {
  return (
    <Container>
      <div className="header">
        <p>groups</p>
      </div>
      <div className="content">
        {groups.length > 0 ? (
          <></>
        ) : (
          <div className="no">
            <p>No groups</p>
          </div>
        )}
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  margin: 40px 0 0 0;
  flex-direction: column;

  .header {
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    p {
      font-size: 1.2em;
      text-align: start;
      text-transform: capitalize;
      color: var(--white);
    }
  }

  .content {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: flex-start !important;
    justify-content: flex-start !important;

    .no {
      width: 100%;
      height: 100px;

      p {
        color: var(--gray);
        text-transform: capitalize;
      }
    }
  }
`;

export default Groups;
