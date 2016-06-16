import React from 'react';
import SearchBar from './SearchBar.jsx';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentGenre: 'jazz'};
    this.selectGenre = this.selectGenre.bind(this);
  }

  selectGenre(newGenre) {
    this.props.selectGenre(newGenre);
    this.setState({ currentGenre: newGenre});
  }

  render() {
    return (
      <Navbar className="navbar navbar-default navbar-static-top">
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Sound</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav
          bsStyle="pills"
          activeKey={this.state.currentGenre}onSelect={this.selectGenre}
        >
          <NavItem eventKey={'jazz'}>Jazzcat</NavItem>
          <NavItem eventKey={'electronic'}>Light Yellow</NavItem>
          <NavItem eventKey={'hip hop'}>Poop</NavItem>
        </Nav>
        <Navbar.Form pullRight>
            <SearchBar onSubmit={this.props.onSearch}/>
        </Navbar.Form>
      </Navbar>
    );
  }
};