import React from "react";
import styled from "styled-components";
import { Outlet, useNavigate } from "react-router";

//icons
import { TbListDetails } from "react-icons/tb";

const CreateCommunity = () => {
  //config
  const navigate = useNavigate();

  const goTo = (path) => {
    navigate(path);
  };

  return (
    <Container>
      <div className="container">
        <div className="header">
          <p>Create Community</p>
        </div>
        <div className="content">
          <div className="sidebar">
            <div className="row" onClick={() => goTo("/community/new")}>
              <div className="icon">
                <TbListDetails className="one" />
              </div>
              <div className="para">
                <p>Step 1</p>
                <p>Basic Details</p>
              </div>
            </div>
            <div className="line"></div>
            <div className="row" onClick={() => goTo("/community/new/two")}>
              <div className="icon">
                <TbListDetails className="one" />
              </div>
              <div className="para">
                <p>Step 2</p>
                <p>terms and conditions</p>
              </div>
            </div>
            <div className="line"></div>
            <div className="row" onClick={() => goTo("/community/new/three")}>
              <div className="icon">
                <TbListDetails className="one" />
              </div>
              <div className="para">
                <p>Step 3</p>
                <p>Enjoyment</p>
              </div>
            </div>
          </div>
          <div className="right">
            <Outlet />
          </div>
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

  .container {
    height: calc(100vh - 70px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media only screen and (min-width: 1200px) {
      width: 1200px;
    }

    @media only screen and (max-width: 1200px) {
      width: 90%;
    }

    .header {
      width: 100%;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: flex-start;

      p {
        font-size: 1.2em;
        font-weight: 600;
      }
    }

    .content {
      width: 100%;
      height: auto;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;

      .sidebar {
        width: 350px;
        height: 450px;
        margin: 0 20px 0 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        padding: 20px 20px 20px 60px;
        background: #f1f1f1;

        .row {
          width: 100%;
          height: 65px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          cursor: pointer;

          :hover {
            .icon {
              border: 1px solid var(--dark);

              .one {
                color: var(--dark);
              }
            }

            .para {
              p {
                color: var(--dark);
              }
            }
          }

          .icon {
            width: 65px;
            height: 65px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            border: 1px solid var(--grayish);
            margin: 0 10px 0 0;

            .one {
              font-size: 1.7em;
              color: var(--grayish);
            }
          }

          .para {
            width: auto;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;

            p {
              line-height: 25px;
              color: var(--grayish);
            }
          }
        }

        .line {
          width: 77%;
          height: 60px;
          margin: 10px 0;
          border-left: 2px solid var(--grayish);
        }
      }

      .right {
        width: 700px;
        height: 450px;
      }
    }
  }
`;

export default CreateCommunity;
