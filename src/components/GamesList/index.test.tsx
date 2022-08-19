import { render, screen } from "@testing-library/react-native";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import GameList from ".";
import theme from "../../global/styles/theme";
import Game from "../../models/Game";

describe("GameList component", () => {
  it("Should render a list when receive it", () => {
    const mockedData: Game[] = [
      { name: "teste1", status: "uncracked", image: "teste1" },
      { name: "teste2", status: "uncracked", image: "teste2" },
    ];
    render(
      <ThemeProvider theme={theme}>
        <GameList list={mockedData} />
      </ThemeProvider>
    );

    const list = screen.getByTestId("list");

    expect(list.props.data.length).toBe(2);
  });
});
