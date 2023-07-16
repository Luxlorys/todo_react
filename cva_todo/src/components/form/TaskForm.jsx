import AddButton from "../button/AddButton";
import 'bootstrap/dist/css/bootstrap.min.css';
import './taskForm.css';
import { useState } from "react";

export default function TaskForm({tasks, setTask}) {
    const [taskName, setTaskName] = useState('');

    const handleSubmit= (e) => {
        e.preventDefault();

        const newTask = {
            id: tasks.length + 1,
            name: taskName,
            isDone: false,
        }

        setTask([...tasks, newTask]);
        setTaskName('');
    };

    return (
        <div className="container" onSubmit={handleSubmit}>
            <form className="form-inline">

                <div className="form-group mx-sm-3 mb-2">
                    <input 
                        type="text"
                        value={taskName} 
                        className="form-control" 
                        onChange={e => setTaskName(e.target.value)}/>
                </div>

                <button type="submit" className="btn btn-primary">Add new task</button>
            </form>
        </div>
    );
}