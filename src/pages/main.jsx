import React from "react";
import styled from "styled-components";

//sections
import Footer from "../components/footer";
import Hero from "../components/main/hero";
import About from "../components/main/about";
import Testimonials from "../components/main/testimonials";

const Main = () => {
  return (
    <Container>
      <div className="hero">
        <Hero />
      </div>
      <div className="about">
        <About />
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

  .about {
    width: 100%;
    height: auto;
    padding: 40px 20px;
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
