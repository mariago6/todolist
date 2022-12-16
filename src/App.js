import React from "react";
import { useState } from "react";
import {ContainerCard, Card} from './App.styled';
import WriteForm from "./components/WriteForm";
import ItemList from "./components/ItemList";

function App() {
  const [currentTask, setCurrentTask] = useState(''); 
  const [tasks, setTasks] = useState([]); 
 

  function taskList() {
    setTasks([...tasks, currentTask])
  }

  function clearTaskList() {
    setTasks([]); 
  }

  function removeElement(i) {
    let removeTask = tasks.splice(i, 1)
    setTasks(tasks.filter(element => element !== removeTask))
  }

  let items = tasks.map((task, index) => {
    return(<ItemList key={index} id={index} name={task} value={task} item={task} click={() => removeElement(index)}/>)
  })

  return (
    <div>
      <ContainerCard>
        <Card>
          <WriteForm onChange={(e) => setCurrentTask(e.target.value)} click={taskList}/>
          <div className="d-flex ">
            <button>{tasks.length} items</button>
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
            <button type="button" onClick={clearTaskList}>Clear all</button>
          </div>
          <div>
            {items}
          </div>
        </Card>
      </ContainerCard>
    </div>
  );
}

export default App;
