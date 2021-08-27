import { produce } from "immer";

const INITIAL_STATE = {
  tracks: [],
};

function favoriteTrack(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case "ADD_FAVORITE_TRACK": {
        const { track } = action.payload;

        draft.tracks.push({
          track,
        });

        break;
      }
      case "REMOVE_FAVORITE_TRACK":
        const { track } = action.payload;
        const trackRemoved = state.tracks.filter(
          (value) => value.id === track.id
        );
        return trackRemoved;

      default: {
        return state;
      }
    }
  });
}

export default favoriteTrack;

// export default function FavoriteTrack(state = [], action) {
//   switch (action.type) {
//     case "addFavoriteTrack":

//     case "removeFavoriteTrack":
//       const filterTrack = action.payload;
//       const trackRemoved = state.filter((value) => value.id !== filterTrack.id);
//       return trackRemoved;

//     default:
//       return state;
//   }
// }
