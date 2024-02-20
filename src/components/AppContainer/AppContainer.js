import { StyledAppContainer } from "../AppContainer/AppContainer.styled";
import GlobalStyles from "../GlobalStyles/GlobalStyles.styled";
import Header from "../Header/Header";
import ContentContainer from "../ContentContainer/ContentContainer";
import Footer from "../Footer/Footer";
import { DataProvider } from "../context/DataContext";
import { ThemeProvider } from "styled-components";

function AppContainer() {
  const theme = {
    colors: {
      body_bg: "lightskyblue",
      app_container_bg: "whitesmoke",
      content_container_bg: "whitesmoke",
      header_footer_bg: "#39ace7",
      add_search_form_bg: "whitesmoke",
      inputs_and_button_bg: "lightskyblue",
      li_bg: "lightskyblue",
      trash_icon: "whitesmoke",
      trash_icon_hover: "red",
      text_primary: "whitesmoke",
      text_inputs_and_button: "#0784b5",
      text_inputs_placeholder: "rgba(7, 132, 181, 0.825)",
      text_empty_content_container: "lightskyblue",
      text_primary_shadow: "#0784b5",
      text_inputs_shadow: "whitesmoke",
    },
    borders: {
      header_footer: "0.35rem solid whitesmoke",
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
        <DataProvider>
          <ContentContainer />
          <Footer />
        </DataProvider>
      </StyledAppContainer>
    </ThemeProvider>
  );
}

export default AppContainer;
