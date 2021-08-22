import { combineReducers, createStore } from "@reduxjs/toolkit";
import FavoriteTrackReducer from "./modules/FavoriteTrack/reduce";

const rootReducer = combineReducers({
  favoriteTracks: FavoriteTrackReducer,
});

const store = createStore(rootReducer);

export default store;
