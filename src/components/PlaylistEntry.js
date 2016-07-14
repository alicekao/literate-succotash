import React, { PropTypes } from 'react';
import { ListGroupItem, Glyphicon } from 'react-bootstrap';

const PlaylistEntry = ({data, playSong, onClick}) => {
  return (
    <div>
      <ListGroupItem
        onClick={() => playSong(data) }>
        {data.title}
      </ListGroupItem>
    </div>
  );
};

PlaylistEntry.propTypes = {
  data: PropTypes.object
}

export default PlaylistEntry;