import 'bootstrap/dist/css/bootstrap.min.css';

export default function AddButton({ onClick }) {
    return <button onClick={onClick} className='btn btn-secondary' type="button">
        Add task
    </button>
}