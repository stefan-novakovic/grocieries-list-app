import styled from "styled-components";

export const StyledListItem = styled.li`
  margin-bottom: 0.35rem;
  padding: 0.75rem 1rem;
  background-color: ${({ theme }) => theme.colors.li_bg};
  color: ${({ theme }) => theme.colors.text_primary};
  text-shadow: 1px 2px 2px ${({ theme }) => theme.colors.text_primary_shadow};
  border-radius: ${({ theme }) => theme.border_radius.li};
  letter-spacing: 1.25px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:last-child {
    margin-bottom: 0;
  }

  & input {
    margin-right: 1rem;
    width: 22px;
    height: 22px;
    cursor: pointer;

    @media screen and (max-width: 767px) {
      width: 20px;
      height: 20px;
    }
  }

  & label {
    display: flex;
    flex-grow: 1;
    cursor: pointer;
    ${({ checked }) => checked && "text-decoration: line-through"}
  }

  & button {
    margin-left: 1rem;
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: grid;
    place-content: center;
  }

  & button:hover svg,
  & button:focus-visible svg {
    color: ${({ theme }) => theme.colors.trash_icon_hover};
  }

  & button:active svg {
    filter: brightness(70%);
  }

  & button svg {
    width: 28px;
    min-width: 28px;
    height: auto;
    min-height: 28px;
    color: ${({ theme }) => theme.colors.trash_icon};

    @media screen and (max-width: 767px) {
      width: 24px;
      min-width: 24px;
      min-height: 24px;
    }
  }
`;
