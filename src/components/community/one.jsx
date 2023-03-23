import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const One = () => {
  return (
    <Container>
      <div className="row">
        <input type="text" placeholder="Name" />
        <select>
          <option value="community">community</option>
          <option value="school">school</option>
          <option value="company">company</option>
          <option value="organization">organization</option>
          <option value="campus">campus</option>
        </select>
      </div>
      <div className="big">
        <textarea cols="30" rows="10" placeholder="Set vision" />
      </div>
      <div className="button">
        <Link to="/community/new/two">Next</Link>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  .row {
    width: 100%;
    height: 50px;
    display: flex;
    margin: 10px 0 20px 0;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    input,
    select {
      width: 48%;
      height: 100%;
      background: var(--grayish);
      border: none;
      border-radius: 5px;
      color: var(--white);
      padding: 0 10px 0 10px;
      outline: none;
    }
  }

  .big {
    width: 100%;
    height: 200px;

    textarea {
      width: 100%;
      height: 100%;
      background: var(--grayish);
      border: none;
      border-radius: 5px;
      padding: 10px;
      color: var(--white);
      outline: none;
    }
  }

  .button {
    width: 100%;
    height: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 20px 0;

    a {
      width: 150px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      color: var(--white);
      border-radius: 5px;
      background: var(--bright);
      align-self: flex-end;
    }
  }
`;

export default One;
