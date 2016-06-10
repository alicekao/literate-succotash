import React from 'react';

export default class MusicTile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      {this.props.data.title }
      <button onClick={() => {this.props.handlePlay(this.props.data.id)}}></button>
    </div>
    );
  }
};
