import styled from "styled-components";

export const ContainerCard = styled.div`
  display:flex; 
  justify-content: center;
  align-items: center;
`
export const Card = styled.div`
  border-radius: 15px; 
  background-color: #00FFAB;
  color: black;  
  width: 65%;
  height: auto;
  min-height: 400px;  
  position: relative;
  top:-100px; 
  padding: 20px; 
`
export const ClearButton = styled.button`
  background-color: #286953;
  padding-left: 40px; 
  padding-right: 40px;
  padding-top: 10px;
  padding-bottom: 10px; 
  border-radius: 40px; 
  border: none;
  margin-left: 5px; 
  cursor: pointer;
  color: white; 
  font-size: 22px; 
  font-family: Candara, Calibri, Segoe, "Segoe UI", Optima, Arial, sans-serif; 
`

export const CountTasks = styled.div`
  display: flex;
  justify-content: space-around; 
`