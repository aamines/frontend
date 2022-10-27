import React from "react";
import styled from "styled-components";

//sections
import Footer from "../components/footer";
import Some from "../components/main/some";
import Hero from "../components/main/hero";
import About from "../components/main/about";
import Founder from "../components/main/founder";
import Clients from "../components/main/clients";
import Testimonials from "../components/main/testimonials";

const Main = () => {
  return (
    <Container>
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
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  .hero {
    width: 100%;
    height: auto;
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
  }

  .footer {
    width: 100%;
    height: auto;
  }
`;

export default Main;
