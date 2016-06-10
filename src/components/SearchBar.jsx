import React from 'react';

export default class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      searchTerm: ''
    };
  }

  handleChange(evt) {
    this.setState({searchTerm: evt.target.value});
  }

  render() {
    return (
      <form className="col-md-4 col-md-offset-8 form-inline">
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
          onClick={(e) => {
            e.preventDefault();
            this.props.onSubmit(this.state.searchTerm);}}>
            Go!
        </button>
      </form>
    );
  }
}
