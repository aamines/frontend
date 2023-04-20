import styled from "styled-components";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Item = ({ data }) => {
  //config
  const navigate = useNavigate();

  //redux data
  const account = useSelector((state) => state.persist.account);

  //local data
  const viewed = data?.Memory?.reduce((result, memory) => {
    return result || memory?.viewers?.includes(account);
  }, false);

  const goToMemory = () => {
    navigate(`/client/${account}/memories/${data?.id}`);
  };

  return (
    <Container viewed={viewed}>
      <div className="cont" onClick={goToMemory}>
        <div className="one"></div>
        {data?.id === account ? (
          <p>You</p>
        ) : (
          <p>{data?.user?.names?.split(" ")[0]}</p>
        )}
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;

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
    border: ${(props) =>
      props.viewed ? "3px solid var(--grayish)" : "3px solid var(--bright)"};

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
