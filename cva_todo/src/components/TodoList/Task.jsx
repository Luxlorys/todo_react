import DeleteButton from "../button/DeleteButton";
import "./task.css";

export default function Task({ task, onDelete, setTask }) {
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

  return (
    <div className="form">
      <div className="task-content">
        <input
            className="form-check-input"
            type="checkbox"
            checked={task.isDone}
            onChange={handleCheckBox}
        />
        <label className="form-check-label">{task.isDone ? <del>{task.name}</del> : task.name}</label>
      </div>
      <DeleteButton onDelete={() => onDelete(task.id)} />
    </div>
  );
}
