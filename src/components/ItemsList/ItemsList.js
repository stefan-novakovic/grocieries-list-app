import { StyledItemsList } from "./ItemsList.styled";
import ListItem from "../ListItem/ListItem";

const ItemsList = ({ items }) => {
  return (
    <StyledItemsList>
      {items.map((item) => {
        return <ListItem key={item.id} item={item} />;
      })}
    </StyledItemsList>
  );
};

export default ItemsList;
