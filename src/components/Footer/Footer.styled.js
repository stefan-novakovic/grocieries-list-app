import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 100%;
  max-width: 820px;
  padding: ${({ theme }) => theme.padding.header_footer};
  background-color: ${({ theme }) => theme.colors.header_footer_bg};
  color: ${({ theme }) => theme.colors.text_primary};
  text-shadow: 0 1px 4px ${({ theme }) => theme.colors.text_primary_shadow};
  border-top: ${({ theme }) => theme.borders.header_footer};
  z-index: 3;
  position: fixed;
  bottom: 0;

  p {
    font-size: 1.75rem;
    letter-spacing: 1px;
    text-align: center;

    @media screen and (max-width: 767px) {
      font-size: 1.25rem;
      letter-spacing: 0.5px;
    }
  }
`;
