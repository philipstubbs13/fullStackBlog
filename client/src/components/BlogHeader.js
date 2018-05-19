// Import react.
import React, { Component } from 'react';
// Import components from rebass
import { Toolbar, NavLink } from 'rebass'

class BlogHeader extends Component {
  render() {
    return (
      <Toolbar bg='dodgerblue'>
          <NavLink fontSize={30} py={4}>
            fullStackBlog
          </NavLink>
      </Toolbar>
    );
  }
}

export default BlogHeader;