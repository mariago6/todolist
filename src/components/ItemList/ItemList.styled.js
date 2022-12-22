import styled from "styled-components";

export const ItemRow = styled.div`
  display: flex; 
  justify-content: center; 
  border: solid;
  border-color: #00FFAB; 
  height: 40px; 
  margin: 5px;
  background-color: white;  
  color: black; 
`

export const ItemLabel = styled.label`
  text-decoration:${props => props.isSelected ? `line-through` : `none`};
`
