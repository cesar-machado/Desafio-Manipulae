import { Box, Content, Text, FavBtn } from "./SearchList.elements";

import { Player } from "../Player/Player";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { getConvertDuration } from "../../utils/convertDuration";
import { addFavoriteTrack } from "../../store/modules/FavoriteTrack/actions";

export function SearchList(props) {
  const [favorite, setFavorite] = useState(false);
  const dispatch = useDispatch();
  // console.log(props);
  return (
    <Box key={props.props.title}>
      <img src={props.props.album.cover_medium} alt={props.props.title} />
      <Player url={props.props.preview} />
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
        <Text> Música: {props.props.title}</Text>
        <Text>Artísta: {props.props.artist.name}</Text>

        <Text>Duração: {getConvertDuration(props.props.duration)}s</Text>
        <Text>Álbum: {props.props.album.title}</Text>
        <Text>
          <a href={props.props.link} target="_blank" rel="noreferrer">
            Música Completa
          </a>
        </Text>
      </Content>
    </Box>
  );
}
