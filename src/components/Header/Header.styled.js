import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  max-width: 820px;
  background-color: #39ace7;
  color: whitesmoke;
  text-shadow: 0 1px 4px #0784b5;
  padding: 0.35rem 1.5rem;
  border-bottom: 0.35rem solid whitesmoke;
  z-index: 3;
  position: fixed;
  top: 0;

  h1 {
    font-size: 2.5rem;
    letter-spacing: 3px;
    word-spacing: 2px;
    text-align: center;
  }
`;
