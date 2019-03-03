import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from './actions/products'
import Header from './components/Header';
import Nav from './components/Nav'
import MainImage from './components/MainImage'
import Section from './components/Section'
import Products from './components/Products'
import SneakerView from './components/SneakerView'
import Cart from './components/Cart'
import './App.css';

class App extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleInitialData())
      .then((res) => console.log('APP = ', this.props))
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
