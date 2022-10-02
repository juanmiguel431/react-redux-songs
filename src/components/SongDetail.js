import { connect } from "react-redux";


const SongDetail = ({ song }) => {
  return (
    <div className="song-detail">
      <h3>Details for</h3>
      <p>
        Title: {song?.title || 'Select a song'}
        <br/>
        duration: {song?.duration}
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
}

export default connect(mapStateToProps)(SongDetail);
