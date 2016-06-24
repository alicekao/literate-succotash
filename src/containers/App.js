import React from 'react';
import { combineReducers } from 'redux';
import { connect } from 'react-redux';
import Songs from '../components/Songs';

class App extends React.Component {
  render() {
    return (
      <div>
        In App
        <Songs songs={this.props.songs} />
      </div>
    );
  }
}

App.propTypes = {
  songs: PropTypes.array.isRequired
}

function mapStateToProps(state) {
  return {
    songs: state.songs
  };
}

export default connect(mapStateToProps)(App);