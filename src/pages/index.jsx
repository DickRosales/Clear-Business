import React from 'react';
import Helmet from 'react-helmet';
import * as PropTypes from 'prop-types';

import config from '../../data/SiteConfig';
import Index from '../components/pages/Index/Index';

const propTypes = {
  data: PropTypes.object.isRequired
};
class IndexPage extends React.Component {
  render() {
    const { content, images } = this.props.data;
    return (
      <div className="index-container">
        <Helmet title={config.siteTitle} />
        <Index content={content} images={images} />
      </div>
    );
  }
}

IndexPage.propTypes = propTypes;

export default IndexPage;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query PageQuery {
    content: contentfulHome {
      heroTitle
      heroSubTitle
      heroSubParagraph
      heroLink
    }
    images: contentfulAsset(id: { eq: "c20VWyXOBSQWs2EGcmku0Ck" }) {
      title
      id
      sizes(maxHeight: 500) {
        sizes
        src
        srcSet
      }
    }
  }
`;
