import { Outlet } from "react-router";
import styled from "styled-components";
import Item from "../components/status/item";
import { IoMdAdd } from "react-icons/io";
import { useNavigate } from "react-router";
import data from "../store/reducers/data";

const Story = () => {
  const navigate = useNavigate();
  const goTo = (path) => {
    navigate(path);
  };
  return (
    <Container>
      <Outlet />
      <YouStatus onClick={() => goTo("/stories/create-text")}>
        <div className="one">
          <IoMdAdd className="icon" />
        </div>
        <p>You</p>
      </YouStatus>
      <ThumbnailList>
        <Item data={data} />
      </ThumbnailList>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  background-color: #f2f2f2;
  width: 50%;
  height: 60vh;
  margin: auto;
  top: 50px;
  border-radius: 5px;
`;

const ThumbnailList = styled.div`
  display: flex;
  width: 90%;
  float: right;
  overflow: scroll;
  position: relative;
  top: -50px;

  ::-webkit-scrollbar {
    display: none;
  }
  .pic-cont {
    width: 70px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .seen {
    border: 3px solid #05111e;
  }
  .notseen {
    border: 3px solid #3be28f;
  }
`;

const YouStatus = styled.div`
  width: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 46px;

  .one {
    width: 70px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: var(--gray);
    cursor: pointer;

    .icon {
      font-size: 2em;
    }
  }
  p {
    margin-top: 7px;
  }
`;
export default Story;
