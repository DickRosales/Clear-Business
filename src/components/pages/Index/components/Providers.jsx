import React, { Component } from 'react';
import styled from "styled-components";
import { FaYoutube, FaApple, FaSpotify, FaGoogle, FaInstagram, FaFacebook, FaAmazon } from 'react-icons/lib/fa';

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
  text-align: center;
  line-height: 75px;
  color: rgba(31,40,97,.5);
`

class Provider extends Component {
  render() {
    return (
      <ProviderWrapper>
        <Providers>
          <FaYoutube size={32} />
        </Providers>
        <Providers>
          <FaFacebook size={32} />
        </Providers>
        <Providers >
          <FaApple size={32} /> 
        </Providers>
        <Providers >
          <FaInstagram size={32} /> 
        </Providers>
        <Providers >
          <FaAmazon size={32} /> 
        </Providers>
        <Providers>
          <FaSpotify size={32} />
        </Providers>
        <Providers >
          <FaGoogle size={32} /> 
        </Providers>
      </ProviderWrapper>
    );
  }
}

// ViewCounter.propTypes = propTypes;

export default Provider;