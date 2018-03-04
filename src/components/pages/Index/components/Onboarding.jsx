import React, { Component } from 'react';
// import * as PropTypes from 'prop-types';
import Link from 'gatsby-link';
import './Onboarding.css';
import money from '../../../../../static/onboarding/moneyMarket.png';
import music from '../../../../../static/onboarding/musicTranscript.png';
import file from '../../../../../static/onboarding/sendFile.png';
import map from '../../../../../static/onboarding/map.svg';
import video from '../../../../../static/onboarding/virlan-video.png';

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
          <div
            className="video-row"
            style={{
              backgroundImage: `url(${video})`
            }}
          />
        </section>
        <section className="other-section">
          <div className="other-row">
            <figure
              style={{
                backgroundImage:
                  'url(https://media.istockphoto.com/photos/cassette-tape-and-frame-on-split-background-picture-id699564914)'
              }}
            />
            <ul>
              <li>
                <img src="" alt="" />
                <h4>Publishing Administration</h4>
                <p>
                  Clear Digital handles worldwide registration and royalty collection from music publishers, performance
                  royalty organizations, and digital retailers.
                </p>
              </li>
              <li>
                <img src="" alt="" />
                <h4>Label Services</h4>
                <p>
                  Our label services can help you review agreements, register for royalty collection (SoundExchange),
                  manage artist and meet your production deadlines.
                </p>
              </li>
              <li>
                <img src="" alt="" />
                <h4>Royalty Accounting</h4>
                <p>
                  Clear Digital offers a white label solution for any company that is required to process music
                  royalties and participation statements.
                </p>
              </li>
              <li>
                <img src="" alt="" />
                <h4>Localized Marketing</h4>
                <p>
                  By leveraging our team of experts and strategic partnerships, Clear Digital can help build your
                  presence as a brand or artist.
                </p>
              </li>
            </ul>
          </div>
        </section>
        <section className="about-section">
          <div className="about-row">
            <div className="about-text">
              <h3>A new type of music company.</h3>
              <p>
                Clear Digital Music Group has the expertise, tools and relationships to get your music heard and ensure
                that you’re maximizing your time and revenue.
              </p>
              <a className="section-button" href="#">
                About Us
              </a>
            </div>
            <figure className="about-map">
              <img src={map} alt="World Map" />
              <div className="location-wrapper">
                <div className="location">
                  <div className="grey-circle" />
                  <div className="grey-circle" />
                  <div className="grey-circle" />
                  <figure />
                  <span>Los Angeles, CA</span>
                </div>
              </div>
            </figure>
          </div>
        </section>
        <section className="clients-section">
          <div className="section-title">
            <h3>Our Clients.</h3>
            <p>How to get your music distributed with ClearDigital.</p>
          </div>
          <div className="clients-row">
            <div className="clients">
              <figure
                style={{
                  backgroundImage: `url(http://www.iconosmagazine.net/SITIO/wp-content/uploads/2017/05/Virlan2--1000x600.jpg)`
                }}
              />
              <h6>Virlan Garcia</h6>
            </div>
            <div className="clients">
              <figure
                style={{
                  backgroundImage: `url(https://cleardigital.io/images/showbusiness_logosquare.png)`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat'
                }}
              />
              <h6>ShowBusiness</h6>
            </div>
            <div className="clients">
              <figure
                style={{
                  backgroundImage: `url(https://images-na.ssl-images-amazon.com/images/I/51TmH3w2-jL._SS500.jpg)`
                }}
              />
              <h6>Jovanny Cadena</h6>
            </div>
            <div className="clients">
              <figure
                style={{
                  backgroundImage: `url(https://amp.businessinsider.com/images/58503297ca7f0cdf1e8b526e-750-485.png)`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat'
                }}
              />
              <h6>Waymo</h6>
            </div>
          </div>
          <div className="client-providers">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
        </section>
      </div>
    );
  }
}

// ViewCounter.propTypes = propTypes;

export default Onboarding;
