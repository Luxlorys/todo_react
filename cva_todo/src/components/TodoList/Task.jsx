import DeleteButton from "../button/DeleteButton";
import "./task.css";


export default function Task({ task, onDelete, tasks, setTask }) {
  function handleCheckBox() {
    const updatedTask = {
      ...task,
      isDone: !task.isDone,
    };
    setTask((prevTasks) =>
      prevTasks.map((prevTask) =>
        prevTask.id === updatedTask.id ? updatedTask : prevTask
      )
    );
  }

  const handleDelete = (taskId) => {
    setTask(
      tasks.filter(task =>  task.id !== taskId)
    );
  }

  return (
    <div className="task">
      <div className="task-content">
        <input
            className="form-check-input"
            type="checkbox"
            checked={task.isDone}
            onChange={handleCheckBox}
        />
        <label className="form-check-label">{task.isDone ? <del>{task.name}</del> : task.name}</label>
      </div>
      <DeleteButton onDelete={() => handleDelete(task.id)} />
    </div>
  );
}
