import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { connect } from 'react-redux'

const SNav = styled.nav`
    display: flex;
    background-color: black;
    justify-content: center;
`
const SSpan = styled(Link)`
    margin: 10px;
    color: #c1c1c1;
    text-decoration: none;

    :hover {
        color: white;
        cursor: pointer;
    }
`

const LoginLnk = styled(SSpan)`

`

class Nav extends Component {
    render() {
        return (
            <SNav>
                <SSpan to='/' exact>
                    Home
                </SSpan>
                <SSpan to='/'>About</SSpan>
                <SSpan to='/'>Products</SSpan>
                <SSpan to='/cart'>Cart {this.props.cart.length}</SSpan>
                <LoginLnk to='/'>Log in</LoginLnk>
            </SNav>
        );
    }
}

const mapStateToProps = ({cart}) => {
    return {
        cart
    }
}

export default connect(mapStateToProps)(Nav);