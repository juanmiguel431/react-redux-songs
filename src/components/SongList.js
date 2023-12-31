import React from 'react';
import { connect } from 'react-redux';
import { select } from '../reducers/songsSlice';

class SongList extends React.Component {

  renderList = () => {
    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={_ => this.props.select(song)}
            >
              Select
            </button>
          </div>
          <div className="content">
            {song.title}
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="song-list ui divide list">
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { songs: state.songs.list };
}

export default connect(mapStateToProps, { select })(SongList);
