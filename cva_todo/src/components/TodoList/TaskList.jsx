import Task from "./Task";
import './taskList.css';

export default function TaskList({ tasks, setTasks }) {
  const handleDelete = (taskId) => {
    setTasks(
      tasks.filter(task =>  task.id !== taskId)
    );
  }
  if (tasks.length === 0) {
    return <h3>No tasks yet</h3>
  } else {
    return (
      <div className="task-list">
          {tasks.map((task) => (
            <Task 
              task={task}
              onDelete={() => handleDelete(task.id)}
              setTask={setTasks}
            />
          ))}
      </div>
    );
  }
}
