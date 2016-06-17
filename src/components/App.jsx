import React from 'react';

import NavBar from './NavBar.jsx';
import MusicTileContainer from './MusicTileContainer.jsx';
import Player from './Player.jsx';
import Playlist from './Playlist.jsx';
import { Grid, Row, Col } from 'react-bootstrap';

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
    this.selectGenre = this.selectGenre.bind(this);
  }

  componentDidMount() {
    this.searchSCByGenre('jazz');
  }

  enqueue(song) {
    let newQueue = this.state.queue.concat([song]);
    this.setState({queue: newQueue}, () => {
    this.playQueue();
    });
  }

  findSongById(id) {
    for (var j=0; j<this.state.queue.length; j++) {
      if (this.state.queue[j].id === id) {
        return j;
      }
    }
  }

  onSearch(searchTerm) {
    this.searchSCByQuery(searchTerm);
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

  searchSCByGenre(genre) {
    return SC.get('/tracks', {
      genres: genre
    }).then(tracks => {
      this.setState({songs: this.sortByPopularity(tracks)});
    });
  }

  searchSCByQuery(query) {
    return SC.get('/tracks', {
      q: query
    }).then(tracks => {
      this.setState({songs: this.sortByPopularity(tracks)});
      console.log('response from search is: ', this.state.songs)
    });
  }

  sortByPopularity(songArr) {
    return songArr.sort((a,b) => {
      return b.playback_count - a.playback_count;
    });
  }

  selectGenre(selectedTab) {
    this.searchSCByGenre(selectedTab);
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
      <Grid className="main">
        <NavBar
          selectGenre={this.selectGenre}
          onSearch={this.onSearch}
        />
        <Row>
          <Col md={2}>
            <Playlist queue={this.state.queue}/>
          </Col>
          <Col md={10}>
            <Row>
              <Player
                currentSong={this.state.queue[this.state.currentQueueI]}
                playNext={this.playNext}
                playPrev={this.playPrev}
                togglePlay={this.togglePlayPause.bind(this)}/
              >
            </Row>
            <Row>
              <MusicTileContainer
                enqueue={this.enqueue}
                searchResultList={this.state.songs}
              />
            </Row>
          </Col>
        </Row>
      </Grid>
    );
  }
};

export default App;
