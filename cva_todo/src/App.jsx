import React, { useState } from "react";
import TaskForm from "./components/form/TaskForm";
import TaskList from "./components/TodoList/TaskList";
import './index.css';


function App() {
  
  const [tasks, setTasks] = useState([]);

  return (
    <div className="center">
      <TaskForm tasks={tasks} setTask={setTasks}/>
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
      
  );
}

export default App;
