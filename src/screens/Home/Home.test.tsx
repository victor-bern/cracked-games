import React from "react";
import axios from "axios";
import { TextInput, TouchableHighlight } from "react-native";
import { fireEvent, render, screen, act } from "@testing-library/react-native";
import renderer from "react-test-renderer";
import Home from ".";
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Render tests Home Screen", () => {
  it("Should render page with input and button", () => {
    const tree = renderer.create(<Home />).root;

    const input = tree.findByType(TextInput);
    const button = tree.findByType(TouchableHighlight);

    expect(input.props.placeholder).toBe("Insert game name");
    expect(button.props.children.props.name).toBe("search");
  });

  it("Input value change when typed", () => {
    render(<Home />);
    const value = "teste";
    const input = screen.getByTestId("input");

    fireEvent.changeText(input, value);

    expect(input.props.value).toBe(value);
  });

  it("When click on search button with text call api", async () => {
    render(<Home />);
    const input = screen.getByTestId("input");
    const button = screen.getByTestId("button-search");

    await act(() => {
      fireEvent.changeText(input, "aaaaaa");
      fireEvent.press(button);
      expect(mockedAxios.get).toHaveBeenCalled();
    });
  });
});
