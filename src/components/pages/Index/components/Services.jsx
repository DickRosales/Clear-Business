import React, { Component } from 'react';
// import * as PropTypes from 'prop-types';
import Link from 'gatsby-link';
import './Services.css';

// const propTypes = {
//   logo: PropTypes.string.isRequired
// };
class ViewCounter extends Component {
  render() {
    return (
      <section className="services-section">
        <article>
          <h3>DIGITAL DISTRIBUTION</h3>
          <p>
            ClearDigital offers distribution to the most important music platforms that offer digital download (i.e.
            iTunes), interactive (i.e. Spotify) and non-interactive (i.e. Pandora) streaming. Place your music on the
            fastest growing platforms in the industry.
          </p>
        </article>
        <article>
          <h3>YOUTUBE MONETIZATION</h3>
          <p>
            ClearDigital helps creators and content owners with customized solutions for collecting sound recording and
            audio visual revenue from hundreds of millions of views across the world’s most important video platform.
          </p>
        </article>
        {/* <div className="services-slant" /> */}
      </section>
    );
  }
}

// ViewCounter.propTypes = propTypes;

export default ViewCounter;
