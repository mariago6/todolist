import { RemoveButton } from './DeleteButton.styled';
import {RiDeleteBin6Line} from 'react-icons/ri';


function DeleteButton({onClick}) {
  return(
    <div>
      <RemoveButton onClick={onClick}>  
        <RiDeleteBin6Line/>
      </RemoveButton>
    </div>
  )
}

export default DeleteButton; 