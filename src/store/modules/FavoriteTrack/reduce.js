export default function FavoriteTrackReducer(state = [], action) {
  switch (action.type) {
    case "addFavoriteTrack":
      const track = action.payload;
      //check if track already exists in the favorites
      const found = state.some((value) => track.id === value.id);
      let newState = [];
      if (!found) {
        newState = [...state, track];
        return newState;
      } else {
        return state;
      }

    case "removeFavoriteTrack":
      const filterTrack = action.payload;
      const trackRemoved = state.filter((value) => value.id !== filterTrack.id);
      return trackRemoved;

    default:
      return state;
  }
}
