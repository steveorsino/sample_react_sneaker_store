import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Section from './Section'
import Loader from 'react-loader-spinner'
import { addToCart } from '../actions/products'

const SDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row wrap;
  width: 80%;
  margin: auto;
`

const LoaderDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: auto;
  margin-top: 50px;
`

const SNeakerDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  width: 600px;
`

const SneakerImg = styled.img`
  width: 500px;
  height: auto;
`
const SneakerDisc = styled.div`
  width: 700px;
  display: flex;
  flex-direction: column;
`
const PriceTxt = styled.p`
  font-size: 24px;
`

const AddBtn = styled.button`
  width: 100px;
  height: 32px;
  border: 2px solid black;
  font-size: 16px;
  background-color: transparent;
  cursor: pointer;

  :hover {
    background-color: black;
    color: white;
  }
`

const PriceAddDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`

class SneakerView extends Component {

  handleAddSneakerToCart (sneaker) {
    this.props.dispatch(addToCart(sneaker))
    //console.log(localStorage.getItem('SNEAKER_CART'))
    if (localStorage.getItem('SNEAKER_CART') === null ) {
      localStorage.setItem('SNEAKER_CART', JSON.stringify(sneaker))
    } else {
      const cart = JSON.parse(localStorage.getItem('SNEAKER_CART'))
      console.log(cart)

    }
  }

  render() {
    const pos = window.location.pathname.lastIndexOf('/');
    const sid = window.location.pathname.substring(pos + 1);

    const sneaker = this.props.products[sid];

    return (
      <Fragment>
        <SDiv>
          {sneaker === undefined
            ? <LoaderDiv>
                <Loader 
                  type='Oval'
                  color='black'
                /> 
              </LoaderDiv>
            : <Fragment>
                <Section message={sneaker.name} />
                <SNeakerDiv>
                  <SneakerImg
                    alt={sneaker.name}
                    src={window.location.origin + '/products/' + sneaker.img} 
                  />
                </SNeakerDiv>
                <SneakerDisc>
                  <span>{sneaker.description}</span>
                  <PriceAddDiv>
                    <PriceTxt>USD ${sneaker.price}</PriceTxt>
                    <AddBtn
                      onClick={() => this.handleAddSneakerToCart(sneaker)}>
                      Add to Cart
                    </AddBtn>
                  </PriceAddDiv>
                </SneakerDisc>
              </Fragment>
          }
        </SDiv>
      </Fragment>
    )
  }
}

const mapStateToProps = ({products}) => {
  return {
    products
  }
}

export default connect(mapStateToProps)(SneakerView)