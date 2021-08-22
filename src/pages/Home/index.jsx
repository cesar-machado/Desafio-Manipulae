import { Tracks } from "../../components/Tracks/Tracks";
import { BoxInput, Input, Main } from "./Home.elements";

export function Home() {
  return (
    <>
      <Main>
        <BoxInput>
          <Input type="text" placeholder="   Artistas, músicas ou álbuns." />
        </BoxInput>

        <Tracks />
      </Main>
    </>
  );
}
