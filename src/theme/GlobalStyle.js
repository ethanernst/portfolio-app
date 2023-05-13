import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
  --background: #040303;
  --white: #FCFCFA;
  --transparent: #00000055;

  --code-header: #816EED;

  --gray: #838182;
  --green: #70BEAF;
  --purple: #816EED;
  --orange: #ED7A4F;
  --red: #FF5D7B;

  --z-index-home-background: 0;
  --z-index-home-content: 50;
  --z-index-nav: 10;
  --z-index-nav-links: 15;
  --z-index-nav-button: 20;
  --z-index-content: 20;
  }
`;

export default GlobalStyle;
