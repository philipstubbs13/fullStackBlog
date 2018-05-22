// Import react.
import React, { Component } from 'react';
// Import components from rebass
import { Panel, Footer, Heading, Text, Container } from 'rebass'

class BlogFooter extends Component {
  render() {
    return (
      <Panel.Footer bg='#B7E0E5' py={4} className="footer">
        <Container>
          <Heading
            is='h2'
            children='Insomniac Coder'
            color='black'
          />
          <Text fontSize={20} pt={2} color='black'>
            &copy; Copyright 2018 Phil Stubbs
          </Text>
        </Container>
      </Panel.Footer>
    );
  }
}

export default BlogFooter;