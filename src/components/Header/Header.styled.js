import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  max-width: 820px;
  padding: ${({ theme }) => theme.padding.header_footer};
  background-color: ${({ theme }) => theme.colors.header_footer_bg};
  color: ${({ theme }) => theme.colors.text_header_footer};
  text-shadow: 0 1px 4px ${({ theme }) => theme.colors.text_primary_shadow};
  border-bottom: ${({ theme }) => theme.borders.header_footer};
  z-index: 3;
  cursor: pointer;
  position: fixed;
  top: 0;

  &:hover {
    filter: brightness(98%);
  }

  h1 {
    font-size: 2.5rem;
    letter-spacing: 3px;
    word-spacing: 2px;
    text-align: center;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;

    @media screen and (max-width: 767px) {
      font-size: 1.75rem;
      letter-spacing: 2px;
      word-spacing: 1px;
    }
  }
`;
