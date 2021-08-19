import { Header } from "../../components/Header/Header";
import { Tracks } from "../../components/Tracks/Tracks";
import { Box, BoxInput, Input, Main } from "./Home.elements";

export function Home() {
  return (
    <>
      <Header />
      <Main>
        <BoxInput>
          <Input type="text" placeholder="   Artistas, músicas ou álbuns." />
        </BoxInput>
        <h1>Top Músicas do Momento</h1>
        <Box>
          <Tracks />
        </Box>
      </Main>
    </>
  );
}
