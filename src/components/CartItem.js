import React, { Component } from 'react'
import styled from 'styled-components'

const ItemDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 50px;
  border-bottom: 1px solid #969696;
`

const ItemImgCont = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  overflow: hidden;
  width: 200;
  height: 150;
`

const ItemImg = styled.img`
  width: 150px;
`

const ItemName = styled.span`
  font-size: 32px;
  font-weight: lighter;
`

const ItemPrice = styled.span`
  font-size: 32px;
`

const RemoveBtn = styled.button`
  background-color: transparent;
  color: red;
  cursor: pointer;
  border: none;
  font-size: 32px;
  margin-left: 25px;


  :hover {
    color: darkred;
  }
`

class CartItem extends Component {
  render() {
    return (
      <ItemDiv>
        <ItemImgCont>
          <ItemImg 
            src={window.location.origin + '/products/' + this.props.img}
            alt={this.props.name} />
        </ItemImgCont>
        <ItemName>{this.props.name}</ItemName>
        <ItemPrice>
          ${this.props.price}
          <RemoveBtn>X</RemoveBtn>
        </ItemPrice>
      </ItemDiv>
    )
  }
}

export default CartItem
