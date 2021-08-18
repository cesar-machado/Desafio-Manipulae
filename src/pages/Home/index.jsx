import Header from "../../components/Header/Header";
import { Box, Input, Main } from "./Home.elements";

export default function Home() {
  return (
    <>
      <Header />
      <Main>
        <Box>
          <Input type="text" placeholder="   Artistas, músicas ou álbuns." />
        </Box>
      </Main>
    </>
  );
}
