import { StyledHeader } from "./Header.styled";
import { useContext } from "react";
import DataContext from "../context/DataContext";

const Header = () => {
  const { darkMode, setDarkMode } = useContext(DataContext);
  return (
    <StyledHeader
      title="Double click to switch light/dark mode"
      onDoubleClick={() => setDarkMode(!darkMode)}
    >
      <h1>Grocieries List</h1>
    </StyledHeader>
  );
};

export default Header;
