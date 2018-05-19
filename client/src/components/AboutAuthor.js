// Importing React since we are using React.
import React, { Component } from 'react';
// Importing UI components from rebass.
import { Box, Heading, Text } from 'rebass';


class AboutAuthor extends Component {
  render() {
    return [
      <Box mt={4}>
        <Heading
          is='h3'
         children="Hi there, I'm Phil"
        />
        <Text fontSize={18} pt={2}>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.The point of using Lorem Ipsum is that it has a more - or - less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
        </Text>
      </Box>
    ];
  }
}

// Exporting the AboutAuthor component so that the App.js file can render it.
export default AboutAuthor;