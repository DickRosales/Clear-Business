import React, { Component } from 'react';
// import * as PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled from 'styled-components';
import ClearLocation from './ClearLocation'
import curveBG from '../../../../../static/onboarding/curve-bg.png';

const AboutSection = styled.section`
  position: relative;
  padding: 50px 0;
  background: #f9fafd;
  background: url(${curveBG}) no-repeat;
  z-index: 10;
`
const AboutWrapper = styled.div`
  position: relative;
  padding: 50px 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  max-width: 1240px;
  margin: 0 auto;
`
const AboutText = styled.div`
  width: 22%;
  margin-left: 7%;
  h3 {
    color: #637cd5;
    font-size: 3rem;
    font-weight: 400;
    margin: 0 0 10px;
  }
`
const AboutButton = styled.a`
  height: 50px;
  border-radius: 4px;
  padding: 0 20px;
  text-decoration: none;
  color: #fff;
  background: #5a79ee;
  display: inline-block;
  line-height: 50px;
  box-shadow: 0 2px 4px 0 rgba(21, 30, 70, 0.12);
`
// const propTypes = {
//   logo: PropTypes.string.isRequired
// };
class AboutSectionComponent extends Component {
  render() {
    return (
      <AboutSection>
        <AboutWrapper>
          <AboutText>
            <h3>A new type of music company.</h3>
            <p>
              Clear Digital Music Group has the expertise, tools and relationships to get your music heard and ensure
              that you’re maximizing your time and revenue.
            </p>
            <Link to="about">
              <AboutButton>About Us</AboutButton>
            </Link>
          </AboutText>
          <ClearLocation />
        </AboutWrapper>
      </AboutSection>
    );
  }
}

// AboutSectionComponent.propTypes = propTypes;
export default AboutSectionComponent;
