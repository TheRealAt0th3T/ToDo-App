import styles from "./TaskItem.module.css";
import { CheckIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const TaskItem = ({ task }) => {
  const [isCheck, setCheck] = useState(task.checked);

  const handleCheck = (e) => {
    setCheck(!isCheck);
  };

  return (
    <li className={styles.task}>
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
    </li>
  );
};

export default TaskItem;
