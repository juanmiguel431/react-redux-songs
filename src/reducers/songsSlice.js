import { createSlice } from '@reduxjs/toolkit';

export const songsSlice = createSlice({
  name: 'song',
  initialState: {
    selected: null,
    list: [
      { title: 'No Scrubs', duration: '4:05' },
      { title: 'Macarena', duration: '2:30' },
      { title: 'All Star', duration: '3:15' },
      { title: 'I Wanted it That Way', duration: '1:45' },
    ]
  },
  reducers: {
    select: (state, action) => {
      state.selected = action.payload;
    }
  }
});

export const { select } = songsSlice.actions;

const songsReducer = songsSlice.reducer;
export default songsReducer;
