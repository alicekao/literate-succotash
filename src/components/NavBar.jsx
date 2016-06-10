import React from 'react';
import SearchBar from './SearchBar.jsx';

const NavBar = (props) => {
  return (
    <div>
      <p>This is a navbar</p>
      <SearchBar onSubmit={props.onSearch}/>
    </div>
  );
};

export default NavBar;
