// Importing React since we are using React.
import React, { Component } from 'react';
// Importing UI components from rebass.
import { Sticky, Heading } from 'rebass';


class AboutAuthor extends Component {
  render() {
    return [
      <Sticky mt={4} top={0} right={0} bottom={0}>
        <Heading
          is='h3'
         children="Hi there, I'm Phil"
        />
      </Sticky>
    ];
  }
}

// Exporting the AboutAuthor component so that the App.js file can render it.
export default AboutAuthor;