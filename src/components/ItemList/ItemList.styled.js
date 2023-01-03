import styled from "styled-components";

export const ItemRow = styled.div`
  display: flex; 
  justify-content: space-between; 
  border: solid;
  border-color: #00FFAB; 
  margin: 5px;
  background-color: white;  
  color: black; 
  border-radius: 15px; 
  padding: 10px; 
  text-align: left; 
`

export const ItemLabel = styled.label`
  text-decoration:${props => props.isSelected ? `line-through` : `none`};
  text-decoration-color: #00FFAB; 
  text-decoration-thickness: 3px;
  font-size: 18px;
  margin-left: 15px;
  width: 100%;  
`

export const FormContainer = styled.div`
  display: flex;
  width: 100%;  
`

export const CheckBoxButton = styled.input`
    width: 1.3em;
    height: 1.3em;
    background-color: white;
    margin: 0;
    margin-top: 4px; 
    font: inherit;
    color: currentColor;
    border-radius: 50%;
    vertical-align: middle;
    border: 1px solid #ddd;
    transform: translateY(-0.075em);
    appearance: none;
    -webkit-appearance: none;
    outline: none;
    cursor: pointer;
    display: grid;
    place-content: center;

    &:before {
      content: "";
      width: 0.65em;
      height: 0.65em;
      transform: scale(0);
      transition: 120ms transform ease-in-out;
      box-shadow: inset 1em 1em var(--form-control-color);
      transform-origin: bottom left;
      clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
    }
    &:checked {
      background-color: #00FFAB; 
    }
    &:checked&:before {
      transform: scale(1);
      background-color: white; 
    }
`

export const ButtonsContainer = styled.div`
  display: flex; 
`

export const EditInput = styled.input`
  display: block; 
  border: none;
  border: solid 2px ; 
  border-radius: 5px; 
  border-color: #3C4048; 
  font-family: Candara, Calibri, Segoe, "Segoe UI", Optima, Arial, sans-serif; 
  font-size: 18px;
  margin-left: 15px;
  padding-left: 5px; 
  width: 90%; 
  height: auto;
`
