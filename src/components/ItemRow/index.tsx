import { PropsWithChildren } from "react";
import Game from "../../models/Game";
import { Container, GameImage, GameName, GameStatus } from "./styles";

export const ItemRow: React.FC<
  PropsWithChildren<{
    item: Game;
  }>
> = ({ item }) => {
  return (
    <Container>
      <GameImage
        testID={"item-image"}
        source={{
          uri: item.image,
        }}
      />
      <GameName>{item.name}</GameName>
      <GameStatus gameStatus={item.status}>{item.status}</GameStatus>
    </Container>
  );
};
