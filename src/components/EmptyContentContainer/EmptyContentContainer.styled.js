import styled from "styled-components";

const StyledEmptyContentContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 13.0325rem;
  padding-bottom: 3.849375rem;
  background-color: ${({ theme }) => theme.colors.content_container_bg};
  display: grid;
  place-content: center;

  @media screen and (max-width: 767px) {
    padding-top: 9.6575rem;
    padding-bottom: 3.036875rem;
  }

  p {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.text_empty_content_container};

    @media screen and (max-width: 767px) {
      font-size: 1.25rem;
    }
  }
`;

export default StyledEmptyContentContainer;
