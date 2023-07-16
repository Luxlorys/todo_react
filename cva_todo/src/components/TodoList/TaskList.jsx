export default function TaskList({tasks}) {
    return (
        <div>
            <ul>
                {
                    tasks.map(task => (
                        <li>{task.name}</li>
                    ))
                }
            </ul>
        </div>
    );
}