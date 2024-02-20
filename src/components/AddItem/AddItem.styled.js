import styled from "styled-components";

export const StyledAddItem = styled.form`
  width: 100%;
  max-width: 820px;
  background-color: ${({ theme }) => theme.colors.add_search_form_bg};
  padding-top: calc(5.262rem + 0.35rem);
  padding-inline: calc(0.35rem + 0.5rem);
  padding-bottom: calc(0.35rem + 0.35rem);
  z-index: 2;
  position: fixed;
  display: flex;
  align-items: center;

  @media screen and (max-width: 767px) {
    padding-top: calc(3.634875rem + 0.75rem);
    padding-bottom: 0.5rem;
  }

  & > label {
    position: absolute;
    left: -10000px;
  }

  input {
    width: 100%;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    padding: ${({ theme }) => theme.padding.inputs};
    background-color: ${({ theme }) => theme.colors.inputs_and_button_bg};
    color: ${({ theme }) => theme.colors.text_inputs_and_button};
    text-shadow: 0 0 1px ${({ theme }) => theme.colors.text_inputs_shadow};
    border: none;
    border-radius: ${({ theme }) => theme.border_radius.inputs_and_button};
    outline: none;
  }

  input::placeholder {
    color: ${({ theme }) => theme.colors.text_inputs_placeholder};
  }

  button {
    width: 35px;
    height: 35px;
    margin-left: 0.85rem;
    background-color: ${({ theme }) => theme.colors.inputs_and_button_bg};
    color: ${({ theme }) => theme.colors.text_inputs_and_button};
    border: 3px solid ${({ theme }) => theme.colors.text_inputs_and_button};
    border-radius: ${({ theme }) => theme.border_radius.inputs_and_button};
    cursor: pointer;
    display: grid;
    place-content: center;

    @media screen and (max-width: 767px) {
      width: 32px;
      height: 32px;
      border: 2px solid ${({ theme }) => theme.colors.text_inputs_and_button};
    }
  }

  button:hover svg,
  button:focus-visible svg {
    filter: brightness(85%);
  }

  button:active svg {
    filter: brightness(70%);
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
