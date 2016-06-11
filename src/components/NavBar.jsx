import React from 'react';
import SearchBar from './SearchBar.jsx';

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-default navbar-static-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand">Sound</a>
        </div>
        <SearchBar onSubmit={props.onSearch}/>
      </div>
    </nav>
  );
};

export default NavBar;
