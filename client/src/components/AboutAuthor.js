// Importing React since we are using React.
import React, { Component } from 'react';
// Importing UI components from rebass.
import { Box, Heading, Text, Panel, Header } from 'rebass';


class AboutAuthor extends Component {
  render() {
    return [
      <Panel color='black' className="blogPostCard">
        <Panel.Header
          color='white'
          bg='#001F54'
          fontSize={28}
          px={4}>
          About the author
        </Panel.Header>
        <Box mx={4} my={2}>
          <Text fontSize={18} pt={2}>
            In 2017, I decided to chase after a dream and learn how to code. Ever since then, my life has been turned upside down. For me, learning how to code taught me how to think critically and solve problems creatively and quickly. There's nothing more satisfying than staying up all night to figure out a bug in your code and figure out a solution at 3:30 in the morning (hence, the name of this blog). 
          </Text>
          <Text fontSize={18} pt={2}>
          With learning how to code comes frustration, energy drinks, and many late night coding sessions. But, in my opinion, the challenges are what make coding so exciting and wanting me coming back for more. There are always new tools and technologies to learn. There's never a dull moment in learning how to code or trying to figure out a solution to a complex problem. I started this website to share my passion. I hope my experiences in learning how to code will help and inspire you on your coding journey.
          </Text>
        </Box>
      </Panel>
    ];
  }
}

// Exporting the AboutAuthor component so that the App.js file can render it.
export default AboutAuthor;