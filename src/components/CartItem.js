import React, { Component } from 'react'
import { connect } from 'react-redux';
import { deleteFromCart } from '../actions/products'
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

  removeItem = (id) => {
    console.log('REMOVE ITEM = ', id)
    console.log('PROPS= ', this.props)
    this.props.dispatch(deleteFromCart(id))
    if (localStorage.getItem('SNEAKER_CART') === null ) {
      return
    } else {
      const cart = JSON.parse(localStorage.getItem('SNEAKER_CART'))
      let newCart = {
        sneakers: {}
      }
      const arr = Object.keys(cart.sneakers)
      //console.log('CART = ', cart)
      //console.log('ARR = ', arr)
      for (var thisid in cart.sneakers) {
        //console.log('THISID = ', thisid, typeof thisid)
        //console.log('ID', id,typeof id) 
        if (thisid != id){
          //console.log('OK', thisid)
          //console.log('ADDING ', cart.sneakers)
          newCart.sneakers[thisid] = {...cart.sneakers[thisid]}
        }

      }
      //console.log('newCart = ', newCart)
      localStorage.setItem('SNEAKER_CART', JSON.stringify(newCart))
    }
  }
  render() {
    console.log('ITEM PROPS = ', this.props)
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
          <RemoveBtn
            onClick={() => this.removeItem(this.props.id)}
          >X</RemoveBtn>
        </ItemPrice>
      </ItemDiv>
    )
  }
}

const mapStateToProps = ({products}) => {
  return {
    products
  }
}

export default connect(mapStateToProps)(CartItem)
