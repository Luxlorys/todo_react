import React from "react";
import TaskForm from "./components/form/TaskForm";
import TaskList from "./components/TodoList/TaskList";


function App() {
  return (
    <div>
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default App;
