import React from 'react';
import { connect } from 'react-redux';

import PlaylistEntry from '../components/PlaylistEntry';
import { Col, ListGroup } from 'react-bootstrap';

class Sidebar extends React.Component {
  render() {
    let { playlist } = this.props;
    playlist = playlist.map((entry) => {
      return <PlaylistEntry
        key={entry.id}
        data={entry} 
      />
    });

    return (
      <Col md={3}>
        <h3>Playlist</h3>
        <ListGroup>
          {playlist}
        </ListGroup>
      </Col>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    playlist: state.playlist
  }
}

export default connect(mapStateToProps)(Sidebar);
// export default class Playlist extends React.Component{
//   render() {
//     let queueList;
//     if (this.props.queue) {
//       queueList = this.props.queue.map((song) => {
//         return <PlaylistEntry key={song.id} songData={song} />
//       });
//     }
//     return (
//       <div>
//         <h2>Up Next</h2>
//         <ListGroup>
//           {queueList}
//         </ListGroup>
//       </div>
//     );
//   }
// }