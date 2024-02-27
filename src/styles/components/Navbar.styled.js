import styled from 'styled-components'

export const StyledNavbar = styled.nav`
  position: sticky;
  top: 0;
  z-index: 4;
  background: var(--background);

  padding-bottom: .3em;

  ul {
    display: flex;
    justify-content: center;
  }

  a {
    color: var(--body-text);
  }

  .nav-btn {
    padding: 0 0.6em;
  }

  .btn {
    cursor: pointer;
    transition: all 0.3s;

    &:hover a {
      color: var(--primary);
    }
  }
`
