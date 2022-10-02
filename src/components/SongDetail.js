import { connect } from "react-redux";


const SongDetail = ({ song }) => {
  return (
    <div className="song-detail">
      <h1>Song detail</h1>
      <h2>{song?.title}</h2>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
}

export default connect(mapStateToProps)(SongDetail);
