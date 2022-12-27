import styled from "styled-components";

export const ItemRow = styled.div`
  display: flex; 
  // justify-content: center; 
  border: solid;
  border-color: #00FFAB; 
  height: 40px; 
  margin: 5px;
  background-color: white;  
  color: black; 
  border-radius: 15px; 
  padding-left: 20px; 
  padding-top: 10px; 
`

export const ItemLabel = styled.label`
  text-decoration:${props => props.isSelected ? `line-through` : `none`};
  
`

export const CheckBoxButton = styled.input`
  width: 1.3em;
  height: 1.3em;
  border-radius: 50%;
  vertical-align: middle;
  border: 1px solid #ddd;
  // appearance: none;
  // -webkit-appearance: none;
  outline: none;
  cursor: pointer;

`
