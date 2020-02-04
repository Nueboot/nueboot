import "typeface-heebo";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Heebo';
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
  }

  a {
    color: black;
    text-decoration: none;
  }

`;

export default GlobalStyle;
