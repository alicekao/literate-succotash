import React from 'react';
import MusicTile from './MusicTile.jsx';

export default class MusicTileContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className=".container-fluid">
       {this.props.searchResultList.map(song => {
       return <MusicTile
         handlePlay={(id) => this.props.handlePlay(id)}
         key={song.id}
         data={song}/>
       })}
     </div>
    );
  }
};
