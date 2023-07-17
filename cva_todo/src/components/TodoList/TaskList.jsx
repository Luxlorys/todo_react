import Task from "./Task";
import './taskList.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function TaskList({ tasks, setTasks }) {
  
  if (tasks.length === 0) {
    return <h3>No tasks yet</h3>
  } else {
    return (
      <div className="task-list">
        {tasks.map((task) => (
          <Task 
            key={task.id}
            task={task}
            tasks={tasks}
            setTask={setTasks}
          />
        ))}
      </div>
    );
  }
}
