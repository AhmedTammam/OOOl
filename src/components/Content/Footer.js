import React, { Component } from 'react';



class Footer extends React.Component {
  render () {
    return (
      <div>
        <footer className="container d-block d-sm-none fixed-bottom bg-light">
          <div className="row justify-content-md-center">
            <div className="col-4 text-center"><button className="btn btn-outline-secondary" data-toggle="modal" data-target="#TellStory"><i className="fa fa-pencil-alt"></i></button></div>
            <div className="col-4 text-center"><button className="btn btn-outline-secondary"><i className="fa fa-user-circle"></i></button></div>
            <div className="col-4 text-center"><button className="btn btn-outline-secondary" data-toggle="modal" data-target="#Chat"><i className="fa fa-comments"></i></button></div>
          </div>
        </footer>



        <div className="modal fade" id="TellStory" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Tell Your Story</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <textarea type="text" className="form-control" placeholder="Tell Your Story" aria-label="Recipient's username" aria-describedby="basic-addon2"></textarea>
              </div>
              <div className="modal-footer">
                <div className="input-group-append">
                  <button id="xs-btn" className="btn btn-outline-secondary" type="button">
                    <i className="fa fa-images"></i>
                    <input id="xs-input" type="file" style={{display: "none"}}/>
                  </button>
                  <button className="btn btn-outline-secondary" type="button"><i className="fa fa-paper-plane"></i></button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade" id="Chat" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="chat-modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Your Latest Chat</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className=" modal-chat-list">
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
              </div>
              <div className="modal-footer">
                <input type="text" className="search w-100" placeholder="Search" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
