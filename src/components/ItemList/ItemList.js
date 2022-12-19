import DeleteButton from "../Buttons/DeleteButton";
import { ItemRow, ItemLabel } from "./ItemList.styled";

function ItemList({checked, click, item, onChange, isCompleted}) {
  return(
    <ItemRow>
      <input type='checkbox' checked={checked} onChange={onChange}/> 
      <ItemLabel isSelected={isCompleted}>{item}</ItemLabel>
      <DeleteButton onClick={click}/>
    </ItemRow>
  )
}

export default ItemList; 