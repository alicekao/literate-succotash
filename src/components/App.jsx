import React from 'react';

import NavBar from './NavBar.jsx';
import MusicTileContainer from './MusicTileContainer.jsx';
import Player from './Player.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      songs: [],
      currentSongIndex: null,
      player: null,
      isPlaying: false
    };
    this.onSearch = this.onSearch.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    // this.playNext = this.playNext.bind(this);
    // this.findIndexById = this.findIndexById.bind(this);
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
    this.playTrack(id);
  }

  playTrack(trackID) {
    SC.stream(`/tracks/${trackID}`).then(player => {
      player.play();
      this.setState({player: player, currentSongIndex: this.findIndexById(trackID), isPlaying: true});
      window.player = player;
    });
  }

  findIndexById(id) {
    console.log('our state is', this.state.songs)
    for (var j=0; j<this.state.songs.length; j++) {
      if (this.state.songs[j].id === id) {
        console.log('index in helperfn is ', j);
        return j;
      }
    }
  }

  playNext() {
    let newIndex = this.state.currentSongIndex;
    if (++newIndex >= this.state.songs.length) {
      console.log('stopped');
      this.state.player.pause();
      this.setState({currentSongIndex: null, player: null, isPlaying: false});
    } else {
      this.handlePlay(this.state.songs[newIndex]['id']);
    }
  }

  togglePlayPause() {
    this.state.isPlaying = !this.state.isPlaying;
    if (this.state.isPlaying) {
      this.state.player.play();
    } else {
      this.state.player.pause();
    }
  }

  render() {
    return (
      <div className="main">
        <NavBar onSearch={this.onSearch}/>
        <MusicTileContainer
          handlePlay={this.handlePlay}
          searchResultList={this.state.songs}/>
        <Player
          songToPlayNext={this.playNext.bind(this)}
          togglePlay={this.togglePlayPause.bind(this)}/>
      </div>
    );
  }
};

export default App;
