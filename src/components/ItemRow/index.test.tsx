import { render, screen } from "@testing-library/react-native";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { ItemRow } from ".";
import theme from "../../global/styles/theme";
import Game from "../../models/Game";

const mockedItemGame: Game = {
  name: "teste",
  image:
    "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  status: "Cracked",
};

describe("ItemRow components", () => {
  it("Deve renderizar o item", () => {
    render(
      <ThemeProvider theme={theme}>
        <ItemRow item={mockedItemGame} />
      </ThemeProvider>
    );

    const itemName = screen.getByText(mockedItemGame.name);
    const itemStatus = screen.getByText(mockedItemGame.status);
    const itemImage = screen.getByTestId("item-image");

    expect(itemName).toBeTruthy();
    expect(itemStatus).toBeTruthy();
    expect(itemImage).toBeTruthy();
  });

  it("game status should have a background color #a0ca7e when status is 'cracked'", () => {
    const mockedGame: Game = {
      name: "teste",
      image:
        "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      status: "Cracked",
    };
    render(
      <ThemeProvider theme={theme}>
        <ItemRow item={mockedItemGame} />
      </ThemeProvider>
    );

    const itemStatus = screen.getByText(mockedItemGame.status);

    expect(itemStatus.props.style[0].backgroundColor).toBe(
      theme.colors.cracked
    );
  });
  it("game status should have a background color #b41b2a when status is 'uncracked'", () => {
    const mockedGame: Game = {
      name: "teste",
      image:
        "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      status: "Uncracked",
    };
    render(
      <ThemeProvider theme={theme}>
        <ItemRow item={mockedGame} />
      </ThemeProvider>
    );

    const itemStatus = screen.getByText(mockedGame.status);

    expect(itemStatus.props.style[0].backgroundColor).toBe(
      theme.colors.uncracked
    );
  });
  it("game status should have a background color #ad51d0 when status is 'unreleased'", () => {
    const mockedGame: Game = {
      name: "teste",
      image:
        "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      status: "unreleased",
    };
    render(
      <ThemeProvider theme={theme}>
        <ItemRow item={mockedGame} />
      </ThemeProvider>
    );

    const itemStatus = screen.getByText(mockedGame.status);

    expect(itemStatus.props.style[0].backgroundColor).toBe(
      theme.colors.unreleased
    );
  });
});
