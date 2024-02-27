import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --body-text: #DBD8E3;
    --background: #2A2428;
    --off-background: #1A1618;
    --secondary: #5C5470;
    --primary: #8A82E2;
  }

  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
  }

  h1, h2, h3, p {
    margin: .2em 0;
  }

  @media (prefers-color-scheme: light) {
    :root {
      --primary: #8354ff;
      --body-text: #121212;
      --background: #F7F2FA;
    }

    a:hover {
      color: #747bff;
    }

    button {
      background-color: #f9f9f9;
    }
  }
`
