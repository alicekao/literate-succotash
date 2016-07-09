import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSongs } from '../actions';
import { Button, Glyphicon, Form, FormGroup, FormControl, Navbar } from 'react-bootstrap';


class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
    this.onInputChange = this.onInputChange.bind(this)
    this.onSearchClick = this.onSearchClick.bind(this)
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onSearchClick(e) {
    e.preventDefault();
    this.props.fetchSongs(this.state.term);
    this.setState({term: ''});
  }

  render() {
    let input;
    return (
      <Form onSubmit={this.onSearchClick}
      inline>
        <FormGroup>
        <FormControl
        type="text"
        placeholder="Search"
        onChange={this.onInputChange}
        value={this.state.term} />
          
        </FormGroup>
        <Button
          type="submit"
          bsStyle="success"
          >
          <Glyphicon glyph="search"></Glyphicon>
        </Button>
      </Form>
    );
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchSongs }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar);
