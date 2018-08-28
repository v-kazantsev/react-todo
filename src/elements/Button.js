import styled from 'styled-components';

export default styled.button`
  background: violet;
  color: pink;
  font-size: ${props => props.large? '3rem' : '1rem'};
  font-style: bold;
  padding: 0 0.3em;
  border: none;
  text-align: center;
  display: inline-block;
  border-radius: ${props => props.rounded? '50%' : '3px'};
  outline: none;
`;