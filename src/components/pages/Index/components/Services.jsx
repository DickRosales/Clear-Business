import React, { Component } from 'react';
// import * as PropTypes from 'prop-types';
import styled from 'styled-components';
import curveBG from '../../../../../static/onboarding/curve-bg.png';

const ServicesWrapper = styled.section`
  position: relative;
  padding: 100px 0;
  background: #f2f4fa;
  z-index: 10;
  background: url(${curveBG}) no-repeat;
  background-size: contain;
`
const ServicesSection = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  flex: 1;
  max-width: 1240px;
  margin: 0 auto;
`
const ServiceArticle = styled.article`
  width: 40%;
  margin: 0 2.5%;
  border: 1px solid #e9ebf8;
  border-radius: 6px;
  box-shadow: 0 8px 12px 0 rgba(14, 36, 129, 0.08);
  background: #fff;
  padding: 30px;
  border-radius: 5px;
  flex: 1;
  h3 {
    font-size: 1.4rem;
    line-height: 1.54;
    color: #1a2a55;
    font-weight: normal;
    margin: 10px 0;
  }
`
// const propTypes = {
//   logo: PropTypes.string.isRequired
// };
class Services extends Component {
  render() {
    return (
      <ServicesWrapper>
        <ServicesSection>
          <ServiceArticle>
            <h3>DIGITAL DISTRIBUTION</h3>
            <p>
              ClearDigital offers distribution to the most important music platforms that offer digital download (i.e.
              iTunes), interactive (i.e. Spotify) and non-interactive (i.e. Pandora) streaming. Place your music on the
              fastest growing platforms in the industry.
            </p>
          </ServiceArticle>
          <ServiceArticle>
            <h3>YOUTUBE MONETIZATION</h3>
            <p>
              ClearDigital helps creators and content owners with customized solutions for collecting sound recording and
              audio visual revenue from hundreds of millions of views across the world’s most important video platform.
            </p>
          </ServiceArticle>
        </ServicesSection>
      </ServicesWrapper>
    );
  }
}

// Services.propTypes = propTypes;
export default Services;
