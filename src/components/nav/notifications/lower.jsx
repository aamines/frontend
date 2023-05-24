import styled from "styled-components";
import React, { useEffect, useState } from "react";

//features
import axios from "../../../features/axios";
import { useSelector } from "react-redux";

const Lower = ({ trace, type }) => {
  //local data
  const [data, setData] = useState({});

  //redux data
  const token = useSelector((state) => state.persist.token);

  useEffect(() => {
    if (type === "invitation") {
      axios
        .get(`/community/${trace}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          setData(res.data);
        });
    }
  }, []);

  return (
    <Container>
      {type === "invitation" && (
        <div className="div">
          <div className="ino">
            <div className="pro"></div>
            <div className="about">
              <p className="name">{data?.name}</p>
              <p className="members">{data?.accounts?.length} members</p>
            </div>
          </div>
          <div className="act">
            <div className="button dark">
              <p>Decline</p>
            </div>
            <div className="button bright">
              <p>Approve</p>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: calc(100% - 60px);
  height: auto;
  padding: 12px 10px;
  border-radius: 5px;
  margin: 10px 0 0 60px;
  background: var(--background);

  .div {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;

    .ino {
      width: 100%;
      height: auto;
      margin: 0 0 5px 0;
      display: flex;
      flex-direction: row;

      .pro {
        width: 40px;
        height: 40px;
        margin: 0 10px 0 0;
        border-radius: 50%;
        background: var(--gray);
      }

      .about {
        width: auto;
        height: auto;

        p.name {
          color: var(--gray);
        }

        p.members {
          color: var(--gray);
        }
      }
    }

    .act {
      width: 100%;
      height: auto;
      display: flex;
      margin: 5px 0 0 0;
      flex-direction: row;

      .button {
        padding: 7px 30px;
        border-radius: 5px;
        cursor: pointer;
      }

      .dark {
        background: var(--grayish);
        margin: 0 10px 0 0;

        p {
          color: var(--white);
        }
      }

      .bright {
        background: var(--bright);

        p {
          color: var(--dark);
        }
      }
    }
  }
`;

export default Lower;
