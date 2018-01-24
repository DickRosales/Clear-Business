import React from 'react';
import Helmet from 'react-helmet';
import Blog from '../components/pages/Blog/Blog';
import SEO from '../components/blog-ui/SEO/SEO';
import config from '../../data/SiteConfig';

class BlogPage extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <div className="index-container">
        <Helmet title={config.siteTitle} />
        <SEO postEdges={postEdges} />
        <Blog postEdges={postEdges} />
      </div>
    );
  }
}

export default BlogPage;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(limit: 2000, sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;
