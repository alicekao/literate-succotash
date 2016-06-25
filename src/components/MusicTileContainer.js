import React from 'react';
import { Grid, Row } from 'react-bootstrap';
import MusicTile from './MusicTile';

const MusicTileContainer = () => {
  return (
    <Grid>
      <Row>
        <MusicTile song={{title:"Alice"}}/>
      </Row>
    </Grid>
  );
};

export default MusicTileContainer;