import Constants from "expo-constants";
import { Dimensions } from "react-native";

import styled from "styled-components/native";

export const Container = styled.View`
  background-color: "#0d242c";
  height: ${Dimensions.get("screen").height}px;
  padding: 12px;
  margin-top: ${Constants.statusBarHeight}px;
`;

export const SearchContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const GameInput = styled.TextInput`
  width: 350px;
  padding: 16px;
  border: 1px solid black;
  border-radius: 6px;
`;
