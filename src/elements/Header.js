import styled from 'styled-components'

export default styled.h1`
  color: violet;
  ::before,
  ::after {
    content:'';
    display: block;
    height: 1em;
    background: pink;
    background-image: linear-gradient(90deg, violet, pink)
  }
`