import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  a, blockquote, body, button,  caption, div, figure, form, h1, h2, h3, h4, h5, h6, html, img, label, li,  ol, p, pre, span, ul {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    background: 0 0;
    font-size: 100%;
  }

  html { 
    box-sizing: border-box;
    font-size: 16px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    font-family: medium-content-sans-serif-font, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 1rem;
    line-height: 1.5;
    text-align: left;
    color: rgba(0, 0, 0, 0.8);
    position: relative;
    min-height: 100vh;
    font-weight: 400;
    background-color: rgba(255, 255, 255, 1);
  }

  ul {
    list-style-type: none;
  }

  a {
    color: inherit;
    text-decoration: none;   
  }

  h1, h2, h3, h4 {
    margin-bottom: .5rem;
    font-weight: 500;
    line-height: 1.2;
  }

  .h1, h1 {
    font-size: 2.5rem;
  }

  .h2, h2 {
    font-size: 2rem;
  }

  .h3, h3 {
    font-size: 1.75rem;
  }

  .h4, h4 {
    font-size: 1.5rem;
  }

  p {
    margin-bottom: 1rem;
  }

  input: {
    overflow: visible;
  }

  button: {
    -webkit-appearance: button;
    text-transform: none;    
    overflow: visible;
    font-family: inherit;
  }  

  hr {
    margin-top: 1rem;
    margin-bottom: 1rem;
    border: 0;
    border-top: 1px solid rgba(0,0,0,.1);
  }

  label {
    display: inline-block;
    margin-bottom: .5rem;
  }
`;