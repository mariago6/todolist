
function ItemList({id, name, value, click, item, onChange}) {
  return(
    <div>
      <input type='checkbox' id={id} name={name} value={value} onChange={onChange}/> {item}
      <button type="button" onClick={click}>Delete</button>
    </div>
  )
}

export default ItemList; 