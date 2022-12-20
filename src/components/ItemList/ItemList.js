import DeleteButton from "../Buttons/DeleteButton/DeleteButton";
import EditButton from "../Buttons/EditButton/EditButton";
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
      <EditButton type="submit" onClick={onClick} />
    </ItemRow>
  )
}

export default ItemList; 