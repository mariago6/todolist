import React from "react";
import {AddButton, WriteTaskInput} from './WriteForm.styled'

function WriteForm({click, onChange, value}) {
  return(
    <form onSubmit={click}>
      <WriteTaskInput type='text' onChange={onChange} value={value} placeholder='Write a task'/>
      <AddButton type="submit"><strong>Add</strong></AddButton> 
    </form>
     
  )
}

export default WriteForm; 