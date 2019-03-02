import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Section from './Section'

const SDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row wrap;
  width: 80%;
  margin: auto;
`

const SNeakerDiv = styled.div`
  
`

class SneakerView extends Component {

  render() {
    const pos = window.location.pathname.lastIndexOf('/');
    const sid = window.location.pathname.substring(pos + 1);
    if (this.props.products === undefined) {
      return <h1>Loading</h1>
    }
    const sneaker = this.props.products[sid];
    return (
      <Fragment>
        <SDiv>
          {sneaker === undefined
            ? 'LOADING' 
            : <Fragment>
                <Section message={sneaker.name} />
                
              </Fragment>
          }
        </SDiv>
      </Fragment>
    )
  }
}

const mapStateToProps = (products) => {
  return {
    products
  }
}

export default connect(mapStateToProps)(SneakerView)