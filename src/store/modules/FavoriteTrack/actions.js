export function addFavoriteTrack(track, favorite) {
  return {
    type: "ADD_FAVORITE_TRACK",
    payload: {
      track,
    },
  };
}

export function removeFavoriteTrack(track) {
  return {
    type: "REMOVE_FAVORITE_TRACK",
    payload: {
      track,
    },
  };
}
