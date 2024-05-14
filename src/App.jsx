import { useState } from 'react'
import './index.css'
import TaskForm from './components/TaskForm'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <header><h1>Task List</h1></header>
      <TaskForm></TaskForm>
    </div>
  )
}

export default App
