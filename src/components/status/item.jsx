import styled from "styled-components";

const Item = ({data}) => {
  return (
    <Container>
       {data.map((item,index)=>(
      <div className="cont"><div className="one"></div><p>{item.name}</p></div>
      ))}
    </Container>
  );
};

const Container = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;

  .cont{
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
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='100' ry='100' stroke='%233BE28FFF' stroke-width='7' stroke-dasharray='100%25%2c 10%25' stroke-dashoffset='98' stroke-linecap='butt'/%3e%3c/svg%3e");

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
