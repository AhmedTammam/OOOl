import React, { Component } from 'react';


import Post from './Post';

class Posts extends React.Component {
  render () {
    return (
      <div className="row">
        <div className="card w-100">
          <Post />
          <Post />
        </div>
      </div>
    );
  }
}

export default Posts;
