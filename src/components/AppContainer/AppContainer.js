import { Theme as ThemeProvider } from "../Theme/Theme";
import { StyledAppContainer } from "../AppContainer/AppContainer.styled";
import GlobalStyles from "../GlobalStyles/GlobalStyles.styled";
import Header from "../Header/Header";
import ContentContainer from "../ContentContainer/ContentContainer";
import Footer from "../Footer/Footer";

function AppContainer() {
  return (
    <ThemeProvider>
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
