import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Product from './Product';

const SDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-flow: row wrap;
    width: 80%;
    margin: auto;
`

class Products extends Component {
    
    render() {
        console.log('Products' , this.props.products)
        return (
            <SDiv>
                {this.props.products.map((product) => {
                    return (
                        <Product 
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            price={product.price}
                            image={product.img}
                        />
                    )

                })}
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