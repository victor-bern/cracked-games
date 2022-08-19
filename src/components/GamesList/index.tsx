import { PropsWithChildren } from "react";
import { FlatList } from "react-native";
import Game from "../../models/Game";
import ItemRow from "../ItemRow";
import { Container } from "./styles";

const GameList: React.FC<
  PropsWithChildren<{
    list: Game[];
  }>
> = ({ list }) => {
  const renderItem = ({ item }) => {
    return <ItemRow item={item as Game} />;
  };

  return (
    <Container>
      <FlatList
        testID={"list"}
        data={list}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
      />
    </Container>
  );
};

export default GameList;
