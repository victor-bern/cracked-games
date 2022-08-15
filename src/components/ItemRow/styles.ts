import styled from "styled-components/native";
import { Dimensions } from "react-native";

export const Container = styled.View`
  justify-content: center;
  margin-top: 16px;
  justify-content: center;
  align-items: center;
`;

export const GameImage = styled.Image`
  width: ${Dimensions.get("window").width - 80}px;
  height: 120px;
`;
export const GameName = styled.Text`
  font-size: 25px;
`;

interface StatusTextProps {
  gameStatus: String;
}

export const GameStatus = styled.Text<StatusTextProps>`
  background-color: ${({ theme, gameStatus }) =>
    theme.colors[gameStatus.toLowerCase()]};
  padding: 6px;
  font-size: 16px;
`;
