import "./index.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import EditForm from "./components/EditForm";

import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [taskList, setTaskList] = useLocalStorage("todo-tasks", []);
  const [editedTask, setEditedTask] = useLocalStorage(null);
  const [isEdited, setIsEdited] = useLocalStorage(false);

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

  const updateTask = (task) => {
    setTaskList((prevState) =>
      prevState.map((t) => (t.id === task.id ? { ...t, name: task.name } : t))
    );
    closeEditMode();
  };

  const closeEditMode = () => {
    setIsEdited(false);
  };

  const editMode = (task) => {
    setEditedTask(task);
    setIsEdited(true);
  };

  return (
    <div className="container">
      <header>
        <h1>Task List</h1>
      </header>
      {isEdited && (
        <EditForm
          editedTask={editedTask}
          updateTask={updateTask}
          closeEditMode={closeEditMode}
        />
      )}
      <TaskForm addTask={addTask}></TaskForm>
      {taskList && (
        <TaskList
          taskList={taskList}
          deleteTask={deleteTask}
          checkTask={checkTask}
          editMode={editMode}
        />
      )}
    </div>
  );
}

export default App;
