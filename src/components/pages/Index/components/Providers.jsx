import React, { Component } from 'react';
import styled from "styled-components";

const ProviderWrapper = styled.div`
  position: relative;
  max-width: 960px;
  margin: 0 auto;
  padding: 50px 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
`
const Providers = styled.div`
  height: 75px;
  width: 75px;
  border-radius: 50%;
  background: #f5f5f5;
`

class Provider extends Component {
  render() {
    return (
      <ProviderWrapper>
        <Providers />
        <Providers />
        <Providers />
        <Providers />
        <Providers />
        <Providers />
        <Providers />
      </ProviderWrapper>
    );
  }
}

// ViewCounter.propTypes = propTypes;

export default Provider;