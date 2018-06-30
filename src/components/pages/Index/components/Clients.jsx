import React, { Component } from 'react';
import styled from "styled-components";

const ClientsWrapper = styled.div`
  width: 100%;
  white-space: nowrap;
  text-align: center;
  overflow: hidden;
  height: 360px;
  padding-top: 50px;
`
const Client = styled.div`
  width: 240px;
  height: 300px;
  margin-left: 30px;
  background: #050612;
  position: relative;
  display: inline-block;
  margin-left: 15px;
  margin-right: -4px;
  overflow: hidden;
  box-shadow: 0 5px 18px 0 rgba(44, 46, 61, 0.1), 0 2px 4px 0 rgba(44, 46, 61, 0.1);
  border-radius: 3px;
  transform-origin: center;
  transition: transform 0.5s ease;
`
const ClientName = styled.h6`
  position: absolute;
  margin: 0;
  bottom: 25px;
  left: 0;
  right: 0;
  width: 40%;
  font-weight: 600;
  color: #fff;
  padding: 10px 10px;
  font-size: 10px;
  line-height: 12px;
  background-color: rgba(28, 29, 38, 0.9);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.24);
`
const ClientImage = styled.figure`
  margin: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

class Clients extends Component {
  render() {
    return (
      <ClientsWrapper >
        <Client>
          <ClientImage
            style={{
              backgroundImage: `url(http://www.iconosmagazine.net/SITIO/wp-content/uploads/2017/05/Virlan2--1000x600.jpg)`
            }}
          />
          <ClientName>Virlan Garcia</ClientName>
        </Client>
        <Client>
          <ClientImage
            style={{
              backgroundImage: `url(https://cleardigital.io/images/showbusiness_logosquare.png)`,
              backgroundSize: 'contain',
            }}
          />
          <ClientName>ShowBusiness</ClientName>
        </Client>
        <Client>
          <ClientImage
            style={{
              backgroundImage: `url(https://images-na.ssl-images-amazon.com/images/I/51TmH3w2-jL._SS500.jpg)`
            }}
          />
          <ClientName>Jovanny Cadena</ClientName>
        </Client>
        <Client>
          <ClientImage
            style={{
              backgroundImage: `url(https://amp.businessinsider.com/images/58503297ca7f0cdf1e8b526e-750-485.png)`,
              backgroundSize: 'contain',
            }}
          />
          <ClientName>Waymo</ClientName>
        </Client>
      </ClientsWrapper>
    );
  }
}

export default Clients;