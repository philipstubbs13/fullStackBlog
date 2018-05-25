// Importing React since we are using React.
import React, { Component } from 'react';
// Importing UI components from material-ui
import Grid from '@material-ui/core/Grid';
// Import AboutAuthor component
import AboutAuthor from '../../components/AboutAuthor';
// Import AboutBlog component
import AboutBlog from '../../components/AboutBlog';
import {Container} from 'rebass';


class Home extends Component {
  render() {
    return [
      <div className="main-content-section" style={{ padding: 70 }}>
        <Grid container spacing={24} mx={4}>
          <Grid item xs={12} sm={12} md={8}>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <AboutAuthor />
            <AboutBlog />
          </Grid>
        </Grid>
      </div>
    ];
  }
}

// Exporting the Home component so that the App.js file can render the Home page.
export default Home;