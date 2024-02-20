import styled from "styled-components";

export const StyledAddItem = styled.form`
  width: 100%;
  max-width: 820px;
  display: flex;
  align-items: center;
  padding-top: calc(5.262rem + 0.35rem);
  padding-bottom: calc(0.35rem + 0.35rem);
  padding-inline: calc(0.35rem + 0.5rem);
  background-color: whitesmoke;
  z-index: 2;
  position: fixed;

  @media screen and (max-width: 767px) {
    padding-top: calc(3.634875rem + 0.75rem);
    padding-bottom: 0.5rem;
  }

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

  button {
    width: 35px;
    height: 35px;
    display: grid;
    place-content: center;
    margin-left: 0.85rem;
    background-color: lightskyblue;
    color: #0784b5;
    border: 3px solid #0784b5;
    border-radius: 4px;
    cursor: pointer;

    @media screen and (max-width: 767px) {
      width: 32px;
      height: 32px;
      border: 2px solid #0784b5;
    }
  }

  button:hover,
  button:focus-visible {
    filter: brightness(95%);
  }

  button:active svg {
    filter: brightness(80%);
  }

  button svg {
    width: 17px;
    height: 17px;

    @media screen and (max-width: 767px) {
      width: 14px;
      height: 14px;
    }
  }
`;
