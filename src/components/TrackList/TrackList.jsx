import Player from "../Player/Player";
import { Box, Content } from "./TrackLists.elements";

export function TrackList(props) {
  return (
    <Box>
      <img src={props.album} alt={props.title} />
      <Player url={props.url} className="player" />

      <Content>
        <p> Música: {props.title}</p>
        <p>Artísta: {props.artist}</p>
        <p>
          Duração: {Math.round(props.duration / 60)}:
          {Math.round(props.duration % 60) < 10
            ? "0" + Math.round(props.duration % 60)
            : Math.round(props.duration % 60)}
          s
        </p>
        <p>Álbum: {props.albumTitle}</p>
      </Content>
    </Box>
  );
}
