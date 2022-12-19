import DeleteButton from "../Buttons/DeleteButton";
import { ItemRow, ItemLabel } from "./ItemList.styled";

function ItemList({checked, click, item, onChange, onChange2, isCompleted, onClick, condition, value}) {
  return(
    <ItemRow>
      <input type='checkbox' checked={checked} onChange={onChange}/> 
      {condition ? 
        <input type='text' onChange={onChange2} value={value}/> :
        <ItemLabel isSelected={isCompleted}>{item}</ItemLabel>
        }
      <DeleteButton onClick={click}/>
      <button type="submit" onClick={onClick}>Edit</button>
    </ItemRow>
  )
}

export default ItemList; 