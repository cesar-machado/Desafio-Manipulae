import axios from "axios";
import { useEffect, useState } from "react";
import { TrackList } from "../TrackList/TrackList";

import { Box, Container, Title } from "./Track.elements";

export function Tracks() {
  const [tracks, setTracks] = useState([]);
  useEffect(() => {
    axios({
      method: "GET",
      url: "https://api.deezer.com/chart?index=0&limit=30",
    })
      .then((response) => {
        setTracks(response.data.tracks.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);
  return (
    <Container>
      <Title>Top Músicas do Momento</Title>
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
            link={track.link}
          />
        ))}
      </Box>
    </Container>
  );
}
