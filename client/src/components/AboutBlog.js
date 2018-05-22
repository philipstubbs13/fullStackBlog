// Importing React since we are using React.
import React, { Component } from 'react';
// Importing UI components from rebass.
import { Box, Heading, Text } from 'rebass';


class AboutBlog extends Component {
  render() {
    return [
      <Box mt={4}>
        <Heading
          is='h3'
         children="About this blog"
        />
        <Text fontSize={18} pt={2}>
          I created this blog to combine two of my passions, coding and writing. Specifically, I started this blog to jot down some of my thoughts and ideas about the many challenges of learning how to code and about the interesting, late night adventures of being a full stack web developer. 
        </Text>
        <Text fontSize={18} pt={2}>
        My goal in writing this blog is to engage and build a community of developers in the Twin Cities by highlighting coding events in the Twin Cities area, sharing my experiences of learning how to code from the University of Minnesota full stack web development program, writing reviews about some of the courses I have taken, and going through some of the projects I am currently working on in my free time.
        </Text>
      </Box>
    ];
  }
}

// Exporting the AboutBlog component so that the App.js file can render it.
export default AboutBlog;