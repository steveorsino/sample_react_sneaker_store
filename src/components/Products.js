import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Product from './Product';
import Loader from 'react-loader-spinner'

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

class Products extends Component {
    
  render() {
    return (
      <SDiv>
        {this.props.products.length !== 0
          ?  this.props.products.map((product) => {
              return (
                <Product 
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.img}
                />
              )
            })
          : <LoaderDiv>
              <Loader 
                type='Oval'
                color='black'
              />
            </LoaderDiv>
        }
      </SDiv>
    );
  }
}

const mapStateToProps = ({products}) => {
    return {
        products
    }
}

export default connect(mapStateToProps)(Products);