import React from 'react';

export default class Player extends React.Component {
  render() {
    if (this.props.currentSong) {
      return (
        <div className = "row">
          <div className = "row">Title: {this.props.currentSong.title}</div>
          <div className = "row">Plays: {this.props.currentSong.playback_count}</div>
          <div className="row text-center">
            <div className=".col-md-2">
              <button onClick={() => this.props.playPrev()}>Previous</button>
            </div>
            <div className=".col-md-2">
              <button onClick={() => this.props.togglePlay()}>Pause/Play</button>
              </div>
            <div className=".col-md-2">
              <button onClick={() => this.props.playNext()}>Next</button>
            </div>
          </div>
        </div>
      );
    } else {
      return <div className = "row"></div>
    }
  }

}
