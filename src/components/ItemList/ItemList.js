import DeleteButton from "../Buttons/DeleteButton/DeleteButton";
import EditButton from "../Buttons/EditButton/EditButton";
import SubmitEditButton from "../Buttons/SubmitEditButton/SubmitEditButton";
import { ItemRow, ItemLabel, CheckBoxButton, ButtonsContainer, EditInput } from "./ItemList.styled";

function ItemList({checked, click, item, onChange, onChange2, isCompleted, onClick, onClick2, backClick, condition, value}) {
  return(
    <>
      <ItemRow>
        <div>
          <CheckBoxButton type='checkbox' checked={checked} onChange={onChange}/> 
          {condition ? 
            <EditInput type='text' onChange={onChange2} value={value}/> :
            <ItemLabel isSelected={isCompleted}>{item}</ItemLabel>
            }
        </div>
        <ButtonsContainer>
          <DeleteButton onClick={click}/>
          {condition ?
            <SubmitEditButton type="submit" onClick={onClick2} backClick={backClick}/> :
            <EditButton type="submit" onClick={onClick} />
            }
        </ButtonsContainer>
      </ItemRow>
    </>
  )
}

export default ItemList; 