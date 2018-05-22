// Import react.
import React, { Component } from 'react';
// Import components from rebass
import { Panel, Footer, Heading, Text, Container } from 'rebass'

class BlogFooter extends Component {
  render() {
    return (
      <Panel.Footer bg='#001F54' py={4} className="footer">
        <Container>
          <Heading
            is='h2'
            children='Insomniac Coder'
            color='white'
          />
          <Text fontSize={20} pt={2} color='white'>
            &copy; Copyright 2018 
          </Text>
        </Container>
      </Panel.Footer>
    );
  }
}

export default BlogFooter;