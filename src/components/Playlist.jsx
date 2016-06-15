import React from 'react';
import PlaylistEntry from './PlaylistEntry.jsx';

export default class Playlist extends React.Component{
  render() {
    let queueList;
    if (this.props.queue) {
      queueList = this.props.queue.map((song) => {
        return <PlaylistEntry key={song.id} songData={song} />
      });
    }
    return (
      <div className="col-md-2">
        <ol>
          {queueList}
        </ol>
      </div>
    );
  }
}