import React from "react";
import { useState, useEffect } from "react";
import {ContainerCard, Card, ClearButton} from './App.styled';
import WriteForm from "./components/WriteForm/WriteForm";
import ItemList from "./components/ItemList/ItemList";
import './index.css';
import TabTasks from "./components/TabTasks/TabTasks";
import { motion } from "framer-motion";

function App() {
  const [currentTask, setCurrentTask] = useState(''); 
  const [tasks, setTasks] = useState([]);
  const [editTasks, setEditTasks] = useState(null); 
  const [currentEditTask, setCurrentEditTask] = useState(''); 
  const [currentTab, setCurrentTab] = useState('1');

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

  const handleTabClick = (e) => {
    setCurrentTab(e.target.id);
}

  let totalItems = tasks.map((task, index) => {
    return(
      <ItemList 
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
      />
    )
  })

  let toDoItems = tasks.filter(task => task.completed === false).map((task, index) => {
    return(
      <ItemList 
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
      />
    )
  })

  let doneItems = tasks.filter(task => task.completed === true).map((task, index) => {
    return(
      <ItemList 
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
      />
    )
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
          <TabTasks 
            totaltasks={tasks.length} 
            todotasks={tasks.filter(task => task.completed === false).length} 
            donetasks={tasks.filter(task => task.completed === true).length}
            onClick={handleTabClick}
            disabled1={currentTab === '1' && true}
            disabled2={currentTab === '2' && true}
            disabled3={currentTab === '3' && true}
          />
          <div>
            {currentTab === '1' && totalItems}
            {currentTab === '2' && toDoItems}
            {currentTab === '3' && doneItems}
          </div>
          <ClearButton type="button" onClick={clearTaskList}>Clear all</ClearButton>
          
        </Card>
      </ContainerCard>
    </div>
  );
}

export default App;
