import styled from "styled-components";

export const ItemRow = styled.div`
  display: flex; 
  justify-content: space-between; 
  border: solid;
  border-color: #00FFAB; 
  height: 40px; 
  margin: 5px;
  background-color: white;  
  color: black; 
  border-radius: 15px; 
  padding-left: 20px; 
  padding-right: 30px; 
  padding-top: 10px; 
`

export const ItemLabel = styled.label`
  text-decoration:${props => props.isSelected ? `line-through` : `none`};
  text-decoration-color: #00FFAB; 
  text-decoration-thickness: 3px;
  font-size: 18px;
  margin-left: 15px; 
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

export const ButtonsContainer = styled.div`
  display: flex; 
`

export const EditInput = styled.input`
  border: none;
  border: solid 2px ; 
  border-radius: 5px; 
  border-color: #00FFAB; 
  font-family: Candara, Calibri, Segoe, "Segoe UI", Optima, Arial, sans-serif; 
  font-size: 18px;
  margin-left: 15px;
  padding-left: 5px;  
`
