// Importing React since we are using React.
import React, { Component } from 'react';
// Importing UI components from rebass.
import { Container, Column, Row, Header, Panel, Subhead, Box, Heading, Divider, Text, Flex } from 'rebass';
// Import AboutAuthor component
import AboutAuthor from '../../components/AboutAuthor';
// Import AboutBlog component
import AboutBlog from '../../components/AboutBlog';


class Home extends Component {
  render() {
    return [
      <div className="main-content-section">

      </div>
    ];
  }
}

// Exporting the Home component so that the App.js file can render the Home page.
export default Home;