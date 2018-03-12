import React, { Component } from 'react';

import Timeline from './Timeline/Timeline';
import Chat from './chat/Chat';

class Content extends React.Component {
  render () {
    return (
      <section className="content">
        <div className="container">
          <div className="row">
            <Timeline />
            <Chat />
          </div>
        </div>
      </section>
    );
  }
}

export default Content;
