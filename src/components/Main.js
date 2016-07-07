import React from 'react';
import Player from '../containers/PlayerContainer';
import { Col } from 'react-bootstrap';
import MusicTileContainer from '../containers/MusicTileContainer';

const Main = () => {
  return (
    <Col md={9}>
      <Player />
      <MusicTileContainer />
    </Col>
  );
};

export default Main;