import React, { Component } from 'react';
import styled from 'styled-components'

const SNav = styled.nav`
    display: flex;
    background-color: black;
    color: white;
    justify-content: center;
`
const SSpan = styled.span`
    margin: 10px;
`

class Nav extends Component {
    render() {
        return (
            <SNav>
                <SSpan>Home</SSpan>
                <SSpan>About</SSpan>
                <SSpan>Products</SSpan>
                <SSpan>Account</SSpan>
            </SNav>
        );
    }
}

export default Nav;