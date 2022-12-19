import DeleteButton from "../Buttons/DeleteButton";
import { ItemRow, ItemLabel } from "./ItemList.styled";

function ItemList({id, name, value, click, item, onChange, isCompleted}) {
  return(
    <ItemRow>
      <input type='checkbox' id={id} name={name} value={value} onChange={onChange}/> 
      <ItemLabel isSelected={isCompleted}>{item}</ItemLabel>
      <DeleteButton onClick={click}/>
    </ItemRow>
  )
}

export default ItemList; 