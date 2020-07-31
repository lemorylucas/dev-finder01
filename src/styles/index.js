import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    height: 100%;
    width: 100%;
  }

  body {
    font: 15px 'Roboto', sans-serif;
    background: #282c34;
    color: #fff;
    -webkit-font-smoothing: antialiased !important;
  }
`;