import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  @media(max-width: 1024px) {
    html {
      font-size: 93.75%;
    }
  }

  @media(max-width: 767px) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    background-color: var(--background);
    color: var(--color-white);
    -webkit-font-smoothing: antialised;
  }

  html, body, #root {
    height: 100%;
  }

  body, input, textarea, button {
    font: 400 1rem "Roboto", sans-serif;
  }

  button{
    cursor: pointer;
  }

  a {
    color: var(--color-white) !important;
    text-decoration: none;

    &:hover {
      color: var(--main-color) !important;
    }
  }

  .flex-100 {
    flex: 1 1 100% !important;
  }

  img {
    height: auto;
    max-height: none;
    max-width: 100%;
  }

  @media (min-width: 768px) {
    .container, .container-lg, .container-md, .container-sm, .container-xl {
      max-width: 1400px;
      padding-left: 3rem;
      padding-right: 3rem;
    }
  }
`;
