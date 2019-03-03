import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import Section from './Section'
import Loader from 'react-loader-spinner'
import CartItem from './CartItem'

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

const ItemPrice = styled.span`
  font-size: 32px;
`
const TotalSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
`
const TotalSectionValue = styled(TotalSection)`
  align-items: flex-end;
  margin-left: 50px;
`

const TotalWrap = styled.div`
  display: flex;
  width:100%;
  justify-content: flex-end;
`

class Cart extends Component {
  render() {
    const TAX_RATE = .07
    let subtotal = 0
    this.props.cart.map((item) => {
      return subtotal += parseFloat(item.price)
    })

    const TaxAmt = subtotal * TAX_RATE;
    const totalAmt = subtotal + TaxAmt;

    return (
      <Fragment>
        <Section message={'My Shopping Cart'} />
        <SDiv>
          {this.props.cart.length === 0
            ? <LoaderDiv>
                <Loader 
                  type='Oval'
                  color='black'
                />
              </LoaderDiv>
            : <Fragment>
                {this.props.cart.map((item) => (
                  <CartItem
                    key={item.id}
                    id={item.id}
                    img={item.img}
                    name={item.name}
                    price={item.price}
                  />
                ))}
                <TotalWrap>
                  <TotalSection>
                    <ItemPrice>Subtotal </ItemPrice>
                    <ItemPrice>Tax </ItemPrice>
                    <ItemPrice>Total </ItemPrice>
                  </TotalSection>
                  <TotalSectionValue>
                    <ItemPrice>${subtotal.toFixed(2)}</ItemPrice>
                    <ItemPrice>${TaxAmt.toFixed(2)}</ItemPrice>
                    <ItemPrice>${totalAmt.toFixed(2)}</ItemPrice>
                  </TotalSectionValue>
                </TotalWrap>
              </Fragment>
          }
        </SDiv>
      </Fragment>
    )
  }
}

const mapStateToProps = ({cart}) => {
  return {
    cart
  }
}

export default connect(mapStateToProps)(Cart)
