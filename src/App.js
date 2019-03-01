import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import Nav from './components/Nav'
import MainImage from './components/MainImage'
import Section from './components/Section'
import Products from './components/Products'

import './App.css';

class App extends Component {
  render() {
    return (
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
    );
  }
}

export default App;
