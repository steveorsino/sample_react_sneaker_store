import React, { Component } from 'react';
import styled from 'styled-components';

const SDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 300px;
    margin-bottom: 40px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    
    :hover {
        opacity: 0.7;
    }
`
const SImg = styled.img`
    max-width: 280px;
    height: auto;
`

const SImgCont = styled.div`
    display: flex;
    justify-content: center;
    overflow: hidden;
    max-width: 400px;
    height: 300px;
    align-items: center;
`
const SName = styled.p`
    background-color: black;
    color: white;
    font-weight: bolder;
    margin-bottom: 0;
`

const SInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:100%;
    background-color: black;
    color: white;
`
class Product extends Component {
    render() {
        return (
            <SDiv>
                <SImgCont>
                    <SImg
                        src={window.location.origin + '/products/' + this.props.image} 
                        alt={this.props.name}
                    />
                </SImgCont>
                <SInfo>
                    <SName>{this.props.name}</SName>
                    <p>${this.props.price}</p>
                </SInfo>
            </SDiv>
        );
    }
}

export default Product;