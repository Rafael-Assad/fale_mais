import styled from 'styled-components'

export const ButtonContainer = styled.button`
  padding: 8px;

  border: none;
  outline: none;

  border-radius: 8px;

  background-color: ${props => props.bgColor};
  color: ${props => props.textColor};

  cursor: pointer
  
`