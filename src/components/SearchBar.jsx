import React from 'react';
import { Button, Glyphicon, Form, FormGroup, FormControl, Navbar } from 'react-bootstrap';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(evt) {
    this.setState({ searchTerm: evt.target.value });
  }

  handleClick(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.searchTerm);
    this.setState({ searchTerm: '' });
  }

  render() {
    return (
      <Navbar.Form pullRight>
        <FormGroup>
          <FormControl
            type = "text"
            placeholder="Search"
            onChange={this.handleChange.bind(this) }
            value={this.state.searchTerm}
            />
        </FormGroup>
        <Button
          type="submit"
          bsStyle="success"
          onClick={(e) => { this.handleClick(e) } }>
          <Glyphicon glyph="search"></Glyphicon>
        </Button>
      </Navbar.Form>
    );
  }
}
