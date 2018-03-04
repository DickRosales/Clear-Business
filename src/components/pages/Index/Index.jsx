import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import Link from 'gatsby-link';

import ViewCounter from './components/ViewCounter';
import Services from './components/Services';
import Onboarding from './components/Onboarding';

import './Index.css';
// import arrow from '../../../../static/onboarding/arrow.svg';

const propTypes = {
  content: PropTypes.object.isRequired,
  images: PropTypes.object.isRequired
};
class Index extends Component {
  render() {
    console.log(this.props);
    const { content, images } = this.props;

    return (
      <div>
        <div
          className="main-hero"
          style={
            {
              // backgroundImage: `url(${images.sizes.src})`
            }
          }
        >
          <div className="left">
            <h1>{content.heroTitle}</h1>
            <h2>{content.heroSubTitle}</h2>
            <h3>{content.heroSubParagraph}</h3>
            <div className="input-field">
              <input type="text" placeholder="Enter your email" />
              <button className="btn">Get Started</button>
            </div>
            {/* <Link to={content.heroLink}>Other Services</Link> */}
          </div>
          <div className="right">
            <img
              src="https://media.istockphoto.com/photos/fashion-girl-listening-to-music-in-headphones-wearing-a-colorful-pink-picture-id649545014"
              alt="we are music!"
            />
          </div>
        </div>
        <main>
          <ViewCounter />
          <Services />
          <Onboarding />
        </main>
      </div>
    );
  }
}

Index.propTypes = propTypes;

export default Index;
