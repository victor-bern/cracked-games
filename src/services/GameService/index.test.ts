import axios, { AxiosResponse } from "axios";
import { getGames } from ".";
import Game from "../../models/Game";
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("GetGames()", () => {
  it("should return game list", async () => {
    const games: Game[] = [
      {
        name: "teste",
        status: "cracked",
        image: "test",
      },
    ];

    const mockedResponse: AxiosResponse = {
      data: games,
      status: 200,
      statusText: "OK",
      headers: {},
      config: {},
    };
    mockedAxios.get.mockResolvedValueOnce(mockedResponse);

    expect(axios.get).not.toBeCalled();
    const game = "Spider";
    const data = await getGames(game);

    expect(axios.get).toBeCalled();
    expect(data).toEqual(mockedResponse.data);
  });
});
