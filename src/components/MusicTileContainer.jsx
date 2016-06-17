import React from 'react';
import MusicTile from './MusicTile.jsx';
import { Grid, Row } from 'react-bootstrap';

export default class MusicTileContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid fluid={true}>
        <Row>
          {this.props.searchResultList.map(song => {
            return <MusicTile
             enqueue={(song) => this.props.enqueue(song)}
             key={song.id}
             data={song}
            />
          })}
        </Row>
     </Grid>
    );
  }
};