import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import Link from 'gatsby-link';
import './Nav.css';

const propTypes = {
  logo: PropTypes.string.isRequired
};
class Nav extends Component {
  render() {
    const { logo } = this.props;
    return (
      <nav className="nav">
        <div className="nav-left">
          <figure
            className="logo"
            style={{
              backgroundImage: `url(${logo})`
            }}
            alt="cleardigital logo"
          />
          <Link to="/about">Distribute</Link>
          <Link to="/about">Monetization</Link>
          <Link to="/about">Other Services</Link>
        </div>
        <div className="nav-right">
          <Link to="/about">Contact Us</Link>
        </div>
      </nav>
    );
  }
}

Nav.propTypes = propTypes;

export default Nav;
