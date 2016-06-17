import React from 'react';
import { ListGroupItem } from 'react-bootstrap';

export default class PlaylistEntry extends React.Component {
  render() {
    return (
      <ListGroupItem>{this.props.songData.title}</ListGroupItem>
    );
  }
}