import { useDispatch, useSelector } from "react-redux";

import { RiDeleteBin6Line } from "react-icons/ri";
import { getConvertDuration } from "../../utils/convertDuration";
import { Player } from "../../components/Player/Player";
import { removeFavoriteTrack } from "../../store/modules/FavoriteTrack/actions";

import {
  Box,
  BoxList,
  Content,
  Main,
  Text,
  TrashBtn,
} from "./Favorite.elements";

export function Favorite() {
  const favoriteTracks = useSelector((state) => state.favoriteTracks);

  const dispatch = useDispatch();

  return (
    <Main>
      <h1>Músicas Favoritas</h1>
      <Box>
        {favoriteTracks?.map((track) => (
          <BoxList key={track.title}>
            <img src={track.album} alt="cover" />
            <Player url={track.url} />
            <TrashBtn
              onClick={() => {
                window.alert(track.title + " foi removido dos favoritos");
                dispatch(removeFavoriteTrack(track));
              }}
            >
              <RiDeleteBin6Line size={35} />
            </TrashBtn>
            <Content>
              <Text> Artísta: {track.artist}</Text>
              <Text> Música: {track.title}</Text>
              <Text> Album : {track.albumTitle}</Text>
              <Text>Duração: {getConvertDuration(track.duration)}s</Text>
              <Text>
                <a href={track.link} target="_blank" rel="noreferrer">
                  Música Completa
                </a>
              </Text>
            </Content>
          </BoxList>
        ))}
      </Box>
    </Main>
  );
}
