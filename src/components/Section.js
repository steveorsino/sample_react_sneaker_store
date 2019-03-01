import React, { Component } from 'react';
import styled from 'styled-components';

const SSection = styled.section`
    height: 200px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

class Section extends Component {
    render() {
        return (
            <SSection style={this.props.styles}>
                <h2>{this.props.message}</h2>
            </SSection>
        );
    }
}

export default Section;