import styled from "styled-components";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

//components
import Item from "../../components/memories/item";

//icons
import { IoMdAdd } from "react-icons/io";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const Memories = () => {
  //config
  const navigate = useNavigate();

  //redux data
  const account = useSelector((state) => state.persist.account);
  const memories = useSelector((state) => state.memory.memories);

  const onNext = () => {};

  const onPrevious = () => {};

  const goToCreate = () => {
    navigate(`/client/${account}/create/text`);
  };

  return (
    <Container>
      <div className="view">
        <div className="scroll" onClick={onNext}>
          <BiChevronLeft className="icon" />
        </div>
        <div className="image"></div>
        <div className="scroll" onClick={onPrevious}>
          <BiChevronRight className="icon" />
        </div>
      </div>
      <div className="memories">
        <div className="status" onClick={goToCreate}>
          <div className="one">
            <IoMdAdd className="icon" />
          </div>
          <p>You</p>
        </div>
        <div className="statuses">
          {memories?.length > 0 && (
            <>
              <ul>
                {memories.map((status, index) => (
                  <Item key={index} data={status} />
                ))}
              </ul>
            </>
          )}
        </div>
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

  .view {
    height: 550px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    margin: 50px 0 0 0;
    padding: 0 20px;

    @media only screen and (min-width: 1200px) {
      width: 1200px;
    }

    @media only screen and (max-width: 1200px) {
      width: 90%;
    }

    .image {
      width: 85%;
      height: 100%;
      overflow: hidden;
      border-radius: 10px;
      background: var(--grayish);
    }

    .scroll {
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      cursor: pointer;
      background: var(--grayish);

      .icon {
        font-size: 1.7em;
        color: var(--white);
      }
    }
  }

  .memories {
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 100px;
    margin: 50px 0 0 0;

    @media only screen and (min-width: 1200px) {
      width: 1200px;
    }

    @media only screen and (max-width: 1200px) {
      width: 90%;
    }

    .status {
      width: 70px;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 10px 0 0;
      cursor: pointer;

      .one {
        width: 70px;
        height: 70px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background: var(--grayish);

        .icon {
          font-size: 2em;
          color: var(--white);
        }
      }

      p {
        margin: 5px 0 0 0;
        color: var(--white);
      }
    }

    .statuses {
      width: 87%;
      height: 100%;
      padding: 0 10px;
      display: flex;
      flex-direction: row;
      align-items: center;

      ul {
        width: 100%;
        height: 100%;
        display: flex;
        overflow: scroll;
        flex-direction: row;
        align-items: center;
      }

      ul::-webkit-scrollbar {
        display: none;
      }
    }
  }
`;

export default Memories;
