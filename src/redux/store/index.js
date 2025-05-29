import { configureStore } from '@reduxjs/toolkit';
import jobsReducer from '../reducers/jobsReducer';

const store = configureStore({
  reducer: {
    main: jobsReducer
  }
});

export default store;