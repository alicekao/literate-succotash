import React from 'react';
import PlaylistEntry from './PlaylistEntry';
import { Col, ListGroup } from 'react-bootstrap';

const Sidebar = () => {
  return (
    <Col md={3}>
      <h3>Playlist</h3>
      <ListGroup>
      <PlaylistEntry song={{title: 'test', id:5}} />
      </ListGroup>
    </Col>
  );
};

export default Sidebar
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