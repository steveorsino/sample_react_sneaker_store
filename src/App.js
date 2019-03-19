import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData, receiveProducts } from './actions/products'
import { addToCart } from './actions/products'
import Header from './components/Header';
import Nav from './components/Nav'
import MainImage from './components/MainImage'
import Section from './components/Section'
import Products from './components/Products'
import SneakerView from './components/SneakerView'
import Cart from './components/Cart'
import './App.css';
import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://sample-react-sneaker-store.firebaseio.com/'
})

class App extends Component {

  componentDidMount() {

    const { dispatch } = this.props;
    const products = [];
    instance.get('/products.json')
      .then((response) => {
        for (let key in response.data){
          products.push(...response.data[key].products)
        }
        dispatch(receiveProducts(products))
      })

    //this.props.dispatch(addToCart(sneaker))

    if (localStorage.getItem('SNEAKER_CART') !== null ) {
      const cart = JSON.parse(localStorage.getItem('SNEAKER_CART'))
      console.log("IN APP Local Storage =", cart)
      const sneakers = cart.sneakers

      const arr = Object.keys((sneakers))
      arr.map((key) => {
        console.log('SNEAKERS', sneakers[key])
        this.props.dispatch(addToCart(sneakers[key]))
      })
    }

  }

  render() {
    console.log('In App render: ', this.props)
    return (
      <Router>
        <Fragment>
          <Route 
            exact path='/'
            render={() => (
              <Fragment>
                <Nav />
                <Header />
                <MainImage />
                <Section 
                  message={"Featured Products"}
                  //styles={{backgroundColor:'grey'}}
                />
                <Products />
              </Fragment>
            )}
          />
          <Route 
            exact path="/products/:id"
            render={() => (
              <Fragment>
                <Nav />
                <Header />
                <SneakerView />
              </Fragment>
            )}
          />
          <Route
            exact path='/cart'
            render={() => (
              <Fragment>
                <Nav />
                <Header />
                <Cart />
              </Fragment>
            )}
          />
        </Fragment>
      </Router>
    );
  }
}

const mapStateToProps = (products) => {
  return {
    products
  }
}

export default connect(mapStateToProps)(App);
