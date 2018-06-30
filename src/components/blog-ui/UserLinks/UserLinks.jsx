import React, { Component } from "react";
import { FaInstagram, FaTwitter, FaFacebook, FaEnvelope } from 'react-icons/lib/fa';
import styled from 'styled-components';

const SocialWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  svg {
    fill: rgba(31,40,97,.5);
    margin-right: 25px;
  }
`

class UserLinks extends Component {
  // getLinkElements() {
  //   const { userLinks } = this.props.config;
  //   const { labeled } = this.props;
  //   return userLinks.map(link => (
  //     <button key={link.label} href={link.url}>
  //       {labeled ? link.label : ""}
  //     </button>
  //   ));
  // }
  render() {
    // const { userLinks } = this.props.config;
    // if (!userLinks) {
      // return null;
    // }
    return (
      <SocialWrapper>
        <FaFacebook size={20} />
        <FaTwitter size={20} />
        <FaEnvelope size={20} />
        <FaInstagram size={20} />
      </SocialWrapper>
    );
  }
}

export default UserLinks;
