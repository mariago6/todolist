import React from "react";
import { useState } from "react";
import {ContainerCard, Card} from './App.styled';
import WriteForm from "./components/WriteForm";
import ItemList from "./components/ItemList/ItemList";

function App() {
  const [currentTask, setCurrentTask] = useState(''); 
  const [tasks, setTasks] = useState([]);
  const [editTasks, setEditTasks] = useState(null); 
  const [currentEditTask, setCurrentEditTask] = useState(''); 

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

  function checkedElement(i) {
    const updadtedTasks = [...tasks].map(task => {
      if(task.id === i) {
        task.completed = !task.completed
      }
      return task; 
    });
    setTasks(updadtedTasks); 
  }

  let items = tasks.map((task, index) => {
    return(<ItemList 
      key={task.id} 
      checked={task.completed}
      item={task.text} 
      click={() => removeElement(index)} 
      isCompleted={task.completed}
      onChange={() => checkedElement(task.id)} 
      onChange2={(e) => setCurrentEditTask(e.target.value)}
      onClick={() => setEditTasks(task.id)}
      condition ={editTasks === task.id}
      value={currentEditTask}
    />)
  })

  return (
    <div>
      <ContainerCard>
        <Card>
          <WriteForm onChange={(e) => setCurrentTask(e.target.value)} click={taskList} value={currentTask}/>
          <div className="d-flex ">
            <button type="button" onClick={clearTaskList}>Clear all</button>
            <p>{tasks.length} {tasks.length <= 1 ? 'task' : 'tasks'}</p>
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
