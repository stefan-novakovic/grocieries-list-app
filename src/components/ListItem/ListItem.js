import { StyledListItem } from "./ListItem.styled";
import { FaTrashAlt } from "react-icons/fa";
import { useContext } from "react";
import DataContext from "../context/DataContext";

const ListItem = ({ item }) => {
  const { handleCheck, handleDelete } = useContext(DataContext);
  return (
    <StyledListItem $checked={item.checked}>
      <input
        type="checkbox"
        id={item.id}
        checked={item.checked}
        onChange={() => handleCheck(item.id)}
      />
      <label htmlFor={item.id}>{item.item}</label>
      <button type="button" onClick={() => handleDelete(item.id)}>
        <FaTrashAlt />
      </button>
    </StyledListItem>
  );
};

export default ListItem;
