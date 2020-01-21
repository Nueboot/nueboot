import { createGlobalStyle } from "styled-components";
import "typeface-heebo";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Heebo';
  }

  a {
    color: black;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

`;

export default GlobalStyle;
