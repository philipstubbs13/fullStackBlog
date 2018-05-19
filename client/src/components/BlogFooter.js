// Import react.
import React, { Component } from 'react';
// Import components from rebass
import { Panel, Footer, Heading } from 'rebass'

class BlogFooter extends Component {
  render() {
    return (
      <Panel.Footer bg='dodgerblue' py={5}>
        <Heading
          is='h2'
          children='fullStackBlog'
          color='white'
        />
        <p>
          &copy; Copyright 2018 Phil Stubbs
        </p>
      </Panel.Footer>
    );
  }
}

export default BlogFooter;