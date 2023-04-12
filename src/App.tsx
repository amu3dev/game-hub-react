import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav " "main"`, // for mobile devices
        lg: `"nav nav" "aside main"`, // for larger devices
      }}>
      <GridItem gridArea="nav">
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem gridArea="aside">Aside</GridItem>
      </Show>
      <GridItem gridArea="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default App;
