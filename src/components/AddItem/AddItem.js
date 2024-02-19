import { StyledAddItem } from "./AddItem.styled";
import { FaPlus } from "react-icons/fa";
import { useContext, useRef } from "react";
import DataContext from "../context/DataContext";

const AddItem = () => {
  const { handleSubmit, addItemInput, setAddItemInput } =
    useContext(DataContext);

  const myRef = useRef();
  return (
    <StyledAddItem onSubmit={handleSubmit}>
      <label htmlFor="addItem">Add Item</label>
      <input
        type="text"
        name="addItem"
        id="addItem"
        placeholder="Add New Item"
        autoComplete="off"
        required
        value={addItemInput}
        onChange={(e) => setAddItemInput(e.target.value)}
        ref={myRef}
      />

      <button type="submit" onClick={() => myRef.current.focus()}>
        <FaPlus />
      </button>
    </StyledAddItem>
  );
};

export default AddItem;
