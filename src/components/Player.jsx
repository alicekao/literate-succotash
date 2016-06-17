import React from 'react';
import SongDetails from './SongDetails.jsx';
import { Jumbotron, Button, ButtonGroup, Glyphicon } from 'react-bootstrap';

export default class Player extends React.Component {
  render() {
    return (
      <Jumbotron id="player">
        <SongDetails currentSong={this.props.currentSong}/>
        <ButtonGroup>
          <Button onClick={() => this.props.playPrev()}>
            <Glyphicon glyph="backward"></Glyphicon>
          </Button>
          <Button onClick={() => this.props.togglePlay()}>
            <Glyphicon glyph="pause"></Glyphicon>
          </Button>
          <Button onClick={() => this.props.playNext()}>
            <Glyphicon glyph="forward"></Glyphicon>
          </Button>
        </ButtonGroup>
      </Jumbotron>
    );
  }
}
