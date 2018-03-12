import React, { Component } from 'react';


class Chat extends React.Component {
  render () {
    return (
      <div className="col-md-3 aside col-xs-12 d-none d-sm-block">
        <div id="chat" className="card-header text-center">
          Your Latest Chat
        </div>
        <div className=" chat-list">
          <ul className="list-group list-group-flush scrollspy-example">
            <li className="list-group-item">
              <div className="media">
                <img className="mr-3 align-self-center" src="https://placehold.it/30x30" alt="Generic placeholder image" />
                <div className="media-body">
                  <h5 className="mt-0">Person</h5>
                </div>
              </div>
            </li>
            <li className="list-group-item">
              <div className="media">
                <img className="mr-3 align-self-center" src="https://placehold.it/30x30" alt="Generic placeholder image" />
                <div className="media-body">
                  <h5 className="mt-0">Person</h5>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="card-footer chat-footer col-md-3">
          <input type="text" className="col-md-12 search" />
        </div>
      </div>
    );
  }
}

export default Chat;
