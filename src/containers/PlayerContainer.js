import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions';

import SongDetails from '../components/SongDetails';
import { Jumbotron, Button, ButtonGroup, Glyphicon } from 'react-bootstrap';

class Player extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    const { playlist, currSong, actions } = prevProps;
    const newPlaylist = this.props.playlist;
    
    if (playlist.length === 0 && !currSong) {
      actions.playSong(newPlaylist[0]);
    }
  }


  renderPlayPauseBtn() {
    if (this.props.isPlaying) {
      return (
        <Button onClick={this.props.actions.pauseSong}>
          <Glyphicon glyph="pause"></Glyphicon>
        </Button>
      );
    }
    return (
      <Button onClick={this.props.actions.resumePlay}>
        <Glyphicon glyph="play"></Glyphicon>
      </Button>
    );
  }

  isNextValid() {
    const { playlist, currSong } = this.props;
    return (this.findIndexById(currSong, playlist) === playlist.length - 1) ? false : true;
  }

  isPrevValid() {
    const { playlist, currSong } = this.props;
    return (this.findIndexById(currSong, playlist) === 0) ? false : true;
  }

  findIndexById(item, arr) {
    if (!item) return null;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].id === item.id) {
        return i;
      }
    }
    return null;
  }

  onNavClick(toWhere) {
    const { currSong, playlist } = this.props;
    const idx = this.findIndexById(currSong, playlist);
    console.log('index is: ', idx);
    if (toWhere === 'next') {
      this.props.actions.playSong(playlist[idx+1]);
    } else {
      this.props.actions.playSong(playlist[idx-1]);
    }
  }

  render() {
    const { currSong, playlist } = this.props;
    const { pauseSong } = this.props.actions;

    return (
      <Jumbotron id="player">
        <SongDetails currSong={currSong}/>
        <ButtonGroup>
          <Button
            onClick={() => this.onNavClick('prev')}
            disabled={!this.isPrevValid()}>
            <Glyphicon glyph="backward"></Glyphicon>
          </Button>
          {this.renderPlayPauseBtn() }
          <Button
            onClick={() => this.onNavClick('next')}
            disabled={!this.isNextValid()}>
            <Glyphicon glyph="forward"></Glyphicon>
          </Button>
        </ButtonGroup>
      </Jumbotron>
    );
  }
};

const mapStateToProps = state => ({
  currSong: state.playlist.currSong,
  playlist: state.playlist.songList,
  isPlaying: state.playlist.isPlaying,
  player: state.playlist.player
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Player);
