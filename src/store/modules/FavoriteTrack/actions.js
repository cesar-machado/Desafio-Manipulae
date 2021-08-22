export function addFavoriteTrack(track) {
  return {
    type: "addFavoriteTrack",
    payload: track,
  };
}

export function removeFavoriteTrack(track) {
  return {
    type: "removeFavoriteTrack",
    payload: track,
  };
}
