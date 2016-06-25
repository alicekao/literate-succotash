import React from 'react';
import Player from './Player';
import { Col } from 'react-bootstrap';
// import MusicTileContainer from './MusicTileContainer';

const Main = () => {
  return (
    <Col md={9}>
      <Player />
    </Col>
  );
};

export default Main;