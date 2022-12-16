import DeleteButton from "../Buttons/DeleteButton";
import { ItemRow } from "./ItemList.styled";

function ItemList({id, name, value, click, item, onChange}) {
  return(
    <ItemRow>
      <input type='checkbox' id={id} name={name} value={value} onChange={onChange}/> {item}
      <DeleteButton onClick={click}/>
      {/* <button type="button" onClick={click}>Delete</button> */}
    </ItemRow>
  )
}

export default ItemList; 