import { StyledFooter } from "./Footer.styled";
import { useContext } from "react";
import DataContext from "../context/DataContext";

const Footer = () => {
  const { items, searchItemInput } = useContext(DataContext);
  const searchedItemsArray = items.filter((item) =>
    item.item.toLowerCase().includes(searchItemInput.toLowerCase().trim())
  );
  return (
    <StyledFooter>
      <p>
        {searchedItemsArray.length > 1
          ? searchedItemsArray.length + " List Items"
          : searchedItemsArray.length === 1
          ? "1 List Item"
          : "List is empty"}
      </p>
    </StyledFooter>
  );
};

export default Footer;
