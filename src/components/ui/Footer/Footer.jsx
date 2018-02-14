import React, { Component } from 'react';
import Link from 'gatsby-link';
import UserLinks from '../../blog-ui/UserLinks/UserLinks';
import './Footer.css';

class Footer extends Component {
  render() {
    const { config } = this.props;
    console.log(this.props);
    // const url = config.siteRss;
    const copyright = config.copyright;

    return (
      <footer className="footer">
        <div className="notice-container">
          <div className="">
            <h4>{copyright}</h4>
            <UserLinks config={config} labeled />
          </div>
          <div className="">
            <Link to="">
              <button>Home</button>
            </Link>
            <Link to="">
              <button>About</button>
            </Link>
            <Link to="">
              <button>Careers</button>
            </Link>
            <Link to="">
              <button>Contact</button>
            </Link>
            <Link to="">
              <button>Blog</button>
            </Link>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
