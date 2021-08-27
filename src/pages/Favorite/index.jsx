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
  const favorite = useSelector((state) => state.favoriteTrack.tracks);

  const dispatch = useDispatch();

  return (
    <Main>
      <h1>Músicas Favoritas</h1>
      <Box>
        {favorite?.map((itens) => (
          <BoxList key={itens.track.title}>
            <img src={itens.track.album} alt="cover" />
            <Player url={itens.track.url} />
            <TrashBtn
              onClick={() => {
                window.alert(itens.track.title + " foi removido dos favoritos");
                dispatch(removeFavoriteTrack(itens));
              }}
            >
              <RiDeleteBin6Line size={35} />
            </TrashBtn>
            <Content>
              <Text> Artísta: {itens.track.artist}</Text>
              <Text> Música: {itens.track.title}</Text>
              <Text> Album : {itens.track.albumTitle}</Text>
              <Text>Duração: {getConvertDuration(itens.track.duration)}s</Text>
              <Text>
                <a href={itens.track.link} target="_blank" rel="noreferrer">
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
