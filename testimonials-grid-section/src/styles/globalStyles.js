import { createGlobalStyle } from 'styled-components';

const globalStyles = createGlobalStyle`
  :root {
    --violet: hsl(263, 55%, 52%);
    --grayish-blue: hsl(217, 19%, 35%);
    --dark-blue: hsl(219, 29%, 14%);
    --white: hsl(0, 0%, 100%);
    --light-gray: hsl(0, 0%, 81%);
    --light-blue: hsl(210, 46%, 95%);
  }

  html {
    box-sizing: border-box;
    font-size: 13px;
  }

  * {
    margin: 0;
    padding: 0;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    font-weight: normal;
    font-family: 'Barlow Semi Condensed', sans-serif;
  }

  ol, ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  #root, .App {
    width: 100vw;
    height: 100vh;
  }
`;

export default globalStyles;
