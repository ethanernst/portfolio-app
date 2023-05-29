import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
  --white: #FCFCFA;
  --black: #040303;
  --gray: #838182;
  --transparent: #00000055;

  --projects: #816EED;
  --projects-light: #bfb5f4;
  --projects-dark: #433978;

  --videos: #70BEAF;
  --videos-light: #b6ddd5;
  --videos-dark: #3a6159;

  --renders: #FF5D7B;
  --renders-light: #feadbb;
  --renders-light: #82303f;

  --about: #ED7A4F;
  --about-light: #f5bba5;
  --about-light: #793f29;

  --z-index-home-background: 0;
  --z-index-home-popout: 25;
  --z-index-home-content: 50;
  }
`;

export default GlobalStyle;
