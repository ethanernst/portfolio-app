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
  --renders-dark: #82303f;

  --about: #ED7A4F;
  --about-light: #f5bba5;
  --about-dark: #793f29;

  --button-github: #6e5494;
  --button-project: #838182;

  --z-index-home-background: 0;
  --z-index-home-popout: 25;
  --z-index-home-content: 50;
  }
`;

export default GlobalStyle;
