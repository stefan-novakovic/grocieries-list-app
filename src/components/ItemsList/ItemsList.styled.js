import styled from "styled-components";

export const StyledItemsList = styled.ul`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  width: 100%;
  list-style-type: none;
  padding-inline: 0.35rem;
  padding-top: 13.03225rem;
  padding-bottom: calc(3.85rem + 0.35rem);

  @media screen and (max-width: 767px) {
    padding-top: 10.4075rem;
    padding-bottom: calc(2.724375rem + 0.75rem);
  }
`;
