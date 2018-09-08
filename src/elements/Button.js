import styled from 'styled-components'

export default styled.button` 
  font: inherit;
  background-color: violet;
  background-image: linear-gradient(180deg, violet, pink);
  color: ${props => props.color || 'white'};
  font-size: ${props => props.large? '3rem' : '1rem'};
  width: ${props => props.float? '100%' : 'auto'};   
  padding: ${props => props.rounded ? '0 0.3em' : '0.3em 0.6em'};
  margin-top: 0.5em;
  margin-right: 0.5em;
  border: none;
  text-align: center;
  vertical-align: middle;
  display: inline-block;
  border-radius: ${props => props.rounded? '50%' : '3px'};
  outline: none;
  :hover {
    cursor: pointer;
  }
`