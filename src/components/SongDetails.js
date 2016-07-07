import React from 'react';

const SongDetails = (props) => {
  let title = ' ';
  let plays = ' ';
  if (props.currentSong) {
   title = props.currentSong.title;
   plays = `Plays ${props.currentSong.playback_count}`;
  }
  return (
    <div>
      <h3>{title}</h3>
      <h3>{plays}</h3>
    </div>
  );
};

export default SongDetails;