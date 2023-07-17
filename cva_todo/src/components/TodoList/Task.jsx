import './task.css';

export default function Task({ task, onDelete }) {
    return (
        <div>
            <div>{task.isDone ? <del>{task.name}</del> : task.name}</div>
            <div>{task.isDone ? 'Done!' : 'Not yet'}</div>
            <div>id: {task.id}</div>
            <button onClick={() => onDelete(task.id)}>remove from list</button>
        </div>
    );
}