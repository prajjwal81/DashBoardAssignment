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
    setLocation:(state,action) =>{
      state.loggedIn = {...state.loggedIn,location:action.payload}
     
    },
    clear:(state,action)=>{
      state.loggedIn={}
    },
    clearParticularItem:(state,action)=>{
      console.log(state.loggedIn,"===")
      state.loggedIn.name=""
      state.loggedIn.password=""
      console.log(state.loggedIn,"==ll=")
    }
  },
});

export const {login,setLocation,clear,clearParticularItem} = GlobalSlice.actions;

export default GlobalSlice.reducer;