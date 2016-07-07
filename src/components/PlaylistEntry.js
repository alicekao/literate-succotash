import React, { PropTypes } from 'react';
import { ListGroupItem } from 'react-bootstrap';

const PlaylistEntry = ({data}) => {
  return (
    <ListGroupItem>
    {data.title}
    </ListGroupItem>
  );
};

PlaylistEntry.propTypes = {
  data: PropTypes.object
}

export default PlaylistEntry;