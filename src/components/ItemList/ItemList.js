import DeleteButton from "../Buttons/DeleteButton/DeleteButton";
import EditButton from "../Buttons/EditButton/EditButton";
import SubmitEditButton from "../Buttons/SubmitEditButton/SubmitEditButton";
import { ItemRow, ItemLabel, CheckBoxButton, ButtonsContainer, EditInput, FormContainer} from "./ItemList.styled";

function ItemList({checked, click, item, onChange, onChange2, isCompleted, onClick, onClick2, backClick, condition, value}) {
  return(
    <>
      <ItemRow>
        <FormContainer>
          <CheckBoxButton type='checkbox' checked={checked} onChange={onChange}/> 
          {condition ? 
            <EditInput type='text' onChange={onChange2} value={value}/> :
            <ItemLabel isSelected={isCompleted}>{item}</ItemLabel>
            }
        </FormContainer>
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