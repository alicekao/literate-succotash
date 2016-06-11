import React from 'react';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(evt) {
    this.setState({searchTerm: evt.target.value});
  }

  handleClick(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.searchTerm);
    this.setState({searchTerm: ''});
  }

  render() {
    return (
      <form className="navbar-form navbar-right">
        <div className="form-group">
          <input
            placeholder="Search"
            className="form-control"
            onChange={this.handleChange.bind(this)}
            value={this.state.searchTerm}
          />
        </div>
        <button
          type="submit"
          className="btn btn-default"
          onClick={(e) => {this.handleClick(e)}}>
            <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
        </button>
      </form>
    );
  }
}
