import React from 'react';
import { Grid, Row } from 'react-bootstrap';
import MusicTile from 'MusicTile';

const MusicTileContainer = () => {
  return (
    <Grid>
      <Row>
        <MusicTile />
      </Row>
    </Grid>
  );
};

export default MusicTileContainer;