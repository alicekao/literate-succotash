import React from 'react';
import { Col, Thumbnail } from 'react-bootstrap';

import React, {PropTypes} from 'react';

const MusicTile = props => {
  return (
    <div>
      
    </div>
  );
};

MusicTile.propTypes = {
  
};

export default MusicTile;
// export default class MusicTile extends React.Component {
//   enqueue(e) {
//     e.preventDefault();
//     this.props.enqueue(this.props.data);
//   }

//   render() {
//     return (
//       <Col md={2} sm={3} xs={6}
//       onClick={(e) => {this.enqueue(e)}}
//       >
//         <Thumbnail href="#" src={this.props.data.artwork_url} />
//         <p>Title{this.props.data.title}</p>
//       </Col>
//     );
//   }
// };
