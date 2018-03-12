import React, { Component } from 'react';



class Post extends React.Component {
  render () {
    return (
      <div className="card-body">
        <div className="media">
          <img className="mr-3 rounded-circle" src="https://placehold.it/60x60" alt="Generic placeholder image" />
          <div className="media-body">
            <h5 className="mt-0">Person</h5>
            <p className="text-justify">Aenean lacinia bibendum nulla sed consectetur. Vestibulum id ligula porta felis euismod semper. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
            <img className="mr-3 w-100" src="https://placehold.it/200x200" alt="Generic placeholder image" />
            <div className="input-group mt-2">
              <input type="text" className="form-control" placeholder="Leave Comment" aria-label="Recipient's username" aria-describedby="basic-addon2" />
              <div className="input-group-append">
                <div className="nav-item dropdown my-0">
                  <button className="btn btn-outline-secondary dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fa fa-paper-plane"></i>
                  </button>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Comment</a>
                    <a className="dropdown-item" href="#">Comment anonymous</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="media mt-3">
              <img className="mr-3 rounded-circle" src="https://placehold.it/50x50" alt="Generic placeholder image" />
              <div className="media-body">
                <h5 className="mt-0">Person</h5>
                <p className="d-inline">Cras sit amet nibh libero,</p>
                <button className="btn btn-outline-secondary float-right"><i className="fa fa-comments"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
