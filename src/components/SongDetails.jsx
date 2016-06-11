import React from 'react';

const SongDetails = (props) => {
  let title = ' ';
  let plays = ' ';
  if (props.currentSong) {
   title = props.currentSong.title;
   plays = props.currentSong.playback_count;
  }
  return (
    <div className="jumbotron text-left">
      <div className="container">
        <h3>{title}</h3>
        <h3>{plays}</h3>
       </div>
    </div>
  );
};

export default SongDetails;