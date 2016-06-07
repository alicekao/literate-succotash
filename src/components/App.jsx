import React from 'react';

import NavBar from './NavBar.jsx';
import MusicTile from './MusicTile.jsx';

class App extends React.Component {
  render() {
    return (
      <div className="main">
        <NavBar />
        <h1>In app</h1>
        <MusicTile />
      </div>
    );
  }
};

export default App;
