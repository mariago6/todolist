import React from "react";

function WriteForm({click, onChange, value}) {
  return(
    <form onSubmit={click}>
      <input type='text' onChange={onChange} value={value}/>
      <button type="submit">Add</button> 
    </form>
     
  )
}

export default WriteForm; 