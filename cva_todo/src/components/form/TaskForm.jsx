import AddButton from "../button/AddButton";
import "bootstrap/dist/css/bootstrap.min.css";
import "./taskForm.css";
import { useState } from "react";

export default function TaskForm({ tasks, setTask }) {
  const [taskName, setTaskName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (taskName === "") {
      // Handle the empty input case
      alert("Please enter a task name");
      return;
    }

    const newTask = {
      id: tasks.length + 1,
      name: taskName,
      isDone: false,
    };
    setTask([...tasks, newTask]);
    setTaskName("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="task-form">
        <div className="input-field">
          <input
            type="text"
            value={taskName}
            className="rounded-input"
            placeholder="enter your task here"
            onChange={(e) => setTaskName(e.target.value)}
          />
        </div>
        <AddButton onClick={handleSubmit} />
      </form>
    </div>
  );
}
