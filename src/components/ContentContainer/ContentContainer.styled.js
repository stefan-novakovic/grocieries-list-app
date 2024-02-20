import styled from "styled-components";

export const StyledContentContainer = styled.section`
  font-size: 1.35rem;
  background-color: ${({ theme }) => theme.colors.content_container_bg};
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  @media screen and (max-width: 767px) {
    font-size: 1rem;
  }
`;
