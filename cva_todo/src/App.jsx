import React, { useState } from "react";
import TaskForm from "./components/form/TaskForm";
import TaskList from "./components/TodoList/TaskList";
import './index.css';


function App() {
  
  const tasksList = [
    {
      id: 1,
      name: "create todo app",
      isDone: false,
    },
    {
      id: 2,
      name: "create todo app222",
      isDone: true,
    }
  ];

  const [tasks, setTask] = useState(tasksList);


  return (
    <div className="center">
      <TaskForm tasks={tasks} setTask={setTask}/>
      <TaskList tasks={tasks} setTasks={setTask} />
    </div>
      
  );
}

export default App;
