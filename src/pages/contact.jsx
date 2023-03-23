import React from "react";
import styled from "styled-components";

//icons
import { AiTwotoneMail } from "react-icons/ai";
import { BsTelephoneFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";

//components
import Footer from "../components/footer";

const Contact = () => {
  return (
    <Container>
      <div className="container">
        <div className="header">
          <p className="head">Contact Us</p>
          <p className="para">
            Any question or remarks? Just write us a message!
          </p>
        </div>
        <div className="content">
          <div className="left">
            <div className="top">
              <p className="head">Contact Information</p>
              <p className="para">Say something to start a live chat!</p>
            </div>
            <div className="middle">
              <div className="row">
                <BsTelephoneFill className="icon" />
                <p>+250782138100</p>
              </div>
              <div className="row">
                <AiTwotoneMail className="icon" />
                <p>aa.projectia@gmail.com</p>
              </div>
              <div className="row">
                <IoLocationSharp className="big" />
                <p>Kigali city, Rwanda</p>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="row">
              <div className="chunk">
                <label htmlFor="fname">First Name</label>
                <input type="text" id="fname" />
              </div>
              <div className="chunk">
                <label htmlFor="lname">Last Name</label>
                <input type="text" id="lname" />
              </div>
            </div>
            <div className="row">
              <div className="chunk">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" />
              </div>
              <div className="chunk">
                <label htmlFor="phone">Phone Number</label>
                <input type="text" id="phone" />
              </div>
            </div>
            <div className="row">
              <div className="big">
                <label htmlFor="message">Message</label>
                <textarea id="message" cols="30" rows="10"></textarea>
              </div>
            </div>
            <div className="button">
              <button>Send Message</button>
              <img src="/images/Contact/Four.png" alt="four" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;

  .container {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    .header {
      width: 100%;
      height: 100px;
      display: flex;
      margin: 30px 0;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      p.head {
        font-size: 2rem;
        font-weight: 800;
        color: var(--white);
      }

      p.para {
        line-height: 30px;
        color: var(--bright);
      }
    }

    .content {
      height: auto;
      display: flex;
      margin: 10px 0 50px 0;
      flex-direction: row;

      @media only screen and (min-width: 1200px) {
        width: 1200px;
      }

      @media only screen and (max-width: 1200px) {
        width: 90%;
      }

      .left {
        width: 40%;
        height: 650px;
        border-radius: 10px;
        background: var(--dark);
        padding: 30px;

        .top {
          width: 100%;
          height: 30%;
          display: flex;
          flex-direction: column;
          align-content: flex-start;

          p {
            color: var(--white);
          }

          .head {
            font-size: 2em;
          }
        }

        .middle {
          width: 100%;
          height: auto;

          p {
            color: var(--white);
          }

          .row {
            width: 100%;
            height: 60px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;

            .icon {
              font-size: 1.3em;
              margin: 0 10px 0 0;
              color: var(--white);
            }

            .big {
              font-size: 1.5em;
              margin: 0 10px 0 0;
              color: var(--white);
            }
          }
        }
      }

      .right {
        width: 60%;
        height: 100%;
        padding: 30px;

        .row {
          width: 100%;
          height: auto;
          margin: 0 0 50px 0;
          display: flex;
          flex-direction: row;
          justify-content: space-between;

          label {
            color: var(--white);
          }

          .chunk {
            width: 48%;
            height: 60px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            input {
              width: 100%;
              height: 40px;
              background: transparent;
              border: none;
              outline: none;
              border-bottom: 1px solid var(--gray);
              color: var(--white);
            }
          }

          .big {
            width: 100%;
            height: 150px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            textarea {
              height: 80%;
              background: transparent;
              border: none;
              outline: none;
              border-bottom: 1px solid var(--gray);
              color: var(--white);
            }
          }
        }

        .button {
          width: 100%;
          height: auto;
          display: flex;
          flex-direction: column;
          align-items: flex-end;

          img {
            width: 250px;
            margin: 0 60px 0;
          }

          button {
            width: 200px;
            height: 40px;
            border-radius: 50px;
            border: none;
            background: var(--bright);
            color: var(--white);
          }
        }
      }
    }
  }

  .footer {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export default Contact;
