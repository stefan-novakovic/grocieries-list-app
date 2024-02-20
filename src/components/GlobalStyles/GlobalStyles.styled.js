import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: "Alkatra", system-ui;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        background-color: ${({ theme }) => theme.colors.body_bg};
    }
`;

export default GlobalStyles;
