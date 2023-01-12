import React from "react";
import { useState, useEffect } from "react";
import {Container, ContainerCard, Card, ClearButton, TitleApp, Sun, SunButton} from './App.styled';
import WriteForm from "./components/WriteForm/WriteForm";
import ItemList from "./components/ItemList/ItemList";
import './index.css';
import TabTasks from "./components/TabTasks/TabTasks";
import { ThemeProvider } from "styled-components";
import {BsSun, BsFillMoonFill} from 'react-icons/bs';
import { motion } from "framer-motion";

const darkTheme = {
  title: 'white',
  body: '#3C4048'
}
const lightTheme = {
  title: '#3C4048',
  body: 'white'
}

function App() {
  const [currentTask, setCurrentTask] = useState(''); 
  const [tasks, setTasks] = useState([]);
  const [editTasks, setEditTasks] = useState(null); 
  const [currentEditTask, setCurrentEditTask] = useState(''); 
  const [currentTab, setCurrentTab] = useState('1');
  const [theme, setTheme] = useState("dark");

  function taskList(e) {
    e.preventDefault(); 
    setTasks(prevTasks => [ {
          id: new Date().getTime(),
          text: currentTask,
          completed: false
        }, ...prevTasks])
    setCurrentTask(''); 
  }

  function clearDoneTasks() {
     let filterToDoTasks;
     filterToDoTasks = tasks.filter(task => task.completed === false); 
     setTasks(filterToDoTasks); 
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
  }, [tasks]);

  function toggleTheme() {
    setTheme((current) => current === 'light' ? 'dark' : 'light')
  }
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Container>
        <TitleApp>To do list</TitleApp>
        <ContainerCard>
          <Card>
            <Sun>
              <SunButton type="button" onClick={toggleTheme}>{theme === 'light' ? <BsFillMoonFill /> : <BsSun />}</SunButton>
            </Sun>
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
            <ClearButton type="button" onClick={()=> setTasks([])}>Clear all</ClearButton>
            <ClearButton type="button" onClick={clearDoneTasks} >Clear all done</ClearButton>
          </Card>
        </ContainerCard>
      </Container>
    </ThemeProvider>
  );
}

export default App;
