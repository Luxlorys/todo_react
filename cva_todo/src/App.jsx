import React, { useState } from "react";
import TaskForm from "./components/form/TaskForm";
import TaskList from "./components/TodoList/TaskList";
import 'bootstrap/dist/css/bootstrap.css';


function App() {

  const tasksList = [
    {
      name: "create todo app",
      isDone: false,
    }
  ];

  const [tasks, setTask] = useState(tasksList);


  return (
    <div className="container">
      <TaskForm tasks={tasks} setTask={setTask}/>
      <TaskList tasks={tasks} />
    </div>
      
  );
}

export default App;
