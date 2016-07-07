import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions';

import Sidebar from './Sidebar';
import NavBar from '../components/NavBar';
import Main from '../components/Main';

class App extends React.Component {
  render() {
    
    const { songs } = this.props;
    return (
      <div>
        <NavBar />
        <Sidebar />
        <Main />
      </div>
    );
  }
}

App.propTypes = {
  songs: PropTypes.array.isRequired,
  genre: PropTypes.string
}

// How to transform current redux store state into props
const mapStateToProps = (state) => ({
    songs: state.songs.songs
});

// Receives dispatch method and returns cb props that you want to inject into this component
// Takes sotre dispatch as first param
const mapDispatchToProps = (dispatch) => ({
    //bindactioncreators automatically binds many action creators to a dispatch fn
    actions: bindActionCreators(Actions, dispatch)
});

// Connect generates a container component from a presentational component and calculates the props based on the merged objs from mapStateToProps, mapDispatchToProps & its own props
export default connect(mapStateToProps, mapDispatchToProps)(App);