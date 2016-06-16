import React from 'react';
import MusicTile from './MusicTile.jsx';

export default class MusicTileContainer extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="container-fluid col-md-10 col-md-offset-2">
        <div className="row">
          {this.props.searchResultList.map(song => {
            return <MusicTile
             enqueue={(song) => this.props.enqueue(song)}
             key={song.id}
             data={song}
            />
          })}
        </div>
     </div>
    );
  }
};