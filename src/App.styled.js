import styled from "styled-components";

export const TitleApp = styled.h1`
  text-align: center;
  font-size: 45px; 
  font-weight:350; 
  letter-spacing:1px;
  text-transform: uppercase;
  display: grid;
  grid-template-columns: 1fr max-content 1fr;
  grid-template-rows: 27px 0;
  grid-gap: 20px;
  align-items: center;
  //color: white; 
  color: ${(props) => props.theme.title}; 
  
  &:after {
    content: " ";
    display: block;
    border-bottom: 1px solid ${(props) => props.theme.title};
    border-top: 1px solid ${(props) => props.theme.title};
    height: 5px;
  }
  &:before {
    content: " ";
    display: block;
    border-bottom: 1px solid ${(props) => props.theme.title};
    border-top: 1px solid ${(props) => props.theme.title};
    height: 5px;
  }
`

export const Container = styled.div`
  display:flex; 
  flex-direction: column;
  // background-color: #3C4048;
  background-color: ${(props) => props.theme.body};
  position:absolute;
  top:0px;
  right:0px;
  bottom:0px;
  left:0px;
  height: 100%;
`
export const ContainerCard = styled.div`
  display: flex;
  justify-content: center; 
`

export const Card = styled.div`
  border-radius: 15px; 
  background-color: #00FFAB;
  color: black;  
  width: 65%;
  height: auto;
  min-height: 400px;  
  position: relative;
  //top: 30px; 
  padding: 20px; 
  margin-bottom: 50px; 
  box-shadow: 5px 5px 10px;
`
export const ClearButton = styled.button`
  background-color: #3C4048;
  padding-left: 25px; 
  padding-right: 25px;
  padding-top: 5px;
  padding-bottom: 5px; 
  border-radius: 40px; 
  border: none;
  margin-top: 5px; 
  margin-left: 5px; 
  cursor: pointer;
  color: white; 
  font-size: 15px; 
  font-family: Candara, Calibri, Segoe, "Segoe UI", Optima, Arial, sans-serif; 
  min-width: 150px; 

  &:hover {
    border: solid 2px #3C4048;
    color: #3C4048;
    background-color: #00FFAB;
    font-weight: bold; 
  }
`

export const Sun = styled.div`
  display: flex; 
  justify-content: end; 
  margin-top: -5px; 
  font-size: 30px;
  border: none;
  background-color: transparent; 
  cursor: pointer; 
`

export const SunButton = styled.button`
  font-size: 30px;
  border: none;
  background-color: transparent; 
  cursor: pointer; 
`
