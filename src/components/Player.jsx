import React from 'react';
import SongDetails from './SongDetails.jsx';
import { Jumbotron, Button, ButtonGroup } from 'react-bootstrap';

export default class Player extends React.Component {
  render() {
    return (
      <Jumbotron id="player" className = "container text-center col-md-10 col-md-offset-2">
        <SongDetails currentSong={this.props.currentSong}/>
        <ButtonGroup>
          <Button onClick={() => this.props.playPrev()}>
            <span className="glyphicon glyphicon-backward"></span>
          </Button>
          <Button onClick={() => this.props.togglePlay()}>
            <span className="glyphicon glyphicon-pause"></span>
          </Button>
          <Button onClick={() => this.props.playNext()}>
            <span className="glyphicon glyphicon-forward"></span>
          </Button>
        </ButtonGroup>
      </Jumbotron>
    );
  }
}
