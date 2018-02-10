import React, { Component } from 'react';
// import * as PropTypes from 'prop-types';
import Link from 'gatsby-link';
import './Onboarding.css';
import money from '../../../../../static/onboarding/moneyMarket.png';
import music from '../../../../../static/onboarding/musicTranscript.png';
import file from '../../../../../static/onboarding/sendFile.png';

// const propTypes = {
//   logo: PropTypes.string.isRequired
// };
class Onboarding extends Component {
  render() {
    return (
      <div>
        <section className="onboarding-section">
          <div className="section-title">
            <h3>Lets get started.</h3>
            <p>How to get your music distributed with ClearDigital.</p>
          </div>
          <div className="onboarding-row">
            <article>
              <img src={music} alt="" />
              <h4>Prepare your music.</h4>
              <p>Be sure to provide us with a complete label copy and have all your publishing licenses in order.</p>
            </article>
            <article>
              <img src={file} alt="" />
              <h4>SEND US YOUR INFORMATION</h4>
              <p>Once we provide you with a release date, let your fans know where to expect to find your music.</p>
            </article>
            <article>
              <img src={money} alt="" />
              <h4>START MARKETING</h4>
              <p>Be sure to provide us with a complete label copy and have all your publishing licenses in order.</p>
            </article>
          </div>
        </section>
        <section className="video-section">
          <div className="video-row" />
        </section>
      </div>
    );
  }
}

// ViewCounter.propTypes = propTypes;

export default Onboarding;
