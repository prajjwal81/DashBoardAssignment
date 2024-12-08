import {configureStore} from '@reduxjs/toolkit';
import GlobalReducer from './features/Globalslice';

export const store = configureStore({
  reducer: {
    global: GlobalReducer,
  },
});
