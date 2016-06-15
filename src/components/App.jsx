import React from 'react';

import NavBar from './NavBar.jsx';
import MusicTileContainer from './MusicTileContainer.jsx';
import Player from './Player.jsx';
import Playlist from './Playlist.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      songs: [],
      currentSongId: null,
      player: null,
      isPlaying: false,
      queue: [],
      currentQueueI: 0
    };
    this.onSearch = this.onSearch.bind(this);
    this.enqueue = this.enqueue.bind(this);
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
      console.log('response from search is: ', this.state.songs)
    });
  }

  enqueue(song) {
    let newQueue = this.state.queue.concat([song]);
    this.setState({queue: newQueue}, () => {
    this.playQueue();
    });
  }

  playQueue() {
    if (this.state.queue.length > 0) {
      this.playTrack(this.state.queue[this.state.currentQueueI]);
    }
  }

  playTrack(song) {
    return SC.stream(`/tracks/${song.id}`).then(player => {
      if (this.state.player) {
        this.state.player.pause();
      }
      this.setState({player: player, currentSongId: song.id, isPlaying: true});
      player.play();
      window.player = player;
    }).catch(() => console.log(arguments))
  }

  findSongById(id) {
    for (var j=0; j<this.state.queue.length; j++) {
      if (this.state.queue[j].id === id) {
        return j;
      }
    }
  }

  playNext() {
    if (this.state.player) {
      this.state.currentQueueI++;
      if (this.state.currentQueueI >= this.state.queue.length) {
        this.stopPlayer();
      } else {
        this.playQueue();
      }
    }
  }

  playPrev() {
    if (this.state.currentQueueI) {
      console.log('currentqueuei is', this.state.currentQueueI);
      this.state.currentQueueI--;
      playQueue();
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
        <Playlist queue={this.state.queue}/>
        <Player
          currentSong={this.state.queue[this.state.currentQueueI]}
          playNext={this.playNext}
          playPrev={this.playPrev}
          togglePlay={this.togglePlayPause.bind(this)}/>
        <MusicTileContainer
          enqueue={this.enqueue}
          searchResultList={this.state.songs}/>
      </div>
    );
  }
};

export default App;
