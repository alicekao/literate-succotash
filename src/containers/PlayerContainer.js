import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions';

import SongDetails from '../components/SongDetails';
import { Jumbotron, Button, ButtonGroup, Glyphicon } from 'react-bootstrap';

class Player extends React.Component {
  componentDidMount() {
    const { playlist, isPlaying } = this.props;
    const { playSong } = this.props.actions;

    this.onNextClick = this.onNextClick.bind(this);
    if (playlist.length > 0 && !isPlaying) {
      playSong(playlist[0]);
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

  findIndexById(item, arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].id === item.id) {
        return i;
      }
    }
  }

  onNextClick() {
    const { playlist } = this.props;
    if (this.findIndexById(this.props.currSong, this.props.playlist) < this.props.playlist.length) {
      console.log('can go to next!');
    }
  }

  render() {
    const { currSong, playlist } = this.props;
    const { playNext, pauseSong } = this.props.actions;

    return (
      <Jumbotron>
        <SongDetails currentSong={currSong}/>
        <ButtonGroup>
          <Button>
            <Glyphicon glyph="backward"></Glyphicon>
          </Button>
          {this.renderPlayPauseBtn()}
          <Button onClick={this.onNextClick}>
            <Glyphicon glyph="forward"></Glyphicon>
          </Button>
        </ButtonGroup>
      </Jumbotron>
    );
  }
};

const mapStateToProps = state => ({
  currSong: state.songs.currSong,
  playlist: state.playlist.songList,
  isPlaying: state.playlist.isPlaying,
  player: state.playlist.player
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Player);
// export default class Player extends React.Component {
//   render() {
//     return (
//       <Jumbotron id="player">
//         <SongDetails currentSong={this.props.currentSong}/>
//         <ButtonGroup>
//           <Button onClick={() => this.props.playPrev()}>
//             <Glyphicon glyph="backward"></Glyphicon>
//           </Button>
//           <Button onClick={() => this.props.togglePlay()}>
//             <Glyphicon glyph="pause"></Glyphicon>
//           </Button>
//           <Button onClick={() => this.props.playNext()}>
//             <Glyphicon glyph="forward"></Glyphicon>
//           </Button>
//         </ButtonGroup>
//       </Jumbotron>
//     );
//   }
// }
