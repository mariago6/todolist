import {ButtonSubmit, ButtonContainer} from './SubmitEditButton.styled';
import {MdCancel, MdCheckCircle} from 'react-icons/md';

function SubmitEditButton({onClick, backClick}) {
  return(
    <ButtonContainer>
      <ButtonSubmit onClick={backClick}>
        <MdCancel />
      </ButtonSubmit>
      <ButtonSubmit color='true' onClick={onClick}>  
        <MdCheckCircle/>
      </ButtonSubmit>
    </ButtonContainer>
  )
}

export default SubmitEditButton; 