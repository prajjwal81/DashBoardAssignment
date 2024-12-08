import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
const initialState = {
  users: [
    {
      name: 'prajjwal',
      password: 'prajjwal',
    },
    {
      name: 'pawan',
      password: 'pawan',
    },
    {
      name: 'priya',
      password: 'priya',
    },
    {
      name: 'aman',
      password: 'aman',
    },
    {
      name: 'aman',
      password: 'aman',
    },
  ],
  loggedIn: {},
  location: [],
};

export const GlobalSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      const user = state.users.filter(
        user =>
          user.name.toLowerCase() === action.payload.name.toLowerCase() &&
          user.password.toLowerCase() === action.payload.pass.toLowerCase(),
      );
      state.loggedIn = user[0];
    },
    setLocation: (state, action) => {
      // Make sure the payload is an object with both location and dateTime
      const {location, dateTime} = action.payload;

      if (location && dateTime) {
        state.location.push({
          location, // The location string (Lat, Long)
          dateTime, // The datetime string
        });
      } else {
        console.error('Location or DateTime is missing');
      }
    },
    clear: (state, action) => {
      state.loggedIn = {};
    },
    clearParticularItem: (state, action) => {
      console.log(state.loggedIn, '===');
      state.loggedIn.name = '';
      state.loggedIn.password = '';
      console.log(state.loggedIn, '==ll=');
    },
  },
});

export const {login, setLocation, clear, clearParticularItem} =
  GlobalSlice.actions;

export default GlobalSlice.reducer;
