import React from 'react';
import SearchBar from './SearchBar';
import NavLink from './NavLink';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const generateNavTab = (name) => {
  return (
    <NavItem key={name} eventKey={name.toLowerCase()}>
    {name}
    </NavItem>
  )
};

const genreArr = ['Jazz', 'Hip hop', 'Pop', 'Electronic', 'Rap', 'Country'];

const NavBar = () => {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">Sound</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavLink genre='Jazz'/>
        <NavLink genre='Hip hop'/>
        <NavLink genre='Pop'/>
        <NavLink genre='Electronic'/>
        <NavLink genre='Rap'/>
        <NavLink genre='Country'/>
      </Nav>
      <SearchBar />
    </Navbar>
  );
}

export default NavBar
// export default class NavBar extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { currentGenre: 'jazz' };
//     this.selectGenre = this.selectGenre.bind(this);
//   }

//   selectGenre(newGenre) {
//     this.props.selectGenre(newGenre);
//     this.setState({ currentGenre: newGenre });
//   }

//   render() {
//     return (
//       <Navbar>
//         <Navbar.Header>
//           <Navbar.Brand>
//             <a href="#">Soundd</a>
//           </Navbar.Brand>
//         </Navbar.Header>
//         <Nav
//           bsStyle="pills"
//           activeKey={this.state.currentGenre}onSelect={this.selectGenre}
//           >
//           <NavItem eventKey={'jazz'}>Jazz</NavItem>
//           <NavItem eventKey={'hip hop'}>Hip Hop</NavItem>
//           <NavItem eventKey={'rap'}>Rap</NavItem>
//           <NavItem eventKey={'pop'}>Pop</NavItem>
//           <NavItem eventKey={'electronic'}>Electronic</NavItem>
//           <NavItem eventKey={'house'}>House</NavItem>
//           <NavItem eventKey={'classical'}>Classical</NavItem>
//         </Nav>
//         <SearchBar onSubmit={this.props.onSearch}/>
//       </Navbar>
//     );
//   }
// };