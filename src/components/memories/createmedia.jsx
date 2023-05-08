import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useDropzone } from "react-dropzone";

//icons
import { FiUpload } from "react-icons/fi";

const CreateMedia = () => {
  //redux data
  const variants = useSelector((state) => state.variants);

  //drag and drop image
  const [image, setImage] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptfiles) => {
      setImage(
        acceptfiles.map((uploadedfile) =>
          Object.assign(uploadedfile, {
            preview: URL.createObjectURL(uploadedfile),
          })
        )
      );
    },
  });

  return (
    <Container>
      <motion.div
        className="all"
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <div className="container">
          <div className="upload" {...getRootProps()}>
            <input
              {...getInputProps()}
              accept="image/png, image/gif, image/jpeg"
            />
            {image.length === 0 ? <FiUpload className="icon" /> : ""}
            {image.map((upfile) => (
              <img src={upfile.preview} alt="preview" />
            ))}
          </div>
        </div>
        <div className="text">
          <input type="text" placeholder="Type Something..." />
          <div className="button">
            <p>Send</p>
          </div>
        </div>
      </motion.div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;

  .all {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    .container {
      width: 100%;
      height: 70%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      .upload {
        width: 60%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background: var(--background);
        border-radius: 5px;
        cursor: pointer;
        margin: 50px 0 0 0;
        transition: all 0.3s ease;

        input {
          width: 100%;
          height: 100%;
          cursor: pointer;
          background: purple;
          bottom: 100px;
        }

        .icon {
          font-size: 4em;
          color: var(--gray);
        }

        img {
          max-width: 100%;
          max-height: 100%;
          object-fit: cover;
        }

        :hover {
          opacity: 0.6;
        }
      }
    }

    .text {
      width: 60%;
      height: 100px;
      margin: 20px 0 0 0;
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      input {
        width: 100%;
        height: 50px;
        border: none;
        outline: none;
        padding: 0 10px;
        color: var(--white);
        background: transparent;
        border-bottom: 1px solid var(--gray);
      }

      .button {
        width: 140px;
        height: 50px;
        display: flex;
        border-radius: 5px;
        align-items: center;
        justify-content: center;
        margin: 15px 0 0 0;
        cursor: pointer;
        background: var(--grayish);
        transition: all 0.3s ease;

        p {
          color: var(--white);
          transition: all 0.3s ease;
        }

        :hover {
          background: var(--bright);

          p {
            color: var(--dark);
          }
        }
      }
    }
  }
`;

export default CreateMedia;
