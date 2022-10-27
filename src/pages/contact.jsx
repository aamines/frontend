import React from "react";
import styled from "styled-components";

//icons
import { FiMail, FiClock } from "react-icons/fi";
import { BsFillTelephoneFill } from "react-icons/bs";

//components
import Footer from "../components/footer";

const Contact = () => {
  return (
    <Container>
      <div className="container">
        <div className="contact">
          <div className="header">
            <p className="head">Contact Us</p>
            <p>
              Fell free to contact us at any time, we will get back to you as
              soon as we can!
            </p>
          </div>
          <form action="#">
            <input type="text" name="name" placeholder="Name" />
            <input type="email" name="email" placeholder="Email" />
            <textarea
              name="message"
              cols="30"
              rows="10"
              placeholder="Message"
            ></textarea>
            <button>Send</button>
          </form>
        </div>
        <div className="info">
          <div className="content">
            <div className="top"></div>
            <p className="header">React out</p>
            <div>
              <FiMail className="icon" />
              <p>aa.minesgroup04@gmail.com</p>
            </div>
            <div>
              <BsFillTelephoneFill className="icon" />
              <p>+250782138100</p>
            </div>
            <div>
              <FiClock className="icon" />
              <p>09:00 - 20:00</p>
            </div>
            <div></div>
          </div>
          <div className="side"></div>
        </div>
      </div>
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;

  .container {
    width: 100%;
    height: calc(100vh - 70px);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .contact {
      width: 50%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      margin: 0 70px;

      .header {
        width: 70%;
        height: 20%;
        margin: 0 0 10px 0;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;

        p.head {
          font-size: 2em;
          font-weight: 700;
        }
      }

      form {
        width: 70%;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;

        input {
          width: 100%;
          height: 40px;
          border: none;
          border-bottom: 1px solid var(--dark);
          background: transparent;
          outline: none;
          padding: 0 10px;
          margin: 10px 0;
        }

        textarea {
          width: 100%;
          height: 100px;
          border: none;
          background: transparent;
          outline: none;
          border-bottom: 1px solid var(--dark);
          padding: 10px;
        }

        button {
          width: 100%;
          height: 40px;
          border: none;
          margin: 10px 0;
          border-radius: 5px;
          background: var(--dark);
          color: var(--white);
        }
      }
    }

    .info {
      width: 50%;
      height: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      position: relative;

      .content {
        width: 70%;
        height: 70%;
        border-radius: 5px;
        background: var(--dark);
        z-index: 100;
        padding: 80px;
        position: relative;

        .top {
          width: 50px;
          height: 50px;
          top: -20px;
          left: -20px;
          position: absolute;
          border-radius: 10px;
          background: var(--bright);
        }

        p.header {
          font-size: 1.5em;
          font-weight: 700;
          color: var(--white);
          margin: 0 0 30px 0;
        }

        > div {
          width: 100%;
          height: 40px;
          display: flex;
          align-items: center;

          .icon {
            margin: 0 10px 0 0;
            color: var(--white);
          }

          p {
            color: var(--white);
          }
        }
      }

      .side {
        position: absolute;
        top: 0;
        right: 0;
        width: 40%;
        height: 100%;
        background: var(--bright);
      }
    }
  }
`;

export default Contact;
