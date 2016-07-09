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

  onSearchClick() {
    this.props.fetchSongs(this.state.term);
    // requestSongs(this.state.term);
    this.setState({term: ''});
  }

  render() {
    let input;
    return (
      <Navbar.Form onSubmit={()=>console.log('hi')} pullRight>
        <FormGroup>
          <input
            type="text"
            placeholder="Search"
            onChange={this.onInputChange}
            value={this.state.term}>
          </input>
        </FormGroup>
        <Button
          type="submit"
          bsStyle="success"
          onClick={() => {
            this.onSearchClick();
          } }
          >
          <Glyphicon glyph="search"></Glyphicon>
        </Button>
      </Navbar.Form>
    );
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchSongs }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar);
