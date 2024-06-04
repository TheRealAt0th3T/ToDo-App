import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import useFormatDate from "../hooks/useFormatDate";

function TaskForm({ addTask }) {
  const [task, setTask] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault(); //prevents browser from reloading completely
    addTask({
      name: task,
      checked: false,
      id: Date.now(),
      now: new Date().toISOString(),
    });
    setTask("");
  };

  return (
    <form className="todo" onSubmit={handleFormSubmit}>
      <div className="wrapper">
        <input
          type="text"
          id="task"
          className="input"
          value={task}
          onInput={(e) => setTask(e.target.value)}
          required
          //autoFocus //allows user to immediately type into field
          maxLength={50}
          placeholder="Enter Task"
        />
        <label htmlFor="task" className="label">
          Enter Task
        </label>
      </div>
      <button className="btn" label="Add Task" type="submit">
        <PlusCircleIcon className="size-6 text-blue-500" />
      </button>
    </form>
  );
}

export default TaskForm;
