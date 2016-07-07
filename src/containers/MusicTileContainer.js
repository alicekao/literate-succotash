import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../actions';
import { Grid, Row } from 'react-bootstrap';
import MusicTile from '../components/MusicTile';

class MusicTileContainer extends React.Component {
  render() {
    const { addSong } = this.props.actions;
    let { songs, onClick } = this.props;
    songs = songs.map((song) => {
      return <MusicTile 
        key={song.id}
        song={song}
        onClick={addSong} 
        />
    });

    return (
      <Grid>
        <Row>
          {songs}
        </Row>
      </Grid>
    );
  }
};

const mapStateToProps = (state) => ({
  songs: state.songs.songs
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(MusicTileContainer);