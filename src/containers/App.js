import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions';

import Songs from '../components/Songs';
import Sidebar from '../components/Sidebar';
import NavBar from '../components/NavBar';
import Main from '../components/Main';

class App extends React.Component {
  render() {
    const { changeGenre } = this.props.actions;
    const { songs, genre } = this.props;
    return (
      <div>
        <NavBar
        currGenre={ genre }
        changeGenre = {changeGenre} />
        <Sidebar />
        <Main />
        <Songs songs={songs} />
      </div>
    );
  }
}

App.propTypes = {
  songs: PropTypes.array.isRequired
}

// How to transform current redux store state into props
function mapStateToProps(state) {
  return {
    songs: state.songs,
    genre: state.genre
  };
}

// Receives dispatch method and returns cb props that you want to inject into this component
function mapDispatchToProps(dispatch) {
  return {
    //bindactioncreators automatically binds many action creators to a dispatch fn
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);