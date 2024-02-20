import { StyledContentContainer } from "./ContentContainer.styled";
import StyledEmptyContentContainer from "../EmptyContentContainer/EmptyContentContainer.styled";
import AddItem from "../AddItem/AddItem";
import SearchItem from "../SearchItem/SearchItem";
import ItemsList from "../ItemsList/ItemsList";
import { useContext } from "react";
import DataContext from "../context/DataContext";

const ContentContainer = () => {
  const { items, searchItemInput, apiError, isLoading } =
    useContext(DataContext);

  const searchedItemsArray = items.filter((item) =>
    item.item.toLowerCase().includes(searchItemInput.toLowerCase().trim())
  );

  return (
    <StyledContentContainer>
      <AddItem />
      <SearchItem />
      {isLoading && (
        <StyledEmptyContentContainer>
          <p>Loading...</p>
        </StyledEmptyContentContainer>
      )}

      {!isLoading && apiError && (
        <StyledEmptyContentContainer>
          <p>{apiError}</p>
        </StyledEmptyContentContainer>
      )}

      {!isLoading && !apiError && !searchedItemsArray.length && (
        <StyledEmptyContentContainer>
          <p>Empty</p>
        </StyledEmptyContentContainer>
      )}

      {!isLoading && !apiError && searchedItemsArray.length && (
        <ItemsList items={searchedItemsArray} />
      )}
    </StyledContentContainer>
  );
};

export default ContentContainer;
