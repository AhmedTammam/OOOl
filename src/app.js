import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import ReactDOM from 'react-dom';

import Home from './components/Home';

class App extends React.Component {
  render () {
    return (
      <Router>
        <Home />
      </Router>
    );
  }
}



ReactDOM.render(<App />, document.getElementById('app'));
