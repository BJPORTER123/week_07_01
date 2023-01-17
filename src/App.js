import './App.css';
import React, {useState} from 'react'

function App() {
  const [todos, settodos] = useState([
    {id : 1, name : "Walk Dogs"},
    {id: 2, name : "Clean Car"},
    {id: 3, name : "Do Shopping"}
  ])
  const [newItem, setNewItem] = useState("")

  const todoListtodos = todos.map((item)=>{
    return(
    <li key={item.id}>
      {item.name}<button onClick = {() => removeItemOnList(item.id)}>Remove To Do List Item</button>
    </li>
    
  )
  })

  const removeItemOnList = (id) => {
    const newToDoList = todos.filter((item) => item.id !== id)
    settodos(newToDoList)
  }
  
    const handleItemInput = (evt) => {
    setNewItem(evt.target.value)
  }

  const saveNewItem = (evt) => {
    evt.preventDefault()
    const newItemObject = {id : Date.now(), name : newItem}
    const nextItemList = [...todos, newItemObject]
    settodos(nextItemList)
    setNewItem("")
  }
  

  return (
    <div className="App">
    <h1 className="title">Todo List</h1>
    <hr></hr>
    <form className= "todo-form"onSubmit={saveNewItem}>
      <label htmlFor= "new-item">New ToDo:</label>
      <input required id= "new-item" type = "text" value = {newItem}  onChange={handleItemInput}></input>
      <input  type="submit" value="Save Item"></input>
    </form>

    <ul>{todoListtodos}</ul>

    <form></form>
  </div>
  );
}

export default App;

