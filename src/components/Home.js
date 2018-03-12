import React, { Component } from 'react';

import Navbar from './navbar/Navbar';
import Content from './Content/Content';
import Footer from './Content/Footer';

class Home extends React.Component {
  render () {
    return (
      <div>
        <Navbar />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default Home;
