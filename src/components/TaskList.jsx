import TaskItem from "./TaskItem"
import styles from './TaskList.module.css';

const TaskList = ({taskList, deleteTask, checkTask}) => {
  return (
    <ul className = {styles.tasks}>
        {taskList.sort((a,b) => b.id - a.id).map(task => (
            <TaskItem
                key={task.id}
                task = {task}
                deleteTask={deleteTask}
                checkTask={checkTask}
            />
        ))}
    </ul>
  )
}

export default TaskList