import React from 'react';
import PlaylistEntry from './PlaylistEntry.jsx';
import { ListGroup } from 'react-bootstrap';

export default class Playlist extends React.Component{
  render() {
    let queueList;
    if (this.props.queue) {
      queueList = this.props.queue.map((song) => {
        return <PlaylistEntry key={song.id} songData={song} />
      });
    }
    return (
      <div>
        <h2>Up Next</h2>
        <ListGroup>
          {queueList}
        </ListGroup>
      </div>
    );
  }
}