import axios from "axios";
import Game from "../../models/Game";

const getGames = async (gameName: string) => {
  const { data } = await axios.get<Game[]>(
    `https://cracked-api.azurewebsites.net/search/${gameName}`
  );
  return data;
};

export { getGames };
