import React from 'react';

export default class MusicTile extends React.Component {
  enqueue(e) {
    e.preventDefault();
    this.props.enqueue(this.props.data);
  }

  render() {
    return (
      <div
      className = "col-md-2 col-sm-3 col-xs-6"
      onClick={(e) => {this.enqueue(e)}}>
        <a href="#" className = "thumbnail">
          <img src={this.props.data.artwork_url}/>
        </a>
        {this.props.data.title }
      </div>
    );
  }
};
