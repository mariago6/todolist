import styled from "styled-components";

export const ItemRow = styled.div`
  display: flex; 
  justify-content: center; 
`

export const ItemLabel = styled.label`
  text-decoration:${props => props.isSelected ? `line-through` : `none`};
`
