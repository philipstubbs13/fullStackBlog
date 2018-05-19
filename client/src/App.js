import React, { Component } from 'react';
// Importing React Router to add page routes.
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import app components
import BlogHeader from './components/BlogHeader.js';
import BlogFooter from './components/BlogFooter.js';
// Importing Home page component.
import Home from './containers/Home';
// import App styling
import './App.css';
import { Provider } from 'rebass';

class App extends Component {
  render() {
    return (
      <Provider>
        <BlogHeader />
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          </div>
        </Router>
        <BlogFooter />
      </Provider>
    );
  }
}

export default App;
