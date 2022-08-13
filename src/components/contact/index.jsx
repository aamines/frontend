import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

//files
import Para from "../para";
import axios from "../../features/axios";
import ResponseMessage from "../reponseMessage";

//icons
import { BsFillTelephoneFill, BsTwitter, BsInstagram } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { AiFillLinkedin } from "react-icons/ai";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(false);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      names: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data) => {
    setLoading(true);

    axios
      .post("/report", {
        names: data.names,
        email: data.email,
        message: data.message,
      })
      .then(() => {
        setLoading(false);
        reset({ names: "", email: "", message: "" });
        setTitle("Thanks");
        setType("success");
        setContent("Thanks for reaching out!");
        setResponse(true);
      })
      .catch(() => {
        setLoading(false);
        setTitle("Sorry!");
        setType("error");
        setContent("Something went wrong!");
        setResponse(true);
      });
  };

  const handleReponseMessage = () => {
    setResponse(!response);
  };

  return (
    <Container id="contact">
      {response ? (
        <ResponseMessage
          title={title}
          type={type}
          handleFrame={handleReponseMessage}
        >
          {content}
        </ResponseMessage>
      ) : (
        <></>
      )}
      <div className="title">
        <p className="small bright">Contact</p>
        <Para>
          Contact projectia team<span>.</span>
        </Para>
        <p className="small">
          Have any question, suggestion or an idea, let us know.
        </p>
      </div>
      <div className="contact">
        <div className="form">
          <div className="info">
            <p>
              Fill up the form, The team will get back to you within 24 hours.
            </p>
            <div className="contacts">
              <div className="one">
                <BsFillTelephoneFill className="icon" />
                <p>+250782138100</p>
              </div>
              <div className="one">
                <MdEmail className="icon" />
                <p>aa.minesgroup04@gmail.com</p>
              </div>
            </div>
            <div className="socials">
              <a
                href="https://www.linkedin.com/company/mines-ltd"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillLinkedin className="icon" />
              </a>
              <a
                href="https://twitter.com/Mines__Group"
                target="_blank"
                rel="noreferrer"
              >
                <BsTwitter className="icon" />
              </a>
              <a
                href="https://www.instagram.com/mines_gr"
                target="_blank"
                rel="noreferrer"
              >
                <BsInstagram className="icon" />
              </a>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={errors.names ? "row error" : "row"}>
              <input
                placeholder="Names"
                type="text"
                name="names"
                id="names"
                autoComplete="OFF"
                // required
                {...register("names", { required: true })}
              />
            </div>
            {errors.names && <p className="error">Names are required!</p>}
            <div className={errors.email ? "row error" : "row"}>
              <input
                placeholder="Email"
                type="email"
                name="email"
                id="email"
                autoComplete="OFF"
                // required
                {...register("email", { required: true })}
              />
            </div>
            {errors.email && <p className="error">Email is required!</p>}
            <div className={errors.names ? "row error" : "row"}>
              <textarea
                name="message"
                placeholder="Message"
                autoComplete="OFF"
                id="message"
                cols="30"
                rows="5"
                // required
                {...register("message", { required: true })}
              ></textarea>
            </div>
            {errors.message && <p className="error">Message is required!</p>}
            <button type="submit">
              {loading ? (
                <>
                  <img src="/loader.svg" alt="loader" />
                </>
              ) : (
                <>Send</>
              )}
            </button>
          </form>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 70px 0 0 0;

  .title {
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p.small {
      font-size: 1em;
      line-height: 30px;
      color: var(--dark);
    }

    p.bright {
      color: var(--bright) !important;
    }
  }

  .contact {
    width: 100%;
    height: 70%;
    display: flex;
    align-items: center;
    justify-content: center;

    .form {
      width: 70%;
      height: 90%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      border-radius: 5px;
      background: var(--dark);

      .info {
        width: 35%;
        height: 80%;
        padding: 20px 20px 20px 0;
        border-right: 2px solid var(--bright);
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-around;
        color: var(--white);

        .contacts {
          width: 100%;
          height: 30%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;

          .one {
            width: 100%;
            height: 50%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;

            p {
              margin: 0 10px;
              font-size: 1em !important;
            }

            .icon {
              font-size: 1.2em;
            }
          }
        }

        .socials {
          width: 60%;
          height: 40px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;

          .icon {
            font-size: 1.5em;
            margin: 0 10px;
            color: var(--white);

            :hover {
              color: var(--bright);
            }
          }
        }
      }

      form {
        width: 55%;
        height: 80%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: space-around;

        p.error {
          color: var(--red);
          line-height: 20px;
        }

        .row {
          width: 95%;
          height: auto;
          border-bottom: 1px solid var(--white);
          position: relative;

          input {
            background: transparent;
            width: 100%;
            height: 40px;
            border: none;
            outline: none;
            color: var(--white);
          }

          textarea {
            width: 100%;
            background: transparent;
            border: none;
            outline: none;
            color: var(--white);
          }
        }

        .row.error {
          border-bottom: 1px solid var(--red);
        }
      }

      button {
        width: 100px;
        height: 35px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--bright);
        border-radius: 5px;
        color: var(--white);
        border: none !important;

        img {
          width: 40%;
        }
      }
    }
  }

  @media only screen and (max-width: 600px) {
    justify-content: space-around;

    .title {
      height: 10%;
      text-align: center;
    }

    .contact {
      height: 85%;

      .form {
        width: 95%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        flex-flow: column-reverse;

        .info {
          width: 95%;
          height: 40%;
          align-items: center;
          padding: 0 10px;
          border-right: 0;

          > p {
            text-align: center;
          }

          .contacts {
            width: 90%;
          }

          .socials {
            width: 70%;
          }
        }

        form {
          width: 90%;
          align-items: center;

          p.error {
            line-height: 15px;
          }
        }
      }
    }
  }

  @media only screen and (min-width: 600px) and (max-width: 768px) {
    .contact {
      .form {
        width: 90%;
      }
    }
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    .contact {
      .form {
        width: 85%;
      }
    }
  }

  @media only screen and (min-width: 993px) and (max-width: 1200px) {
    .contact {
      .form {
        width: 85%;
      }
    }
  }
`;

export default Contact;
