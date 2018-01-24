import React, { Component } from 'react';
import PostListing from '../../blog-ui/PostListing/PostListing';
import './Blog.css';

class Blog extends Component {
  render() {
    return (
      <div className="about">
        <h1>Edit Blog component( components/pages/blog.jsx) or pages/blog.jsx to include your information.</h1>
        <PostListing postEdges={this.props.postEdges} />
      </div>
    );
  }
}

export default Blog;
