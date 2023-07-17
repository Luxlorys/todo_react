import React, { useState } from "react";
import TaskForm from "./components/form/TaskForm";
import TaskList from "./components/TodoList/TaskList";
import './index.css';


function App() {
  
  const [tasks, setTask] = useState([]);


  return (
    <div className="center">
      <TaskForm tasks={tasks} setTask={setTask}/>
      <TaskList tasks={tasks} setTasks={setTask} />
    </div>
      
  );
}

export default App;
