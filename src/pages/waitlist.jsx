import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

import { BsTwitter, BsInstagram } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";

import axios from "../features/axios";

import Para from "../components/para";
import User from "../components/home/user";
import ResponseMessage from "../components/reponseMessage";

const Waitlist = () => {
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
      email: "",
    },
  });

  const handleReponseMessage = () => {
    setResponse(!response);
  };

  const onSubmit = (data) => {
    setLoading(true);

    axios
      .post("/waitlist", { email: data.email })
      .then((response) => {
        setLoading(false);
        reset({ email: "" });
        setTitle("Thanks");
        setType("success");
        setContent("You will be notified when projectia gets out!");
        setResponse(true);
      })
      .catch(() => {
        setLoading(false);
        setTitle("Hmmhm");
        setType("success");
        setContent("You have already registered on waitlist!");
        setResponse(true);
      });
  };

  return (
    <Container>
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
      <User
        top="20"
        right="7"
        title="Mines Group"
        skills="3"
        projects="10"
        what="Members"
        image="/images/one.jpg"
        className="editedtoo"
      />
      <User
        top="40"
        left="5"
        title="UI-UX Designer"
        skills="6"
        projects="3"
        what="Skills"
        image="/images/two.jpg"
        className="user"
      />
      <User
        bottom="10"
        left="35"
        title="Frontend Developer"
        skills="4"
        projects="7"
        what="Skills"
        image="/images/four.jpg"
        className="edited"
      />
      <div className="content">
        <div className="title">
          <Para>
            Join the Waitlist<span>.</span>
          </Para>
          <p>Get notified when projectia gets out!</p>
        </div>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: true })}
            />
          </div>
          {errors.email && <p className="error">Enter your email address</p>}
          <div className="row">
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
            <button type="submit">
              {loading ? (
                <>
                  <img src="/loader.svg" alt="loader" />
                </>
              ) : (
                <>Join</>
              )}
            </button>
          </div>
        </form>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  .content {
    width: 30%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    .title {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .form {
      width: 100%;
      margin: 20px 0;
      height: auto;
      display: flex;
      flex-direction: column;
      align-items: center;

      p.error {
        color: var(--red);
        font-size: 1em;
        line-height: 20px;
      }

      .row {
        width: 100%;
        height: 40px;
        margin: 10px 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        input {
          width: 100%;
          height: 100%;
          background: transparent;
          border: none;
          outline: none;
          border-bottom: 2px solid var(--dark);
        }

        button {
          width: 100px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 3px;
          border: none;
          text-decoration: none;
          font-weight: 600;
          background: var(--bright);
          color: var(--white);

          img {
            width: 40%;
          }
        }

        .socials {
          width: 35%;
          height: 100%;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-around;

          .icon {
            font-size: 1.5em;
            color: var(--dark);

            :hover {
              color: var(--bright);
            }
          }
        }
      }
    }
  }

  @media only screen and (min-width: 600px) and (max-width: 768px) {
    height: 100vh;

    .user {
      display: none;
    }

    .edited {
      left: 10% !important;
      bottom: 20% !important;
    }

    .content {
      width: 70%;
    }
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    height: 100vh;

    .user {
      display: none;
    }

    .edited {
      left: 10% !important;
      bottom: 20% !important;
    }

    .content {
      width: 70%;
    }
  }

  @media only screen and (min-width: 993px) and (max-width: 1200px) {
    height: 100vh;

    .user {
      display: none;
    }

    .edited {
      left: 10% !important;
      bottom: 20% !important;
    }

    .content {
      width: 55%;
    }
  }

  @media only screen and (max-width: 600px) {
    height: 100vh;

    .user {
      display: none;
    }

    .edited {
      left: 5% !important;
      bottom: 20% !important;
    }

    .editedtoo {
      top: 15% !important;
    }

    .content {
      width: 90%;

      .title {
        text-align: center;
      }
    }
  }
`;

export default Waitlist;
