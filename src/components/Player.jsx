import React from 'react';

export default class Player extends React.Component {
  render() {
    return (
      <div className = "player">
        <div className="player_controls">
          <button>Previous</button>
          <button onClick={() => console.log('clicked')}>Pause/Play</button>
          <button>Next</button>
        </div>
      </div>
    )
  }

}
