import {ButtonSubmit} from './SubmitEditButton.styled';
import {MdCancel, MdCheckCircle} from 'react-icons/md';

function SubmitEditButton({onClick, backClick}) {
  return(
    <div>
      <ButtonSubmit onClick={backClick}>
        <MdCancel />
      </ButtonSubmit>
      <ButtonSubmit color='true' onClick={onClick}>  
        <MdCheckCircle/>
      </ButtonSubmit>
    </div>
  )
}

export default SubmitEditButton; 