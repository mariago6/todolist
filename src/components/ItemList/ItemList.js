import DeleteButton from "../Buttons/DeleteButton/DeleteButton";
import EditButton from "../Buttons/EditButton/EditButton";
import SubmitEditButton from "../Buttons/SubmitEditButton/SubmitEditButton";
import { ItemRow, ItemLabel, CheckBoxButton } from "./ItemList.styled";

function ItemList({checked, click, item, onChange, onChange2, isCompleted, onClick, onClick2, backClick, condition, value}) {
  return(
    <ItemRow>
      <CheckBoxButton type='checkbox' checked={checked} onChange={onChange}/> 
      {condition ? 
        <input type='text' onChange={onChange2} value={value}/> :
        <ItemLabel isSelected={isCompleted}>{item}</ItemLabel>
        }
      <DeleteButton onClick={click}/>
      {condition ?
        <SubmitEditButton type="submit" onClick={onClick2} backClick={backClick}/> :
        <EditButton type="submit" onClick={onClick} />
        }
    </ItemRow>
  )
}

export default ItemList; 