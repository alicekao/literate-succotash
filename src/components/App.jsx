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
    this.playNext = this.playNext.bind(this);
    this.playPrev = this.playPrev.bind(this);
    // this.findIndexById = this.findIndexById.bind(this);
  }

  componentDidMount() {
    this.searchSoundcloud('louis the child');
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
    return SC.stream(`/tracks/${trackID}`).then(player => {
      if (this.state.player) {
        this.state.player.pause();
      }
      this.setState({player: player, currentSongIndex: this.findIndexById(trackID), isPlaying: true});
      player.play();
      window.player = player;
    }).catch(() => console.log(arguments))
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
      this.stopPlayer();
    } else {
      this.handlePlay(this.state.songs[newIndex]['id']);
    }
  }

  playPrev() {
    let newIndex = this.state.currentSongIndex;
    if (--newIndex < 0) {
      console.log('stopped');
      this.stopPlayer();
    } else {
      this.handlePlay(this.state.songs[newIndex]['id']);
    }
  }

  stopPlayer() {
    if (this.state.player) {
      this.state.player.pause();
    }
    this.setState({
      currentSongIndex: null,
      player: null,
      isPlaying: false
    });
  }

  togglePlayPause() {
    this.state.isPlaying = !this.state.isPlaying;
    if (this.state.isPlaying && this.state.player) {
      this.state.player.play();
    } else if (this.state.player) {
      this.state.player.pause();
    }
  }

  render() {
    return (
      <div className="container main">
        <NavBar onSearch={this.onSearch}/>
        <Player
          currentSong={this.state.songs[this.state.currentSongIndex]}
          playNext={this.playNext}
          playPrev={this.playPrev}
          togglePlay={this.togglePlayPause.bind(this)}/>
        <MusicTileContainer
          handlePlay={this.handlePlay}
          searchResultList={this.state.songs}/>
      </div>
    );
  }
};

export default App;
