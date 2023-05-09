import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useSelector } from "react-redux";

const NotificationSettings = () => {
  //redux data
  const variants = useSelector((state) => state.variants.page);

  return (
    <Container>
      <motion.div
        className="all"
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <div className="description">
          <p className="title">Notifications</p>
          <p className="desc">We may still send you important notifications</p>
        </div>
        <div className="form">
          <div className="row">
            <p>Tasks</p>
            <div className="input">
              <p className="gray">Notifications about tasks and deadlines</p>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider"></span>
              </label>
            </div>
          </div>
          <div className="row">
            <p>Messages</p>
            <div className="input">
              <p className="gray">
                Notifications about your inbox messages and group chats
              </p>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider"></span>
              </label>
            </div>
          </div>
          <div className="row">
            <p>More activity about you</p>
            <div className="input">
              <p className="gray">
                Notifications about posts, likes, comments, reactions and more
              </p>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider"></span>
              </label>
            </div>
          </div>
        </div>
      </motion.div>
    </Container>
  );
};

const Container = styled.div`
  .all {
    width: 100%;
    height: auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .description {
      width: 100%;
      height: auto;
      display: flex;
      padding: 0 0 10px 0;
      margin: 0 0 20px 0;
      border-bottom: 1px solid var(--gray);
      flex-direction: column;
      align-items: flex-start;

      p.title {
        font-size: 1.5em;
        font-weight: 600;
        color: var(--white);
      }

      p.desc {
        color: var(--gray);
      }
    }

    .form {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      .row {
        width: 100%;
        height: auto;
        margin: 0 0 15px 0;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        p {
          margin: 0 0 5px 0;
          color: var(--white);
        }

        .input {
          width: 100%;
          height: 40px;
          padding: 0 10px 0 0;
          border-radius: 5px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;

          p.gray {
            color: var(--gray);
          }

          .switch {
            position: relative;
            display: inline-block;
            width: 60px;
            height: 34px;

            input {
              opacity: 0;
              width: 0;
              height: 0;

              :checked + .slider {
                background: var(--bright);
              }

              :checked + .slider:before {
                -webkit-transform: translateX(26px);
                -ms-transform: translateX(26px);
                transform: translateX(26px);
              }

              :focus + .slider {
                box-shadow: 0 0 1px var(--bright);
              }
            }

            .slider {
              position: absolute;
              cursor: pointer;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              transition: 0.4s;
              -webkit-transition: 0.4s;
              background-color: var(--gray);
              border-radius: 34px;

              ::before {
                position: absolute;
                content: "";
                height: 26px;
                width: 26px;
                left: 4px;
                bottom: 4px;
                background-color: var(--white);
                -webkit-transition: 0.4s;
                transition: 0.4s;
              }

              :before {
                border-radius: 50%;
              }
            }
          }
        }
      }
    }
  }
`;

export default NotificationSettings;
