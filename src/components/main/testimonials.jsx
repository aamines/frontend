import React, { useEffect } from "react";
import Slider from "react-slick";
import styled from "styled-components";

import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";

const Testimonials = () => {
  const [testimonials, setTestimonials] = React.useState([]);

  useEffect(() => {
    setTestimonials([
      {
        name: "John Doe",
        position: "CEO, Company",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl sit amet nisl. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl sit amet nisl.",
      },
      {
        name: "John Doe",
        position: "CTO, Company",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl sit amet nisl. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl sit amet nisl.",
      },
      {
        name: "John Doe",
        position: "Hiring Manager, Company",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl sit amet nisl. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl sit amet nisl.",
      },
    ]);
  }, []);

  return (
    <Container>
      <div className="header">
        <p className="head">Testimonials</p>
        <p>What clients say</p>
      </div>
      <div className="content">
        <Slider
          dots={true}
          arrows={true}
          prevArrow={<BsChevronDoubleLeft />}
          nextArrow={<BsChevronDoubleRight />}
          useCSS={true}
        >
          {testimonials.map((testimonial, index) => (
            <div className="testimonial" key={index}>
              <p className="text">{testimonial.text}</p>
              <p className="name">{testimonial.name}</p>
              <p className="position">{testimonial.position}</p>
            </div>
          ))}
        </Slider>
      </div>
    </Container>
  );
};

const Container = styled.div`
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 0;

  @media only screen and (min-width: 1200px) {
    width: 1200px;
  }

  @media only screen and (max-width: 1200px) {
    width: 90%;
  }

  .header {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 0 40px 0;

    p.head {
      font-size: 2rem;
      font-weight: 800;
      color: var(--white);
    }

    p {
      color: var(--bright);
    }
  }

  .content {
    width: 50%;
    height: auto;

    .testimonial {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
      align-items: center;

      p {
        text-align: center;
        margin: 10px 0;
        color: var(--white);
      }

      .name {
        font-weight: 800;
      }
    }
  }
`;

export default Testimonials;
