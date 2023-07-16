import './task.css';

export default function Task({ task, onDelete }) {
    return (
        <div className="task">
            <div className="taskName">{task.name}</div>
            <small className="status">{task.isDone ? 'Done!' : 'Not yet'}</small>
            <small>id: {task.id}</small>
            <button onClick={() => onDelete(task.id)}>remove from list</button>
        </div>
    );
}