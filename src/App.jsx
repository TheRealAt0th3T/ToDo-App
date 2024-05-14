import { useState } from 'react'
import './index.css'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList';


function App() {
  
  const[taskList, setTaskList] = useState([]);

  //adding task to list
  const addTask = (task) => {
    console.log(task);
    setTaskList(prevState => [...prevState, task])
  }

  return (
    <div className='container'>
      <header><h1>Task List</h1></header>
      <TaskForm addTask={addTask}></TaskForm>
      {taskList && <TaskList taskList={taskList}/>}
    </div>
  )
}

export default App
