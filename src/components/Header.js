import React, { Component } from 'react';
import styled from 'styled-components'

const SHeader = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    color: white;
`


class Header extends Component {
    render() {
        return (
            <SHeader>
                <h2>HEADER</h2>
            </SHeader>
        )
    }
}

export default Header