import { useRef, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";
import { useDropzone } from "react-dropzone";

//icons
import uploadImg from "../../assets/upload.png";

const CreateMedia = (props) => {
  const wrapperRef = useRef(null);
  const [fileList, setFileList] = useState([]);

  const onDragEnter = () => wrapperRef.current.classList.add("dragover");

  const onDragLeave = () => wrapperRef.current.classList.remove("dragover");

  const onDrop = () => wrapperRef.current.classList.remove("dragover");

  const onFileDrop = (e) => {
    const newFile = e.target.files[0];
    if (newFile) {
      const updatedList = [...fileList, newFile];
      setFileList(updatedList);
      props.onFileChange(updatedList);
    }
  };
  const navigate = useNavigate();
  const goTo = (path) => {
    navigate(path);
  };

  //drag and drop image
  const [image, setImage] = useState([]);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: "image/*",
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
      <div className="textmedia">
        <p onClick={() => goTo("/stories/create-text")}>Text</p>
        <p className="active" onClick={() => goTo("/stories/create-media")}>
          Media
        </p>
      </div>
      <div
        ref={wrapperRef}
        className="drop-file-input"
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        <div className="drop-file-input__label" {...getRootProps()}>
          <input {...getInputProps()} />
          {image.map((upfile) => (
            <img className="img-preview" src={upfile.preview} alt="preview" />
          ))}
        </div>
        <input type="file" value="" onChange={onFileDrop} />
      </div>
      <input className="text" type="text" placeholder="Say Something..." />
      <button>Send</button>
    </Container>
  );
};
export default CreateMedia;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .drop-file-input {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .drop-file-input__label {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 200px;
    background: #eaeaea;
    width: 60%;
    border-radius: 5px;
    position: relative;
    top: 80px;
    cursor: pointer;

    /* img{
            width: 50px;
            height: 50px;
        } */
    .img-preview {
      position: relative;
      max-width: 100%;
      max-height: 100%;
      /* background-position: center; */
      object-fit: cover;
    }
  }
  .drop-file-input input {
    opacity: 0;
    position: relative;
    top: -150px;
    width: 50%;
    height: 5vh;
    cursor: pointer;
    background: purple;
    bottom: 100px;
  }
  .drop-file-input__label:hover,
  .drop-file-input.dragover {
    opacity: 0.6;
  }

  .text {
    width: 60%;
    outline: none;
    border: none;
    border-bottom: 2px solid #717171;
    background: none;
    margin-top: 60px;
  }
  .textmedia {
    display: flex;
    position: relative;
    top: 40px;
    justify-content: center;
    align-items: center;
    text-align: center;

    p {
      width: 200px;
      text-align: center;
      cursor: pointer;
      position: relative;
      border-bottom: 2px solid #ccc;
    }
    .active {
      border-bottom: 2px solid #3be28f;
    }
  }

  button {
    margin-top: 50px;
    width: 130px;
    border-radius: 3px;
    outline: none;
    border: none;
    background: #d9d9d9;
    padding: 5px;
    position: relative;
    float: right;
    bottom: 32px;
    left: 270px;
  }
`;
