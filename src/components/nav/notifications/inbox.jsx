import React from "react";
import styled from "styled-components";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";

//features
import axios from "../../../features/axios";

//components
import Lower from "./lower";

const Inbox = ({ inbox }) => {
  //redux data
  const token = useSelector((state) => state.persist?.token);
  const user = useSelector((state) => state.persist?.account?.userId);

  const { data } = useQuery("user_notifications", async () => {
    const res = await axios.get(`/notifications/user/${user}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = res.data.data;
    return data;
  });

  return (
    <Container>
      <div className="user">
        {data?.map((notification, index) => (
          <div className="notification" key={index}>
            <div className="upper">
              <div className="profile"></div>
              <div className="contente">
                <p className="white">{notification?.content}</p>
                <p className="gray">1 hour ago</p>
              </div>
              {notification?.status?.status === "unseen" && (
                <div className="read"></div>
              )}
            </div>
            <Lower
              trace={notification?.trace}
              type={notification?.type?.type}
            />
          </div>
        ))}
      </div>
      <div className="inbox"></div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .user {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0 20px 0;
    border-bottom: 1px solid var(--grayish);
  }

  .notification {
    width: 100%;
    height: auto;

    .upper {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      position: relative;

      .profile {
        width: 50px;
        height: 50px;
        margin: 0 15px 0 0;
        border-radius: 50%;
        background: var(--gray);
      }

      .contente {
        width: auto;
        height: auto;
        margin: 5px 0 0 0;

        p.white {
          color: var(--white);
        }

        p.gray {
          color: var(--gray);
        }
      }

      .read {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: var(--bright);
        position: absolute;
        top: 10px;
        right: 10px;
      }
    }
  }
`;

export default Inbox;
