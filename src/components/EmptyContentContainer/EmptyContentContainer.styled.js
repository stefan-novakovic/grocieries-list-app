import styled from "styled-components";

const StyledEmptyContentContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  place-content: center;
  padding-top: 13.0325rem;
  padding-bottom: 3.849375rem;

  @media screen and (max-width: 767px) {
    padding-top: 9.6575rem;
    padding-bottom: 3.036875rem;
  }

  p {
    font-size: 1.6rem;
    color: rgba(57, 172, 231, 0.85);

    @media screen and (max-width: 767px) {
      font-size: 1.25rem;
    }
  }
`;

export default StyledEmptyContentContainer;
