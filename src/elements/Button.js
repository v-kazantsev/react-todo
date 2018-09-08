import styled from 'styled-components'

export default styled.button` 
  font: inherit;
  background-color: violet;
  color: ${props => props.color || 'white'};
  font-size: ${props => props.large? '3rem' : '1rem'};
  width: ${props => props.float? '100%' : 'auto'};   
  padding: 0 0.3em;
  border: none;
  text-align: center;
  vertical-align: middle;
  display: inline-block;
  border-radius: ${props => props.rounded? '50%' : '3px'};
  outline: none;
`