import { useState } from "react";
import styles from "./TaskItem.module.css";
import { CheckIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import useFormatDate from "../hooks/useFormatDate";
import useFormatTime from "../hooks/useFormatTIme";

const TaskItem = ({ task, deleteTask, checkTask, editMode }) => {
  const [isCheck, setCheck] = useState(task.checked);

  const handleCheck = (e) => {
    setCheck(!isCheck);
    checkTask(task.id);
  };

  return (
    <li className={styles.task}>
      <div>
        <div className={styles["task-group"]}>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={isCheck}
            onChange={handleCheck}
            name={task.name}
            id={task.id}
          ></input>
          <label htmlFor={task.id} className={styles.label}>
            {task.name}
            <div className={styles.checkmark}>
              <CheckIcon strokeWidth={2} width={24} height={24} />
            </div>
          </label>
        </div>
        <div className="dateTime">
          {" "}
          {useFormatDate(task.now)} {useFormatTime(task.now)}
        </div>
      </div>
      <div className={styles["task-group"]}>
        <button
          className="btn"
          aria-label={`Edit ${task.name} task`}
          onClick={() => editMode(task)}
        >
          <PencilIcon />
        </button>
        <button
          className={`btn ${styles.delete}`} //a way to combine class and module css
          aria-label={`Delete ${task.name} task`}
          onClick={() => deleteTask(task.id)}
        >
          <TrashIcon />
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
