import styled from "styled-components";

export const AddButton = styled.button`
  background-color: #3C4048;
  padding-left: 30px; 
  padding-right: 30px;
  padding-top: 5px;
  padding-bottom: 5px; 
  border-radius: 20px; 
  border: none;
  margin-left: 15px; 
  cursor: pointer;
  color: white; 
  font-family: Candara, Calibri, Segoe, "Segoe UI", Optima, Arial, sans-serif; 
  font-size: 15px; 

  &:hover {
    border: solid;
    border-color: #3C4048;
    color: #3C4048;
    background-color: #00FFAB;
    font-weight: bold; 
  }
`

export const WriteTaskInput = styled.input`
  background-color: #00FFAB; 
  border: none;
  border-bottom: solid 3px ; 
  width: 50%; 
  padding: 5px;  
  border-color: black; 
  margin-bottom: 10px; 
  font-family: Candara, Calibri, Segoe, "Segoe UI", Optima, Arial, sans-serif; 
  font-size: 20px;
`