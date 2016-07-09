import React from 'react';

const SongDetails = ({ currSong }) => {
  let title = ' ';
  let plays = ' ';
  if (currSong) {
   title = currSong.title;
   plays = `Plays ${currSong.playback_count}`;
  }
  return (
    <div>
      <h3>{title}</h3>
      <h3>{plays}</h3>
    </div>
  );
};

export default SongDetails;