import React, { PropTypes } from 'react';
import { ListGroupItem } from 'react-bootstrap';

const PlaylistEntry = ({song}) => {
  console.log('props in entry is: ', song);
  return (
    <ListGroupItem>
    {song.title}
    </ListGroupItem>
  );
};

PlaylistEntry.propTypes = {
  song: PropTypes.object
}

export default PlaylistEntry;