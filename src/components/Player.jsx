import React from 'react';

export default class Player extends React.Component {
  render() {
    return (
      <div className = "player">
        <div className="player_controls">
          <button>Previous</button>
          <button onClick={() => this.props.togglePlay()}>Pause/Play</button>
          <button onClick={() => this.props.songToPlayNext()}>Next</button>
        </div>
      </div>
    )
  }

}
