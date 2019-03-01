import React, { Component } from 'react';
import styled from 'styled-components';

const SDiv = styled.div`
    height: 400px;
    overflow: hidden;
    background-color: black;
`
const SImg = styled.img`
    width:100%;
    opacity: 0.5;
`

class MainImage extends Component {
    render() {
        return (
            <SDiv>
                <SImg src={window.location.origin +"/main.png"} alt="mainImage"/>
            </SDiv>
        );
    }
}

export default MainImage;