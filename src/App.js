import React from "react";
import { useState } from "react";
import {ContainerCard, Card} from './App.styled';
import WriteForm from "./components/WriteForm";
import ItemList from "./components/ItemList/ItemList";

function App() {
  const [currentTask, setCurrentTask] = useState(''); 
  const [tasks, setTasks] = useState([]);

  function taskList(e) {
    e.preventDefault(); 
    setTasks([...tasks, 
      {
        id: new Date().getTime(),
        text: currentTask,
        completed: false
      }]);
    setCurrentTask(''); 
  }

  function clearTaskList() {
    setTasks([]); 
  }

  function removeElement(i) {
    let removeTask = tasks.splice(i, 1);
    setTasks(tasks.filter(element => element !== removeTask));
  }

  function editElement(i) {

  }

  let items = tasks.map((task, index) => {
    return(<ItemList key={index} id={task.id} name={task.text} value={task.text} item={task.text} click={() => removeElement(index)} isCompleted={task.completed} />)
  })

  return (
    <div>
      <ContainerCard>
        <Card>
          <WriteForm onChange={(e) => setCurrentTask(e.target.value)} click={taskList} value={currentTask}/>
          <div className="d-flex ">
            <button type="button" onClick={clearTaskList}>Clear all</button>
            <p>{tasks.length} items</p>
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
