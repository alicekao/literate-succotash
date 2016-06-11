import React from 'react';
import SongDetails from './SongDetails.jsx';

export default class Player extends React.Component {
  render() {
    return (
      <div className = "container text-center">
        <SongDetails currentSong={this.props.currentSong}/>
        <div className="btn-group btn-group-lg">
          <button className="btn btn-default" onClick={() => this.props.playPrev()}>
            <span className="glyphicon glyphicon-backward"></span>
          </button>
          <button onClick={() => this.props.togglePlay()} className="btn btn-default">
            <span className="glyphicon glyphicon-pause"></span>
          </button>
          <button onClick={() => this.props.playNext()} className="btn btn-default">
            <span className="glyphicon glyphicon-forward"></span>
          </button>
        </div>
      </div>
    );
  }
}
