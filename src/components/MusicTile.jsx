import React from 'react';

export default class MusicTile extends React.Component {


  render() {
    return (
      <div
      className = "col-md-2"
      onClick={() => {this.props.handlePlay(this.props.data.id)}}>
        <a href="#" className = "thumbnail">
          <img src={this.props.data.artwork_url}/>
        </a>
        {this.props.data.title }
      </div>
    );
  }
};
