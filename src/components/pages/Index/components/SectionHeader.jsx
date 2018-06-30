import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import styled from "styled-components";

const SectionHeader = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`
const SectionTitle = styled.h3`
  color: #637cd5;
  font-size: 3rem;
  font-weight: 400;
  margin: 0 0 10px;
`
const SectionSubTitle = styled.p`
  line-height: 1.7;
`
const propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired
};
class SectionHeaderComponent extends Component {
  render() {
    const { title, subTitle } = this.props;
    return (
      <SectionHeader>
        <SectionTitle>{title}</SectionTitle>
        <SectionSubTitle>{subTitle}</SectionSubTitle>
      </SectionHeader>
    );
  }
}
SectionHeaderComponent.propTypes = propTypes;
export default SectionHeaderComponent;