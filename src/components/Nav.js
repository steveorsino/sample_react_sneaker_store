import React, { Component } from 'react';
import styled from 'styled-components'

const SNav = styled.nav`
    display: flex;
    background-color: black;
    color: #c1c1c1;
    justify-content: center;
`
const SSpan = styled.span`
    margin: 10px;

    :hover {
        color: white;
        cursor: pointer;
    }
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