import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions';

import SongDetails from '../components/SongDetails';
import { Jumbotron, Button, ButtonGroup, Glyphicon } from 'react-bootstrap';

class Player extends React.Component {
  render() {
    const { currSong } = this.props;
    const { nextSong, pauseSong } = this.props.actions;
    return (
      <Jumbotron>
        <SongDetails currentSong={currSong}/>
        <ButtonGroup>
          <Button>
            <Glyphicon glyph="backward"></Glyphicon>
          </Button>
          <Button onClick={pauseSong}>
            <Glyphicon glyph="pause"></Glyphicon>
          </Button>
          <Button>
            <Glyphicon glyph="forward"></Glyphicon>
          </Button>
        </ButtonGroup>
      </Jumbotron>
    );
  }
};

const mapStateToProps = state => ({
  currSong: state.songs.currSong
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
