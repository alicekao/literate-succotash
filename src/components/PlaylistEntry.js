import React, { PropTypes } from 'react';
import { ListGroupItem } from 'react-bootstrap';

const PlaylistEntry = ({data, playSong}) => {
  return (
    <ListGroupItem
    onClick={() => playSong(data)}>
    {data.title}
    </ListGroupItem>
  );
};

PlaylistEntry.propTypes = {
  data: PropTypes.object
}

export default PlaylistEntry;