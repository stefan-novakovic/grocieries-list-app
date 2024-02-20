import styled from "styled-components";

export const StyledContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  font-size: 1.35rem;
  color: #0784b5;
  background-color: whitesmoke;

  @media screen and (max-width: 767px) {
    font-size: 1rem;
  }
`;
