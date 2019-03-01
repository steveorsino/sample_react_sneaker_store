import React, { Component } from 'react';
import styled from 'styled-components';
import { products } from '../products/products';
import Product from './Product';

const SDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-flow: row wrap;
    width: 90%;
    margin: auto;
`

class Products extends Component {
    
    render() {
        console.log('Products' , products)
        return (
            <SDiv>
                {products.map((product) => {
                    return (
                        <Product 
                            key={product.id}
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

export default Products;