import { combineReducers } from 'redux';
// import { configureStore } from "@reduxjs/toolkit";

const SONG_SELECTED = 'SONG_SELECTED';

const songsReducer = () => {
  return [
    { title: 'No Scrubs', duration: '4:05' },
    { title: 'Macarena', duration: '2:30' },
    { title: 'All Star', duration: '3:15' },
    { title: 'I Wanted it That Way', duration: '1:45' },
  ];
}

const selectedSongReducer = (selectedSong = null, action) => {
  switch (action.type) {
    case SONG_SELECTED:
      return action.payload;
    default:
      return selectedSong
  }
};

export const reducers = combineReducers({ songs: songsReducer, selectedSong: selectedSongReducer });

// export const store = configureStore({
//   reducer: {
//     songs: songsReducer,
//     selectedSong: selectedSongReducer
//   }
// })
