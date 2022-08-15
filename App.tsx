import React, { useCallback, useState } from "react";
import IoIcons from "@expo/vector-icons/Ionicons";
import { Container, GameInput, SearchContainer } from "./styles";
import { StatusBar, TouchableHighlight } from "react-native";
import GameList from "./src/components/GamesList";
import Game from "./src/models/Game";
import axios from "axios";
import { ThemeProvider } from "styled-components";
import theme from "./src/global/styles/theme";

const App: React.FC = () => {
  const [game, setGame] = useState("");
  const [games, setGames] = useState<Game[]>([]);
  const getGames = async () => {
    const { data } = await axios.get<Game[]>(
      `https://cracked-api.azurewebsites.net/search/${game}`
    );
    setGames(data);
    console.log(data);
  };
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <StatusBar
          animated={true}
          barStyle={"dark-content"}
          showHideTransition={"fade"}
          hidden={false}
        />
        <SearchContainer>
          <GameInput onChangeText={setGame} value={game} />
          <TouchableHighlight
            onPress={() => {
              getGames();
              console.log(game);
              setGame("");
            }}
          >
            <IoIcons name="search" size={34} />
          </TouchableHighlight>
        </SearchContainer>
        <GameList list={games} />
      </Container>
    </ThemeProvider>
  );
};

export default App;
