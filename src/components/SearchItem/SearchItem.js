import { StyledSearchItem } from "./SearchItem.styled";
import { useContext } from "react";
import DataContext from "../context/DataContext";

const SearchItem = () => {
  const { searchItemInput, setSearchItemInput } = useContext(DataContext);
  return (
    <StyledSearchItem onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="searchItem">Search Item</label>
      <input
        type="text"
        name="searchItem"
        id="searchItem"
        placeholder="Search Item"
        autoComplete="off"
        value={searchItemInput}
        onChange={(e) => setSearchItemInput(e.target.value)}
      />
    </StyledSearchItem>
  );
};

export default SearchItem;
