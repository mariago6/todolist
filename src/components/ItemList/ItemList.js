import DeleteButton from "../Buttons/DeleteButton";
import { ItemRow, ItemLabel } from "./ItemList.styled";

function ItemList({checked, click, item, onChange, isCompleted, onClick}) {
  return(
    <ItemRow>
      <input type='checkbox' checked={checked} onChange={onChange}/> 
      <ItemLabel isSelected={isCompleted}>{item}</ItemLabel>
      <DeleteButton onClick={click}/>
      <button onClick={onClick}>Edit</button>
    </ItemRow>
  )
}

export default ItemList; 