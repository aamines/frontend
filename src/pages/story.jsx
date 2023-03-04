import React from "react";
import styled from "styled-components";
import View from "../components/story/view";

const Story = ()=>{
    return(
    <Container>
       <View />
    </Container>
    )
}

const Container = styled.div`
position: relative;
background-color: #F2f2f2;
width: 70%;
height: 70vh;
margin: auto;
top: 50px;
border-radius: 10px;
`

export default Story