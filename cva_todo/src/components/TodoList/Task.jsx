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
    <div>
      <div>
        <input
          type="checkbox"
          checked={task.isDone}
          onChange={handleCheckBox}
        />
        <span>{task.isDone ? <del>{task.name}</del> : task.name}</span>
      </div>
      <div>{task.isDone ? "Done!" : "Not yet"}</div>
      <button onClick={() => onDelete(task.id)}>remove from list</button>
    </div>
  );
}
