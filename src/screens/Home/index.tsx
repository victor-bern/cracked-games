import React, { useCallback, useState } from "react";
import IoIcons from "@expo/vector-icons/Ionicons";
import { Container, GameInput, SearchContainer } from "./styles";
import { StatusBar, TouchableHighlight } from "react-native";
import GameList from "../../components/GamesList";
import Game from "../../models/Game";
import axios from "axios";
import { getGames } from "../../services/GameService";

const Home: React.FC = () => {
  const [game, setGame] = useState("");
  const [games, setGames] = useState<Game[]>([]);
  const handleGetGames = async () => {
    const games = await getGames(game);
    setGames(games);
    setGame("");
  };
  return (
    <Container>
      <StatusBar
        animated={true}
        barStyle={"dark-content"}
        showHideTransition={"fade"}
        hidden={false}
      />
      <SearchContainer>
        <GameInput
          testID={"input"}
          placeholder="Insert game name"
          onChangeText={setGame}
          value={game}
        />
        <TouchableHighlight testID={"button-search"} onPress={handleGetGames}>
          <IoIcons name="search" size={34} />
        </TouchableHighlight>
      </SearchContainer>
      <GameList list={games} />
    </Container>
  );
};

export default Home;
