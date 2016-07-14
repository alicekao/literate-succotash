import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';

import PlaylistEntry from '../components/PlaylistEntry';
import { Col, ListGroup } from 'react-bootstrap';

class Sidebar extends React.Component {
  removeFromPlaylist(song) {
    console.log('removing: ', song);
  }

  render() {
    const { playSong } = this.props.actions;
    let { songList, currSong } = this.props.toPlay;
    songList = songList.map((entry) => {
      return <PlaylistEntry
        key={entry.id}
        data={entry} 
        playSong={playSong}
        onClick={this.removeFromPlaylist}
      />
    });

    return (
      <Col md={3}>
        <h3>Playlist</h3>
        <ListGroup>
          {songList}
        </ListGroup>
      </Col>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    toPlay: state.playlist
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
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