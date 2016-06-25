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
    return (
      <div>
        <NavBar />
        <Sidebar />
        <Main />
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

function mapDispatchToProps(dispatch) {
  return {
    //bindactioncreators automatically binds many action creators to a dispatch fn
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);