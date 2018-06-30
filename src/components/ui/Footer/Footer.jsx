import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled from "styled-components";
import UserLinks from '../../blog-ui/UserLinks/UserLinks';
import './Footer.css';

const Footer = styled.footer`
  justify-content: center;
  align-content: center;
  width: 100%;
  height: auto;
  padding: 30px 0;
  border: 1px solid #e9ebf8;
  background: #f9fafd;
`

const FooterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  max-width: 960px;
  margin: 0 auto;
  @media (max-width: 640px - 1px) {
    justify-content: space-around;
  }
`
const FooterLogo = styled.img`
  width: 200px;
  background-size: cover;
`
const FooterLinks = styled.div`
  text-align: center;
  margin: 0;
`
const FooterLink = styled.a`
  color: rgba(31,40,97,.5);
  font-size: 14px;
  margin-right: 15px;
  text-decoration: none;
  display: inline-block;
`
const propTypes = {
  config: PropTypes.object.isRequired,
};
class FooterComponent extends Component {
  render() {
    const { config } = this.props;

    return (
      <Footer>
        <FooterWrapper>
          <FooterLogo src={config.siteLogo} />
          <FooterLinks>
            <Link to="/">
              <FooterLink>Home</FooterLink>
            </Link>
            <Link to="About">
              <FooterLink>About</FooterLink>
            </Link>
            <Link to="Careers">
              <FooterLink>Careers</FooterLink>
            </Link>
            <Link to="Contact">
              <FooterLink>Contact</FooterLink>
            </Link>
            <Link to="Blog">
              <FooterLink>Blog</FooterLink>
            </Link>
          </FooterLinks>
          <UserLinks config={config} labeled />
        </FooterWrapper>
      </Footer>
    );
  }
}

FooterComponent.propTypes = propTypes;
export default FooterComponent;

