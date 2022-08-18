import React, { useCallback, useState } from "react";
import IoIcons from "@expo/vector-icons/Ionicons";
import { Container, GameInput, SearchContainer } from "./styles";
import { StatusBar, TouchableHighlight } from "react-native";
import GameList from "../../components/GamesList";
import Game from "../../models/Game";
import axios from "axios";

const Home: React.FC = () => {
  const [game, setGame] = useState("");
  const [games, setGames] = useState<Game[]>([]);
  const getGames = async () => {
    const { data } = await axios.get<Game[]>(
      `https://cracked-api.azurewebsites.net/search/${game}`
    );
    setGames(data);
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
        <GameInput onChangeText={setGame} value={game} />
        <TouchableHighlight
          onPress={() => {
            getGames();
            setGame("");
          }}
        >
          <IoIcons name="search" size={34} />
        </TouchableHighlight>
      </SearchContainer>
      <GameList list={games} />
    </Container>
  );
};

export default Home;
