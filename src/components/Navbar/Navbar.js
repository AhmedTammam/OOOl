import React, { Component } from 'react';

import Search from './search'

class Navbar extends React.Component {
  render () {
    return (
      <div>
      <section>
        <nav className="navbar navbar-expand-lg navbar-bg fixed-top">
          <div className="container">
            <a className="navbar-brand" href="#">OOOL</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className=""><i className="fa fa-align-justify fa-lg text-light"></i></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <a className="nav-link d-none d-sm-block" href="profile.html">Profile</a>
                </li>
                <li className="nav-item d-block d-sm-none">
                  <a className="nav-link" href="#">Setting</a>
                </li>
                <li className="nav-item dropdown d-block d-sm-none">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Sort By <i className="fa fa-chevron-circle-down fa-sm"></i>
                  </a>
                  <div className="dropdown-menu navmenu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item navitem" href="#">Post</a>
                    <a className="dropdown-item navitem" href="#">comment</a>
                  </div>
                </li>
              </ul>
              <Search />
              <button className="btn btn-setting d-none d-sm-block d-none d-sm-block"><i className="fa fa-cog fa-lg"></i></button>
              <div className="nav-item dropdown my-0 d-none d-sm-block">
                <button className="btn btn-setting nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="fa fa-chevron-circle-down fa-lg d-none d-sm-block"></i>
                </button>
                <div className="dropdown-menu navmenu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item navitem" href="#">Story</a>
                  <a className="dropdown-item navitem" href="#">comment</a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </section>
      <form className="form-inline col-md-7 mr-auto col-xs-12 contr d-block d-sm-none mt-3">
        <input className="form-control col-md-12 col-xs-12 search" type="search" placeholder="Search" aria-label="Search" />
      </form>
      </div>
    );
  }
}

export default Navbar;
