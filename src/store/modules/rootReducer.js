import { combineReducers } from "@reduxjs/toolkit";
import favoriteTrack from "./FavoriteTrack/reducer";

const rootReducer = combineReducers({
  favoriteTrack,
});

export default rootReducer;
