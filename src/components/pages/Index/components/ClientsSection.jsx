import React, { Component, Fragment } from 'react';
// import * as PropTypes from 'prop-types';

import SectionHeader from './SectionHeader'
import Clients from './Clients'
import Providers from './Providers'

// const propTypes = {
//   logo: PropTypes.string.isRequired
// };
class Services extends Component {
  render() {
    return (
      <Fragment>
        <SectionHeader title='Our Clients.' subTitle='How to get your music distributed with ClearDigital.' />
        <Clients />
        <Providers />
      </Fragment>
    );
  }
}

// Services.propTypes = propTypes;
export default Services;
