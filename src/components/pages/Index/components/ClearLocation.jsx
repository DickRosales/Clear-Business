import React, { Component } from 'react';
import styled from "styled-components";
import map from '../../../../../static/onboarding/map.svg';

const MapWrapper = styled.figure`
  position: relative;
  width: 62%;
`
const MapImage = styled.img`
  width: 100%;
`
const LocationWrapper = styled.div`
  position: absolute;
  top: 40.5%;
  left: 13.5%;
`
const Location = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: red;
`
const BlueDot = styled.figure`
  margin: 0;
  position: absolute;
  left: -13px;
  top: 19px;
  width: 10px;
  height: 10px;
  background: #5a79ee;
  border-radius: 50%;
`
const GreyCircle = styled.span`
  margin: 0;
  position: absolute;
  left: -18px;
  top: 15px;
  width: 19px;
  height: 19px;
  background: rgba(169, 189, 241, 0.3);
  border-radius: 50%;
  &:nth-child(2) {
    width: 31px;
    height: 31px;
    left: -23px;
    top: 9px;
  }
  &:nth-child(3) {
    width: 46px;
    height: 46px;
    left: -31px;
    top: 1px;
  }
`
const LocationName = styled.span`
  position: absolute;
  padding: 10px;
  background: white;
  border-radius: 4px;
  width: 140px;
  left: 9px;
  top: 3px;
  box-shadow: 0 8px 12px 0 rgba(14, 36, 129, 0.08);
  &:before {
    content: '';
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 20px 10px 20px 0;
    border-color: transparent white transparent transparent;
    position: absolute;
    left: -9px;
    top: 1px;
  }
`
class ClearLocation extends Component {
  render() {
    return (
      <MapWrapper>
        <MapImage src={map} alt="World Map" />
        <LocationWrapper>
          <Location>
            <GreyCircle />
            <GreyCircle />
            <GreyCircle />
            <BlueDot />
            <LocationName>Los Angeles, CA</LocationName>
          </Location>
        </LocationWrapper>
      </MapWrapper>
    );
  }
}

export default ClearLocation;