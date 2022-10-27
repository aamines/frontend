import React from "react";
import styled from "styled-components";

//icons
import { BiSearch } from "react-icons/bi";

//components
import Footer from "../components/footer";
import Community from "../components/discover/community";

const Explore = () => {
  const [community, setCommunity] = React.useState({
    name: "Nuero Community",
    members: "458",
    about:
      "Donec dictum tristique porta. Etiam convallis lorem lobortis nulla molestie, nec tincidunt ex ullamcorper. Quisque ultrices lobortis elit sed euismod. Duis in ultrices dolor, ac rhoncus odio. Suspendisse tempor sollicitudin dui sed lacinia. Nulla quis enim posuere, congue libero quis.",
  });

  return (
    <Container>
      <div className="container">
        <div className="search">
          <form action="#">
            <BiSearch className="icon" />
            <input type="text" placeholder="Search communities" />
            <button>Search</button>
          </form>
        </div>
        <div className="results">
          <div className="stats">
            <p>
              Found <span>345</span> public communities
            </p>
          </div>
          {[...Array(3)].map((_, index) => (
            <Community community={community} key={index} />
          ))}
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
    height: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .search {
      width: 100%;
      height: 150px;
      display: flex;
      align-items: center;
      justify-content: center;

      form {
        width: 40%;
        border-radius: 5px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--gray);
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 0 15px;

        .icon {
          font-size: 1.7em;
          color: var(--bright);
        }

        button {
          width: 20%;
          height: 70%;
          border: none;
          background: var(--bright);
          border-radius: 5px;
        }

        input {
          width: 72%;
          height: 100%;
          border: none;
          outline: none;
          background: transparent;
        }
      }
    }

    .results {
      width: 90%;
      height: 80%;
      background: var(--white);
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;

      .stats {
        width: 95%;
        height: 70px;
        display: flex;
        flex-direction: row;
        align-items: center;
        border-bottom: 1px solid var(--gray);

        p {
          span {
            color: var(--bright);
          }
        }
      }
    }
  }
`;

export default Explore;
