import styled from "styled-components";

export const StyledListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.35rem;
  padding: 0.75rem 1rem;
  background-color: lightskyblue;
  color: whitesmoke;
  letter-spacing: 1.25px;
  text-shadow: 1px 2px 2px #0784b5;
  border-radius: 3px;

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
    display: flex;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  & button:hover svg,
  & button:focus-visible svg {
    color: red;
  }

  & button:active svg {
    filter: brightness(85%);
  }

  & button svg {
    color: whitesmoke;
    width: 28px;
    min-width: 28px;
    height: auto;
    min-height: 28px;

    @media screen and (max-width: 767px) {
      width: 24px;
      min-width: 24px;
      height: auto;
      min-height: 24px;
    }
  }
`;
