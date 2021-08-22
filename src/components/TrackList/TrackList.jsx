import { useState } from "react";

import { useDispatch } from "react-redux";
import { getConvertDuration } from "../../utils/convertDuration";
import { addFavoriteTrack } from "../../store/modules/FavoriteTrack/actions";

import { Player } from "../Player/Player";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { Box, Content, Text, FavBtn } from "./TrackLists.elements";

export function TrackList(props) {
  const [favorite, setFavorite] = useState(false);
  const dispatch = useDispatch();
  return (
    <Box>
      <img src={props.album} alt={props.title} />
      <Player url={props.url} />
      <FavBtn
        onClick={() => {
          dispatch(addFavoriteTrack(props));
          setFavorite(!favorite);
        }}
      >
        {favorite ? (
          <FaHeart size={35} fill="#c00303" />
        ) : (
          <FiHeart size={35} />
        )}
      </FavBtn>

      <Content>
        <Text> Música: {props.title}</Text>
        <Text>Artísta: {props.artist}</Text>

        <Text>Duração: {getConvertDuration(props.duration)}s</Text>
        <Text>Álbum: {props.albumTitle}</Text>
        <Text>
          <a href={props.link} target="_blank" rel="noreferrer">
            Música Completa
          </a>
        </Text>
      </Content>
    </Box>
  );
}
