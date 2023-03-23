import styled from "styled-components";
import { useNavigate } from "react-router";

const CreateText = () => {
  const navigate = useNavigate();

  const goTo = (path) => {
    navigate(path);
  };
  const changeColor = (color) => {
    document
      .getElementsByClassName("black-border")[0]
      .classList.remove("black-border");

    document.addEventListener("click", (event) => {
      let clickedElement = event.target;
      clickedElement.classList.add("black-border");
    });
    document.getElementById("textarea").style.backgroundColor = color;
  };

  return (
    <Container>
      <div className="textmedia">
        <p className="active" onClick={() => goTo("/stories/create-text")}>
          Text
        </p>
        <p onClick={() => goTo("/stories/create-media")}>Media</p>
      </div>
      <div className="textarea" id="textarea">
        <div
          className="contenteditable"
          contenteditable="true"
          placeholder="Type Something..."
        >
          Type Something...
        </div>
        <div className="colors">
          <div
            className="first black-border"
            onClick={() => changeColor("#3be28f")}
          ></div>
          <div className="second" onClick={() => changeColor("#ff347d")}></div>
          <div className="third" onClick={() => changeColor("#ce18d1")}></div>
          <div className="fourth" onClick={() => changeColor("#4f1dde")}></div>
          <div className="fifth" onClick={() => changeColor("#26c7d1")}></div>
        </div>
      </div>
      <button>Send</button>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin: auto;
  border-radius: 5px;

  .textarea {
    margin: auto;
    display: flex;
    border-radius: 5px;
    background: #3be28f;
    flex-direction: column;
    display: table;
    width: 60%;
    height: 30vh;
    text-align: center;
    outline: 0px solid transparent !important;
    top: 80px;
    position: relative;

    .contenteditable {
      display: table-cell;
      vertical-align: middle;
      width: 100%;
      outline: none;
    }
    .colors {
      margin-left: -250px;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      left: 250px;
      width: 50px;
      top: 30px;
      div {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        margin: 5px;
        cursor: pointer;
      }
      .first {
        background: #3be28f;
      }
      .second {
        background: #ff347d;
      }
      .third {
        background: #ce18d1;
      }
      .fourth {
        background: #4f1dde;
      }
      .fifth {
        background: #26c7d1;
      }
      .black-border {
        border: 2px solid #000;
      }
    }
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
    width: 130px;
    border-radius: 3px;
    outline: none;
    border: none;
    background: #d9d9d9;
    padding: 5px;
    position: relative;
    top: 120px;
    float: right;
    right: 20px;
    cursor: pointer;
  }
`;

export default CreateText;
