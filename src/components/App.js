import SongList from "./SongList";

function App() {
  return (
    <div className="app ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongList />
        </div>
      </div>
    </div>
  );
}

export default App;
