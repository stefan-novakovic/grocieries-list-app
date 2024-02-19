import styled from "styled-components";

export const StyledSearchItem = styled.form`
  width: 100%;
  max-width: 820px;
  display: flex;
  align-items: center;
  padding-top: 9.32225rem;
  padding-bottom: calc(0.35rem + 0.35rem);
  padding-inline: calc(0.35rem + 0.5rem);
  background-color: whitesmoke;
  z-index: 1;
  position: fixed;

  & > label {
    position: absolute;
    left: -10000px;
  }

  input {
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    width: 100%;
    padding: 0.35rem 0.75rem;
    outline: none;
    background-color: lightskyblue;
    color: #0784b5;
    text-shadow: 0 0 1px whitesmoke;
    border: none;

    border-radius: 4px;
  }

  input::placeholder {
    color: rgba(7, 132, 181, 0.825);
    text-shadow: 0 0 1px whitesmoke;
  }
`;
