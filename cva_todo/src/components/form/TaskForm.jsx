import AddButton from "../button/AddButton";
import "bootstrap/dist/css/bootstrap.min.css";
import "./taskForm.css";
import { useState } from "react";

export default function TaskForm({ tasks, setTask }) {
  const [taskName, setTaskName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: tasks.length + 1,
      name: taskName,
      isDone: false,
    };

    setTask([...tasks, newTask]);
    setTaskName("");
  };

  return (
    <div onSubmit={handleSubmit}>
      <form className="">
        <div className="">
          <input
            type="text"
            value={taskName}
            className="form-control"
            onChange={(e) => setTaskName(e.target.value)}
          />
        </div>
        <AddButton />
      </form>
    </div>
  );
}
