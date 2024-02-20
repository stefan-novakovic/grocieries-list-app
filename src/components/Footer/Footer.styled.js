import styled from "styled-components";

export const StyledFooter = styled.footer`
  max-width: 820px;
  width: 100%;
  background-color: #39ace7;
  color: whitesmoke;
  text-shadow: 0 1px 4px #0784b5;
  padding: 0.3rem 1.5rem;
  position: fixed;
  bottom: 0;
  border-top: 0.35rem solid whitesmoke;

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
