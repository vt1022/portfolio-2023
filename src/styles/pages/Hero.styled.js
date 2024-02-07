import styled from 'styled-components'

export const StyledHero = styled.section`
  margin: 0 auto 2em;
  max-width: 380px;

  h1 {
    font-family: 'LimeLight';
    color: var(--primary);
  }

  p {
    text-align: left;
  }

  .hidden {
    display: none;
  }
`

export const SocialsContainer = styled.ul`
  display: flex;
  justify-content: center;
  margin: 20px 0;

  .button {
    width: 60px;
  }

  i {
    font-size: 28px;
  }
`
