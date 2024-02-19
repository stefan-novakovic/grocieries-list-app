import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: "Permanent Marker", cursive;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
    }
`;
