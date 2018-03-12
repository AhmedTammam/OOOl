import React, { Component } from 'react';


class Tellstory extends React.Component {
  render () {
    return (
      <div className="row d-sm-block">
        <div className="card w-100 tell-story">
          <div className="card-body">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Tell Your Story" aria-label="Recipient's username" aria-describedby="basic-addon2" />
              <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button" onClick="document.getElementById('input').click();"><i className="fa fa-images"></i>
                  <input id="input" type="file" />
                </button>
                <button className="btn btn-outline-secondary" type="button"><i className="fa fa-paper-plane"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Tellstory;
