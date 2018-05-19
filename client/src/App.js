import React, { Component } from 'react';
// import app components
import BlogHeader from './components/BlogHeader.js';
import BlogFooter from './components/BlogFooter.js';
// import App styling
import './App.css';
import { Provider } from 'rebass';

class App extends Component {
  render() {
    return (
      <Provider>
        <BlogHeader />
        <p className="main-content-section">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <BlogFooter />
      </Provider>
    );
  }
}

export default App;
