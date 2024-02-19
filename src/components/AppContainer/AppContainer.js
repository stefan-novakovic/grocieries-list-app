import StyledAppContainer from "../AppContainer/AppContainer.styled";
import GlobalStyles from "../GlobalStyles/GlobalStyles.styled";
import Header from "../Header/Header";
import ContentContainer from "../ContentContainer/ContentContainer";
import Footer from "../Footer/Footer";
import { DataProvider } from "../context/DataContext";

function AppContainer() {
  return (
    <StyledAppContainer>
      <GlobalStyles />
      <Header />
      <DataProvider>
        <ContentContainer />
        <Footer />
      </DataProvider>
    </StyledAppContainer>
  );
}

export default AppContainer;
