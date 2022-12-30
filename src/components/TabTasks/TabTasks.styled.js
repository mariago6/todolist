import styled from "styled-components";

export const Tab = styled.div`
  overflow: hidden;
  background-color: transparent; 
  margin-top: 20px;
  display: flex; 
  justify-content: space-around;  
  font-family: Candara, Calibri, Segoe, "Segoe UI", Optima, Arial, sans-serif; 
`

export const ButtonTab = styled.button`
  background-color: inherit;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;
  font-size: 17px;
  font-family: Candara, Calibri, Segoe, "Segoe UI", Optima, Arial, sans-serif; 
  font-weight: bold; 
  &:hover {
    color: white;
  }
  &:disabled {
    color: white;
  }
`




