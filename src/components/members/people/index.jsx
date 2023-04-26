import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Person from "./person";

const People = () => {
  const accounts = useSelector(
    (state) => state.community.data.community.accounts
  );

  const administrators = accounts?.filter(
    (account) => account?.roleId === 1 || account?.roleId === 2
  );

  const employees = accounts?.filter((account) => account?.roleId === 3);

  return (
    <Container>
      <div className="section">
        <div className="header">
          <p>Administrators</p>
        </div>
        <div className="content">
          {administrators?.map((admin, index) => (
            <Person key={index} person={admin} />
          ))}
          {administrators?.length === 0 && <p className="no">No admins</p>}
        </div>
      </div>
      <div className="section">
        <div className="header">
          <p>Employees</p>
        </div>
        <div className="content">
          {employees?.map((employee, index) => (
            <Person key={index} person={employee} />
          ))}
          {employees?.length === 0 && <p className="no">No employees</p>}
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  margin: 0 0 20px 0;
  flex-direction: column;

  .section {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    margin: 0 0 20px 0;

    .header {
      width: 100%;
      height: 50px;
      display: flex;
      flex-direction: row;
      align-items: center;

      p {
        font-size: 1.3em;
        color: var(--white);
      }
    }

    .content {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      padding: 10px 0 0 0;

      p.no {
        color: var(--gray);
      }
    }
  }
`;

export default People;
