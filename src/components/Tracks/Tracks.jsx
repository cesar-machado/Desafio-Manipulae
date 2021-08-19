// import Player from "../Player/";
import { useEffect, useState } from "react";
import axios from "axios";

import { Box } from "./Track.elements";
import { TrackList } from "../TrackList/TrackList";

export function Tracks() {
  const [tracks, setTracks] = useState([]);
  useEffect(() => {
    axios({
      method: "GET",
      url: "https://musicsioproxy.herokuapp.com/api.deezer.com/chart/",
    })
      .then((response) => {
        console.log(response.data);
        setTracks(response.data.tracks.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);
  return (
    <>
      <Box>
        {tracks.map((track) => (
          <TrackList
            key={track.title}
            title={track.title}
            music={track.music}
            artist={track.artist.name}
            album={track.album.cover_medium}
            albumTitle={track.album.title}
            duration={track.duration}
            url={track.preview}
          />
        ))}
      </Box>
    </>
  );
}

// {tracks.map((track) => (
//   <li key={track.title}>
//     <div>
//       <img src={track.album.cover_medium} alt="cover"></img>
//       <Player url={track.preview} />
//     </div>
//     {track.artist.name} - {track.title}
//     <p>
//       Duração: {Math.round(track.duration / 60)}:
//       {Math.round(track.duration % 60) < 10
//         ? "0" + Math.round(track.duration % 60)
//         : Math.round(track.duration % 60)}
//       s
//     </p>
//   </li>
// ))}
// </ul>
