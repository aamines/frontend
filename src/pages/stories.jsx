import styled from "styled-components";
import { Outlet } from "react-router";

//components
import StoriesContainer from "../components/stories/container";

const Story = () => {
  return (
    <Container>
      <div className="view">
        <Outlet />
      </div>
      <ThumbnailList>
        <StoriesContainer />
      </ThumbnailList>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 50%;
  height: auto;
  margin: auto;
  top: 50px;
  border-radius: 5px;

  .view {
    width: 100%;
    height: 85%;
  }
`;

const ThumbnailList = styled.div`
  display: flex;
  width: 90%;
  float: right;
  overflow: scroll;
  position: relative;
  margin: 30px 0 0 0;

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
