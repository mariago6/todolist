import React from "react";
import { useState, useEffect } from "react";
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

  function editElement(i) {
    const updadtedTasks = [...tasks].map(task => {
      if(task.id === i) {
        task.text = currentEditTask;
      }
      return task; 
    });
    setTasks(updadtedTasks);
    setEditTasks(null);
    setCurrentEditTask(''); 
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
      onClick={() => {setCurrentEditTask(task.text); setEditTasks(task.id)}}
      onClick2={() => editElement(task.id)}
      backClick={() => setEditTasks(null)}
      condition ={editTasks === task.id}
      value={currentEditTask}
    />)
  })

  useEffect(() => { 
    const loadedTasks = JSON.parse(localStorage.getItem('tasks')); 
    loadedTasks && setTasks(loadedTasks); 
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks)); 
  }, [tasks])

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
