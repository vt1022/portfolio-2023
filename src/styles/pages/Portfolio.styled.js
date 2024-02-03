import styled from 'styled-components'

export const StyledPortfolio = styled.section`
  .container {
    display: grid;
    /* grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); */
    grid-gap: 5em;
  }
`

export const Card = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(3, 1fr);
  position: relative;

  img {
    position: relative;
    z-index: -1;
    grid-column: 3 / span 999;
    grid-row: 1 / span 3;
    border-radius: 1%;
    width: 100%;
    /* filter: opacity(0.2); */
  }

  .info {
    padding: 0 10px;
    grid-column: 1 / span 2;
    grid-row: 1 / span 2;
    text-align: left;
  }

  .stack {
    display: flex;
    margin-top: 1em;
    height: 40px;

    img {
      margin-right: 10px;
      height: 100%;
      width: auto;
    }
  }
`
