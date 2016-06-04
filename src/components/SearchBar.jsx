import React from 'react';

export default class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <input placeholder="Search" />
        <button>Go!</button>
      </div>
    );
  }
}
