import React from 'react';

import NavBar from './NavBar.jsx';
import MusicTile from './MusicTile.jsx';
import Player from './Player.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      songs: [],
      currentSong:null,
      player: null,
      isPlaying: false
    };
    this.onSearch = this.onSearch.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.pauseTrack = this.pauseTrack.bind(this);
    this.playTrack = this.playTrack.bind(this);
  }

  onSearch(searchTerm) {
    this.searchSoundcloud(searchTerm);
  }

  searchSoundcloud(query) {
    return SC.get('/tracks', {
      q: query
    }).then(tracks => {
      this.setState({songs: tracks});
      console.log(this.state.songs)
    });
  }

  handlePlay(id) {
    console.log(this, this.playTrack);
    this.playTrack(id);
  }

  pauseTrack() {
    this.state.player.pause();
    this.togglePlayPause;
  }

  playTrack(trackID) {
    SC.stream(`/tracks/${trackID}`).then(player => {
      player.play();
      this.setState({player: player, currentSong: trackID});
    });
  }

  togglePlayPause() {
    this.state.isPlaying = !this.state.isPlaying;
  }

  render() {
    return (
      <div className="main">
        <NavBar onSearch={this.onSearch}/>
        <h1 onClick={this.pauseTrack}>pause</h1>
        {this.state.songs.map(song => {
          return <MusicTile
            handlePlay={(id) => this.handlePlay(id)}
            key={song.id}
            data={song}/>
        })}
        <Player />
      </div>
    );
  }
};

export default App;
