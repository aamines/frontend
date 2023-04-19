import styled from "styled-components";

const Item = ({ data }) => {
  return (
    <Container>
      <div className="cont">
        <div className="one"></div>
        <p>{data?.name}</p>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  .cont {
    width: 100%;
    margin-left: 10px;
  }

  .one {
    cursor: pointer;
    width: 70px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: var(--grayish);

    .icon {
      font-size: 2em;
    }
  }

  p {
    width: 85%;
    margin: 5px 0 0 0;
    text-overflow: ellipsis;
    overflow: hidden;
    text-align: center;
    color: var(--white);
  }
`;

export default Item;
