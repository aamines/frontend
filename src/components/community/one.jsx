import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";

//Actions
import { setData } from "../../store/reducers/community/create";

const One = () => {
  //configs
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //redux data
  const variants = useSelector((state) => state.variants);

  const onSubmit = (data) => {
    dispatch(setData({ ...data }));
    navigate("/community/new/two");
  };

  return (
    <Container>
      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <div className="row">
          <input
            type="text"
            placeholder="Name"
            className={errors.name ? "error" : ""}
            {...register("name", {
              required: true,
              minLength: 5,
              maxLength: 25,
            })}
          />
          <select
            className={errors.type ? "error" : ""}
            {...register("type", {
              required: true,
            })}
          >
            <option value="school">School</option>
            <option value="campus">Campus</option>
            <option value="company">Company</option>
            <option value="community">Community</option>
            <option value="organization">Organization</option>
          </select>
        </div>
        <div className={errors.vision ? "big error" : "big"}>
          <textarea
            cols="30"
            rows="10"
            placeholder="Set vision"
            {...register("vision", {
              required: true,
              minLength: 40,
              maxLength: 200,
            })}
          />
        </div>
        <button type="submit" className="button">
          Next
        </button>
      </motion.form>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  form {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    .error {
      border: 1px solid var(--red);
    }
  }

  .row {
    width: 100%;
    height: 50px;
    display: flex;
    margin: 10px 0 20px 0;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    input,
    select {
      width: 48%;
      height: 100%;
      background: var(--grayish);
      border: none;
      border-radius: 5px;
      color: var(--white);
      padding: 0 10px 0 10px;
      outline: none;
    }
  }

  .big {
    width: 100%;
    height: 200px;

    textarea {
      width: 100%;
      height: 100%;
      background: var(--grayish);
      border: none;
      border-radius: 5px;
      padding: 10px;
      color: var(--white);
      outline: none;
    }
  }

  .button {
    width: 160px;
    height: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 20px 0;
    background: var(--bright);
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
`;

export default One;
