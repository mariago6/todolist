import { ButtonEdit } from "./EditButton.styled";
import {FaRegEdit} from 'react-icons/fa' 

function EditButton({onClick}) {
  return(
    <div>
      <ButtonEdit onClick={onClick}>  
        <FaRegEdit />
      </ButtonEdit>
    </div>
  )
}

export default EditButton; 