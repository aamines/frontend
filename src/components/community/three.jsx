import styled from "styled-components";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

//features
import axios from "../../features/axios";

//actions
import { setHasAccount, setAccount } from "../../store/reducers/persist";

const Three = () => {
  //configs
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //local data
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const data = useSelector((state) => state.community.create);

  //redux data
  const token = useSelector((state) => state.persist.token);

  const handleSubmit = () => {
    if (disabled) return;

    setLoading(true);
    setDisabled(true);

    axios
      .post(
        "/community/create",
        {
          name: data.name,
          type: data.type,
          vision: data.vision,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setLoading(false);
        setDisabled(false);
        dispatch(setHasAccount(true));
        dispatch(setAccount(res.data.data));
        navigate(`/client/${res.data.data.id}/home`);
      })
      .catch((error) => {
        setDisabled(false);
        setLoading(false);
        console.log(error);
      });
  };

  return (
    <Container>
      <p>
        The soul should always stand ajar, ready to <br /> welcome the ecstatic
        experience.
      </p>
      <div className="button" onClick={handleSubmit}>
        {loading ? <img src="/loader.svg" alt="loader" /> : <p>Enjoy</p>}
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    text-align: center;
    font-size: 1.3em;
    color: var(--white);
  }

  .button {
    width: 150px;
    height: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 20px 0;
    border-radius: 5px;
    background: var(--bright);
    cursor: pointer;

    p {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      color: var(--dark);
    }

    img {
      width: 35%;
    }
  }
`;

export default Three;
