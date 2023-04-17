import React from "react";
import styled from "styled-components";
import { Outlet, useNavigate } from "react-router";

//icons
import { TbListDetails } from "react-icons/tb";

const CreateCommunity = () => {
  //config
  const navigate = useNavigate();

  //local data
  const [active, setActive] = React.useState(0);

  const goToOne = () => {
    setActive(0);
    navigate("/community/new");
  };

  const goToTwo = () => {
    setActive(1);
    navigate("/community/new/two");
  };

  const goToThree = () => {
    setActive(2);
    navigate("/community/new/three");
  };

  return (
    <Container>
      <div className="container">
        <div className="header">
          <p>Create Community</p>
        </div>
        <div className="content">
          <div className="sidebar">
            <div
              className={active === 0 ? "active row" : "row"}
              onClick={goToOne}
            >
              <div className="icon">
                <TbListDetails className="one" />
              </div>
              <div className="para">
                <p>Step 1</p>
                <p>Basic Details</p>
              </div>
            </div>
            <div className="line"></div>
            <div
              className={active === 1 ? "active row" : "row"}
              onClick={goToTwo}
            >
              <div className="icon">
                <TbListDetails className="one" />
              </div>
              <div className="para">
                <p>Step 2</p>
                <p>terms and conditions</p>
              </div>
            </div>
            <div className="line"></div>
            <div
              className={active === 2 ? "active row" : "row"}
              onClick={goToThree}
            >
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
        font-size: 1.4em;
        font-weight: 600;
        color: var(--white);
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
        background: var(--grayish);

        .active {
          .icon {
            border: 1px solid var(--white) !important;

            .one {
              color: var(--white) !important;
            }
          }

          .para {
            p {
              color: var(--white) !important;
            }
          }
        }

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
              border: 1px solid var(--white);

              .one {
                color: var(--white);
              }
            }

            .para {
              p {
                color: var(--white);
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
            border: 1px solid var(--gray);
            margin: 0 10px 0 0;

            .one {
              font-size: 1.7em;
              color: var(--gray);
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
              color: var(--gray);
            }
          }
        }

        .line {
          width: 77%;
          height: 60px;
          margin: 10px 0;
          border-left: 2px solid var(--gray);
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
