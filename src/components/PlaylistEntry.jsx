import React from 'react';

export default class PlaylistEntry extends React.Component {
  render() {
    return (
      <li>{this.props.songData.title}</li>
    );
  }
}