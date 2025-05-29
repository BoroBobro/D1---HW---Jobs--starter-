import { combineReducers, configureStore } from '@reduxjs/toolkit';
import favouriteReducer from '../reducers/favouriteReducer';
import searchReducer from '../reducers/searchReducer';


const mainReducer = combineReducers({
    favourites: favouriteReducer,
    search: searchReducer 
})




const store = configureStore({
  reducer: mainReducer
});

export default store;