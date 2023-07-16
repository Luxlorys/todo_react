import Task from "./Task";

export default function TaskList({ tasks, setTasks }) {
  const handleDelete = (taskId) => {
    setTasks(
      tasks.filter(task =>  task.id !== taskId)
    );
  }
  return (
    <div>
        {tasks.map((task) => (
          <Task 
            task={task}
            onDelete={() => handleDelete(task.id)}
          />
        ))}
    </div>
  );
}
