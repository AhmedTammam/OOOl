import React, { Component } from 'react';


class Search extends React.Component {
  render () {
    return (
      <form className="form-inline col-md-7 my-2 my-lg-0 mr-auto cont d-none d-sm-block">
        <input className="form-control col-md-12 search d-none d-sm-block" type="search" placeholder="Search" aria-label="Search" />
      </form>
    );
  }
}

export default Search;
