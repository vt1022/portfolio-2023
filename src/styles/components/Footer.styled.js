import styled from 'styled-components'

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: flex-end;
  margin-top: 4rem;
  height: 55px;
  padding: 1rem;
  border-top: 1px solid var(--secondary);
  text-align: right;
  font-size: 12px;

  p {
    margin: 0;
  }

  img {
    margin-right: 1em;
    max-width: 120px;
    filter: grayscale(100%) opacity(0.6);
  }
`
