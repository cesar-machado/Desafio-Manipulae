import { useState, useEffect } from "react";
import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";
import { Div } from "./Player.elements";

const MusicPreview = (url) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing, audio]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, [audio]);

  return [playing, toggle];
};

export const Player = ({ url }) => {
  const [playing, toggle] = MusicPreview(url);

  return (
    <Div>
      <button onClick={toggle}>
        {playing ? (
          <FaPauseCircle fontSize={35} />
        ) : (
          <FaPlayCircle fontSize={35} />
        )}
      </button>
    </Div>
  );
};
