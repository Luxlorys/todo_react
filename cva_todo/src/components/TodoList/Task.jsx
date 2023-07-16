import './task.css';

export default function Task({ task, onDelete }) {
    return (
        <div className="task">
            <div className="taskName">{task.name}</div>
            <div className="status">{task.isDone ? 'Done!' : 'Not yet'}</div>
            <div>id: {task.id}</div>
            <button onClick={() => onDelete(task.id)}>remove from list</button>
        </div>
    );
}