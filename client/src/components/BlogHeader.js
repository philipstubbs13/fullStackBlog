// Import react.
import React, { Component } from 'react';
// Import components from rebass
import { Toolbar, NavLink, Text, Container } from 'rebass'

class BlogHeader extends Component {
  render() {
    return (
      <Toolbar bg='#001F54' className="navbar">
          <Container>
          <NavLink fontSize={40} py={4} color="white">
             Insomniac Coder
          </NavLink>
        </Container>
      </Toolbar>
    );
  }
}

export default BlogHeader;