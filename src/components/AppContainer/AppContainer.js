import { StyledAppContainer } from "../AppContainer/AppContainer.styled";
import GlobalStyles from "../GlobalStyles/GlobalStyles.styled";
import Header from "../Header/Header";
import ContentContainer from "../ContentContainer/ContentContainer";
import Footer from "../Footer/Footer";
import { ThemeProvider } from "styled-components";
import { useContext } from "react";
import DataContext from "../context/DataContext";

function AppContainer() {
  const { darkMode } = useContext(DataContext);
  const theme = {
    colors: {
      body_bg: darkMode ? "#1b1a55" : "lightskyblue",
      app_container_bg: darkMode ? "#9290c3" : "whitesmoke",
      content_container_bg: darkMode ? "#9290c3" : "whitesmoke",
      header_footer_bg: darkMode ? "#070f2b" : "#39ace7",
      add_search_form_bg: darkMode ? "#9290c3" : "whitesmoke",
      inputs_and_button_bg: darkMode ? "#1b1a55" : "lightskyblue",
      li_bg: darkMode ? "#1b1a55" : "lightskyblue",
      trash_icon: darkMode ? "rgba(245, 245, 245, 0.85)" : "whitesmoke",
      trash_icon_hover: "red",
      text_primary: darkMode ? "rgba(245, 245, 245, 0.85)" : "whitesmoke",
      text_header_footer: darkMode ? "#9290c3" : "whitesmoke",
      text_inputs_and_button: darkMode
        ? "rgba(245, 245, 245, 0.85)"
        : "#0784b5",
      text_inputs_placeholder: darkMode
        ? "rgba(245, 245, 245, 0.85)"
        : "rgba(7, 132, 181, 0.825)",
      text_empty_content_container: darkMode ? "#1b1a55" : "lightskyblue",
      text_primary_shadow: darkMode ? "none" : "#0784b5",
      text_inputs_shadow: darkMode ? "none" : "whitesmoke",
    },
    borders: {
      header_footer: darkMode
        ? "0.35rem solid #9290c3"
        : "0.35rem solid whitesmoke",
    },
    border_radius: {
      inputs_and_button: "4px",
      li: "6px",
    },
    padding: {
      header_footer: "0.35rem 1.35rem",
      inputs: "0.35rem 0.75rem",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <StyledAppContainer>
        <GlobalStyles />
        <Header />
        <ContentContainer />
        <Footer />
      </StyledAppContainer>
    </ThemeProvider>
  );
}

export default AppContainer;
