// Importing React since we are using React.
import React, { Component } from 'react';
// Importing UI components from rebass.
import { Container, Column, Row, Header, Panel, Subhead, Box, Heading, Divider, Text } from 'rebass';
// Import AboutAuthor component
import AboutAuthor from '../../components/AboutAuthor';
// Import AboutBlog component
import AboutBlog from '../../components/AboutBlog';


class Home extends Component {
  render() {
    return [
      <div className="main-content-section">
        <Container>
          <Row pt={5} mb="2">
            <Column width={1}>
            <Heading
              is='h1'
              children='Latest posts'
            />
            </Column>
          </Row>
          <Row>
            <Column width={ 2 / 3 }>
                <Box mt={4}>
                  <Heading
                    is='h3'
                    children='Blog post title 1'
                  />
                  <Text fontSize={20} pt={2}>
                    May 19, 2018
                  </Text>
                  <Text fontSize={18} pt={2}>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                  </Text>
                </Box>
                <Box mt={4}>
                  <Heading
                    is='h3'
                    children='Blog post title 2'
                  />
                  <Text fontSize={20} pt={2}>
                    May 18, 2018
                  </Text>
                  <Text fontSize={18} pt={2}>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                  </Text>
                </Box>
                <Box mt={4}>
                  <Heading
                    is='h3'
                    children='Blog post title 1'
                  />
                  <Text fontSize={20} pt={2}>
                    May 17, 2018
                  </Text>
                  <Text fontSize={18} pt={2}>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                  </Text>
                </Box>
                <Box mt={4}>
                  <Heading
                    is='h3'
                    children='Blog post title 1'
                  />
                  <Text fontSize={20} pt={2}>
                    May 16, 2018
                  </Text>
                  <Text fontSize={18} pt={2}>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                  </Text>
                </Box>
            </Column>

            <Column width={1 / 3 }>
              <AboutAuthor />
              <AboutBlog />
            </Column>
          </Row>
        </Container>
      </div>
    ];
  }
}

// Exporting the Home component so that the App.js file can render the Home page.
export default Home;