//packages
import React from "react";
import styled from "styled-components";

//components
import Devices from "../components/devices";
import Home from "../components/home";
import Contact from "../components/contact";

const Main = () => {
  return (
    <Container>
      <Home />
      <Devices />
      <Contact />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;

  @media only screen and (max-width: 600px) {
    #home {
      height: 700px;
    }

    #devices {
      height: 1100px;
    }

    #contact {
      height: 1000px;
    }
  }

  @media only screen and (min-width: 600px) and (max-width: 768px) {
    #home {
      height: 500px;
    }

    #devices {
      height: 550px;
    }

    #contact {
      height: 550px;
    }
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    #home {
      height: 600px;
    }

    #devices {
      height: 550px;
    }

    #contact {
      height: 550px;
    }
  }

  @media only screen and (min-width: 993px) and (max-width: 1200px) {
    #home {
      height: 600px;
    }

    #devices {
      height: 600px;
    }

    #contact {
      height: 600px;
    }
  }

  @media only screen and (min-width: 1200px) {
    #home {
      height: 650px;
    }

    #devices {
      height: 650px;
    }

    #contact {
      height: 650px;
    }
  }
`;

export default Main;
