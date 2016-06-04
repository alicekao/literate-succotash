import React from 'react';
import ReactDOM from 'react-dom'

import NavBar from './NavBar.jsx';
import MusicTile from './MusicTile.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <h1>In app</h1>
        <MusicTile />
      </div>
    );
  }
};

ReactDOM.render(
  <App />, document.getElementById('app')
);
