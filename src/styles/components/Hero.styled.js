import styled from 'styled-components'

export const StyledHero = styled.section`
  margin: 2em auto;
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
  padding-top: 30px;
  margin: 0 0 20px;

  .button {
    width: 60px;
  }

  i {
    font-size: 28px;
  }
`
