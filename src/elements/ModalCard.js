import styled from 'styled-components'

export default styled.div`
  position: relative;
  background: white;
  border-radius: 5px;
  box-shadow: 2px 2px 10px rgba(0,0,0,0.3);
  padding: 2em;
  z-index: 10;
  width: 30em;
  min-width: 20em;
  margin-bottom: 10vh;
  .close-button {
    position: absolute;
    top: 0;
    right: 0;
    outline: none;
    border: none;
    font-size: 1.7rem;
    :hover {
      cursor: pointer;
    }
  }
`