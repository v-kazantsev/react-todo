import React from 'react'
import styled from 'styled-components'

export default styled.div`
  width: 100%;
  border: 1px solid pink;
  border-radius: 3px;
  position: relative;
  padding: 1px 0;
  font-size: 0.8rem;
  background-color: pink;
  color: white;
  text-align: center;
  margin-top: 9px;
  ::before {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    top: -8px;
    width: 0px;
    height: 0px;    
    border-left: 8px dashed transparent;
    border-right: 8px dashed transparent;
    border-bottom: 8px solid pink;
  }
`