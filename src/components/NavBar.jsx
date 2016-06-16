import React from 'react';
import SearchBar from './SearchBar.jsx';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const NavBar = (props) => {
  return (
    <Navbar className="navbar navbar-default navbar-static-top">
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">Sound</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Navbar.Form pullRight>
          <SearchBar onSubmit={props.onSearch}/>
      </Navbar.Form>
    </Navbar>
  );
};

export default NavBar;
