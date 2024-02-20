import styled from "styled-components";

export const StyledSearchItem = styled.form`
  width: 100%;
  max-width: 820px;
  background-color: ${({ theme }) => theme.colors.add_search_form_bg};
  padding-top: 9.32225rem;
  padding-inline: calc(0.35rem + 0.5rem);
  padding-bottom: calc(0.35rem + 0.35rem);
  z-index: 1;
  position: fixed;
  display: flex;
  align-items: center;

  @media screen and (max-width: 767px) {
    padding-top: 7.27125rem;
    padding-bottom: 0.75rem;
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
`;
