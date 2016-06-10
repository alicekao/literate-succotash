import React from 'react';
import SearchBar from './SearchBar.jsx';

const NavBar = (props) => {
  return (
    <div>
      <h1>Sound</h1>
      <SearchBar onSubmit={props.onSearch}/>
    </div>
  );
};

export default NavBar;
