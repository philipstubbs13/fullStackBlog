// Import react.
import React, { Component } from 'react';
// Import components from rebass
import { Panel, Footer, Heading, Text } from 'rebass'

class BlogFooter extends Component {
  render() {
    return (
      <Panel.Footer bg='dodgerblue' py={5}>
        <Heading
          is='h2'
          children='fullStackBlog'
          color='white'
        />
        <Text fontSize={20} pt={2} color='white'>
          &copy; Copyright 2018 Phil Stubbs
        </Text>
      </Panel.Footer>
    );
  }
}

export default BlogFooter;