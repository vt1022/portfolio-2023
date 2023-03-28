import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  :root {
    --body-text: #DBD8E3;
    --background: #2A2438;
    --off-background: #352F44;
    --secondary: #5C5470;
    --primary: #DBD8E3;
  }
  html {
    box-sizing: border-box;
  }
  li {
    list-style: none;
  }
  h1, h2, h3, p {
    margin: .2em 0;
  }
`
