import React, { Component } from 'react';
import Link from 'gatsby-link';
import UserLinks from '../../blog-ui/UserLinks/UserLinks';
import './Nav.css';

class Footer extends Component {
  render() {
    const { config } = this.props;
    const url = config.siteRss;
    const copyright = config.copyright;
    if (!copyright) {
      return null;
    }
    return (
      <nav className="nav">
        <UserLinks config={config} labeled />
        <div className="notice-container">
          <h4>{copyright}</h4>

          <Link to={url}>
            <button>Subscribe</button>
          </Link>
          <h4>
            Based on <a href="https://github.com/Vagr9K/gatsby-advanced-starter">Gatsby Advanced Starter</a>.
          </h4>
        </div>
      </nav>
    );
  }
}

export default Footer;
