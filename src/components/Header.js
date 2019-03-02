import React, { Component } from 'react';
import styled from 'styled-components'

const SHeader = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    color: white;
`
const STitle = styled.h2`
    font-weight: 100;
    font-size: 32px;
`


class Header extends Component {
    render() {
        return (
            <SHeader>
                <STitle>Sneaker Store</STitle>
            </SHeader>
        )
    }
}

export default Header