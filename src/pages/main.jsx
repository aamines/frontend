/* eslint-disable react-hooks/exhaustive-deps */

import { motion } from "framer-motion";
import styled from "styled-components";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

//sections
import Footer from "../components/footer";
import Some from "../components/main/some";
import Hero from "../components/main/hero";
import About from "../components/main/about";
import Founder from "../components/main/founder";
import Clients from "../components/main/clients";
import Testimonials from "../components/main/testimonials";

const Main = () => {
  //config
  const navigate = useNavigate();

  //redux data
  const variants = useSelector((state) => state.variants.page);
  const accountId = useSelector((state) => state.persist.account);
  const tokenVerified = useSelector((state) => state.persist.tokenVerified);

  useEffect(() => {
    if (tokenVerified) {
      navigate(`/client/${accountId}/home`);
    }
  }, []);

  return (
    <Container>
      <motion.div
        className="all"
        variants={variants}
        animate="animate"
        initial="initial"
        exit="exit"
      >
        <div className="hero">
          <Hero />
        </div>
        <div className="some">
          <Some />
        </div>
        <div className="about">
          <About />
        </div>
        <div className="founder">
          <Founder />
        </div>
        <div className="clients">
          <Clients />
        </div>
        <div className="testimonials">
          <Testimonials />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </motion.div>
    </Container>
  );
};

const Container = styled.div`
  .all {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    .hero {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .some {
      width: 100%;
      height: 500px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }

    .about {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .founder {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }

    .clients {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }

    .testimonials {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .footer {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

export default Main;
