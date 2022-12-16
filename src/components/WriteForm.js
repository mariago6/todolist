import React from "react";

function WriteForm({click, onChange}) {
  return(
    <div>
      <input type='text' onChange={onChange}/>
      <button type="button" onClick={click}>Add</button> 
    </div>
     
  )
}

export default WriteForm; 