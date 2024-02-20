import styled from "styled-components";

export const StyledAppContainer = styled.div`
  width: 100%;
  max-width: 820px;
  min-height: 100vh;
  margin-inline: auto;
  background-color: ${({ theme }) => theme.colors.app_container_bg};
`;
