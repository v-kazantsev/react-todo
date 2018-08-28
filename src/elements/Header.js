import styled from 'styled-components';

export default styled.h1`
  color: violet;
  text-align: center;
  margin-bottom: 1.5em;
  ::before,
  ::after {
    content:'';
    display: block;
    height: 1em;
    background: pink;
  }
`;