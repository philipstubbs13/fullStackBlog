// Import react.
import React, { Component } from 'react';
// Import components from rebass
import { Toolbar, NavLink, Container } from 'rebass'

class BlogHeader extends Component {
  render() {
    return (
      <Toolbar bg='ghostwhite' className="navbar">
          <Container>
          <NavLink fontSize={30} py={4} color="black">
            fullStackBlog
          </NavLink>
        </Container>
      </Toolbar>
    );
  }
}

export default BlogHeader;