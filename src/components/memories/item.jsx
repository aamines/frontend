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
    return result || memory?.viewers?.includes(account.id);
  }, false);

  const goToMemory = () => {
    navigate(`/client/${account.id}/memories/${data?.id}`);
  };

  return (
    <Container viewed={viewed}>
      <div className="cont" onClick={goToMemory}>
        <div className="one">
          {data?.media_profile?.media_url ? (
            <img src={data?.media_profile?.media_url} alt="profile" />
          ) : (
            <p>{data?.names?.charAt(0)}</p>
          )}
        </div>
        {data?.id === account?.id ? (
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
    padding: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: var(--grayish);
    overflow: hidden;
    border: ${(props) =>
      props.viewed ? "3px solid var(--grayish)" : "3px solid var(--bright)"};

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    p {
      font-size: 1.3em;
    }

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
