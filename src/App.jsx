import { useState } from "react";
import "./index.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [taskList, setTaskList] = useState([]);

  //adding task to list
  const addTask = (task) => {
    console.log(task);
    setTaskList((prevState) => [...prevState, task]);
  };

  //update the checked status of each task item
  const checkTask = (id) => {
    setTaskList((prevState) =>
      prevState.map((task) =>
        task.id === id ? { ...task, checked: !task.checked } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTaskList((prevState) => prevState.filter((task) => task.id !== id));
  };

  const updateTask = (id) => {};

  return (
    <div className="container">
      <header>
        <h1>Task List</h1>
      </header>
      <TaskForm addTask={addTask}></TaskForm>
      {taskList && <TaskList taskList={taskList} deleteTask={deleteTask} checkTask={checkTask}/>}
    </div>
  );
}

export default App;
