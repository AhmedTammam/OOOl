import React, { Component } from 'react';

import Tellstory from './Tellstory';
import Posts from './Posts'

class Timeline extends React.Component {
  render () {
    return (
      <div className="col-md-6 offset-md-3 col-sm-12">
        <Tellstory />
        <Posts />
      </div>
    );
  }
}

export default Timeline;
