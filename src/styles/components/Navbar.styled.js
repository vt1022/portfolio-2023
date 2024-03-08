import styled from 'styled-components'
import breakpoints from '../../utils/breakpoints'

export const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--secondary);
  padding: 0 2rem;
  padding-bottom: 0.3em;
  background: var(--background);

  position: sticky;
  top: 0;
  z-index: 4;

  .title {
    padding-top: 2px;
    font-family: limelight;
    color: var(--primary);
  }

  ul {
    display: flex;
    justify-content: center;
  }

  a {
    color: var(--body-text);
    transition: all 0.3s ease-in;
  }

  .nav-btn {
    padding: 0 0.6em;
  }

  .btn {
    cursor: pointer;
    transition: all 0.3s;

    &:not(:first-child)::before {
      content: '|';
      margin-right: 1em;
      color: var(--secondary);
    }

    &:hover a {
      color: var(--primary);
    }

    &.active a {
      color: var(--primary);
    }
  }

  @media ${breakpoints.xs} {
    justify-content: center;

    .title {
      display: none;
    }
  }
`
