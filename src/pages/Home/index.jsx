import { useState } from "react";

import axios from "axios";
import { Tracks } from "../../components/Tracks/Tracks";
import {
  BackButton,
  Box,
  BoxInput,
  Button,
  Div,
  Input,
  Main,
} from "./Home.elements";
import { SearchList } from "../../components/SearchList/SearchList";
import { FaArrowLeft } from "react-icons/fa";

export function Home() {
  const [search, setSearch] = useState([]);
  const [query, setQuery] = useState("eminem");
  const [index, setIndex] = useState(0);
  const [submit, setSubmit] = useState(false);

  const searchTracks = async () => {
    try {
      const url = `https://musicsioproxy.herokuapp.com/api.deezer.com/search?q=${query}&index=${index}`;
      const res = await axios.get(url);
      setSearch(res.data);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  const handleClick = async () => {
    try {
      const url = `https://musicsioproxy.herokuapp.com/api.deezer.com/search?q=${query}&index=${index}`;
      const res = await axios.get(url);
      setSearch(res.data);
      setIndex(index + 10);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (e) => {
    setQuery(e.target.value.toLowerCase());
  };

  function handleSubmit(e) {
    e.preventDefault();
    searchTracks();
    e.target.reset();
  }

  return (
    <>
      <Main>
        <BoxInput>
          <form onSubmit={handleSubmit}>
            <Input
              type="text"
              placeholder="   Artistas, músicas ou álbuns."
              onChange={handleChange}
            />

            <Button type="submit" onClick={() => setSubmit(true)}>
              pesquisar
            </Button>
          </form>
        </BoxInput>

        {submit === true ? (
          <Box>
            <BackButton>
              <button onClick={() => setSubmit(false)}>
                <FaArrowLeft />
                <span>Voltar</span>
              </button>
            </BackButton>
            <h1>
              Resultado da sua pesquisa sobre : <span>{query}</span>
            </h1>
            <Div>
              {search.data?.map((tracks) => (
                // <li>{tracks.artist.name}</li>
                <SearchList props={tracks} key={tracks.id} />
              ))}
            </Div>
            <button onClick={handleClick}>Carregar Mais</button>
          </Box>
        ) : (
          <Tracks />
        )}
      </Main>
    </>
  );
}
