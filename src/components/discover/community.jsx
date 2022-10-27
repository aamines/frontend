import React from "react";
import styled from "styled-components";

const Community = ({ community }) => {
  return (
    <Container>
      <div className="image"></div>
      <div className="about">
        <p className="title">{community?.name}</p>
        <p className="members">
          <span>{community?.members}</span> Members
        </p>
        <p className="para">{community?.about}</p>
      </div>
      <div className="actions">
        <button>Join</button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 95%;
  height: 150px;
  background: var(--background);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin: 10px 0 10px 0;
  padding: 10px;
  border-radius: 10px;

  .image {
    width: 9%;
    height: 100px;
    border-radius: 50%;
    background: var(--dark);
    align-self: center;
  }

  .about {
    width: 65%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding: 0 0 0 20px;

    .title {
      font-size: 1.3em;
      font-weight: 700;
    }

    .members {
      line-height: 40px;

      span {
        color: var(--bright);
      }
    }
  }

  .actions {
    width: 26%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;

    button {
      width: 50%;
      height: 30px;
      border: none;
      background: var(--bright);
      border-radius: 5px;
    }
  }
`;

export default Community;
