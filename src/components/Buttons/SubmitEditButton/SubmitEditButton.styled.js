import styled from "styled-components";


export const ButtonSubmit = styled.button`
  color: ${props => props.color ? `green` : `red`};
  background-color: transparent; 
  border: none; 
  cursor: pointer;
  font-size: 18px;
`
